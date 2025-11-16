let ClientboundSetEntityMotionPacket =
  Java.loadClass("net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket");

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
        if (target === entity) return; // skip self

        // direction = (targetPos - playerPos)
        let dir = target.position().subtract(entity.position());

        // Normalize length to 1 then scale
        dir = dir.normalize().scale(motionScale);

        // Apply velocity
        target.setDeltaMovement(dir);

        // Needed for players
        if (target.isPlayer()) {
          target.connection.send(new ClientboundSetEntityMotionPacket(target));
        }
      });
    });
});