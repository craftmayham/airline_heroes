const SELECT = "boomSelector"; // selector (integer)
// 'pSlot' power string storage slot (string)
const BOMB = ["bomb1", "bomb2", "bomb", "bomb", "bomb5"];

function entityFromUUID(level, uuid) {
  let entity = level.getEntity(uuid);
  return entity;
}

StartupEvents.registry("palladium:abilities", (event) => {
  event
    .create("airline_heroes:bomb_tag")
    .addProperty("range", "integer", 3, "the range you can steal powers from")
    .tick((entity, entry, holder, enabled) => {
      if (enabled) {
        let range = entry.getPropertyByName("range");
        let target = entity.rayTrace(range).entity;
        if (target != null) {
          let num = palladium.getProperty(entity, SELECT);
          let numstring = String(num);
          let bomb = "bomb" + numstring;
          let target1 = target.getUuid().toString().toLowerCase();
          if (1 <= num <= 5) {
            BOMB.forEach((bomb) => {
              if (palladium.getProperty(entity, bomb) == "empty") {
                palladium.setProperty(entity, bomb, target1);
                palladium.setProperty(target, "marked", true);
              }
            });
          }
        }
      }
    });
});

StartupEvents.registry("palladium:abilities", (event) => {
  event
    .create("airline_heroes:bomb_boom")
    .firstTick((entity, entry, holder, enabled) => {
      if (enabled) {
        let num = palladium.getProperty(entity, SELECT);
        let numstring = String(num);
        let bomb = "bomb" + numstring;
        let target1 = entityFromUUID(
          entity.level,
          palladium.getProperty(entity, bomb)
        );
        let posX = target1.x;
        let posY = target1.y;
        let posZ = target1.z;
        let explosion = entity.level.createExplosion(posX, posY, posZ);
        if (0 < num <= 5 && palladium.getProperty(entity, bomb) !== "empty") {
          BOMB.forEach((bomb) => {
            if (palladium.getProperty(entity, bomb) != "empty") {
              explosion.causesFire(false);
              explosion.strength(2);
              explosion.exploder(entity);
              explosion.explosionMode("none");

              explosion.explode();
              target1.kill();
              palladium.setProperty(entity, bomb, "empty");
            }
            return;
          });
        }
      }
    });
});
