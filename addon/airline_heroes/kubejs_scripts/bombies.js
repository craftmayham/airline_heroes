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
          let bomb = "bomb";
          let target1 = target.getUuid().toString().toLowerCase();
          if (palladium.getProperty(entity, bomb) == "empty") {
            palladium.setProperty(entity, bomb, target1);
            palladium.setProperty(target, "marked", true);
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
        let bomb = "bomb";
        let target1 = entityFromUUID(
          entity.level,
          palladium.getProperty(entity, bomb)
        );
        if (target1 == null) return;
        let posX = target1.x;
        let posY = target1.y;
        let posZ = target1.z;
        let explosion = entity.level.createExplosion(posX, posY, posZ);
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
      }
    });
});
