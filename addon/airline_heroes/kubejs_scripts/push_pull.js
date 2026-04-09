let ClientboundSetEntityMotionPacket = Java.loadClass('net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket');

StartupEvents.registry("palladium:abilities", event => {
  event.create("airline_heroes:push_pull")
    .icon(palladium.createItemIcon('minecraft:egg'))
    .documentationDescription('Gives motion to what the player is looking at.')
    .addProperty("range", "float", 0.0, "Range of the ability")
    .addProperty("motion_scale", "float", 1, "Motion Scale")
    .tick((entity, entry, holder, enabled) => {
      if (enabled) {
        const motionscale = entry.getPropertyByName("motion_scale")
        const range = entry.getPropertyByName('range');

        let target = entity.rayTrace(range).entity;
        if (target !== null) {
          let motion = entity.getLookAngle().scale(motionscale);
          target.setDeltaMovement(motion);

          if (target.isPlayer()) {
            target.connection.send(new ClientboundSetEntityMotionPacket(target));
          }
        }
      }
    })
});

StartupEvents.registry("palladium:abilities", event => {
  event.create("airline_heroes:push_away")
    .icon(palladium.createItemIcon('minecraft:egg'))
    .documentationDescription('Pushes all entities away from the player.')
    .addProperty("range", "float", 5.0, "Range of the push effect")
    .addProperty("motion_scale", "float", 1.0, "How strongly entities are pushed")
    .tick((entity, entry, holder, enabled) => {

      if (!enabled) return;

      const range = entry.getPropertyByName("range");
      const motionScale = entry.getPropertyByName("motion_scale");

      // Get nearby entities
      let entities = entity.level.getEntities(entity, entity.getBoundingBox().inflate(range));

      entities.forEach(target => {
        if (target === entity) return;

        let dir = target.position().subtract(entity.position());

        dir = dir.normalize().scale(motionScale);

        target.setDeltaMovement(dir);

        if (target.isPlayer()) {
          target.connection.send(new ClientboundSetEntityMotionPacket(target));
        }
      });
    });
});