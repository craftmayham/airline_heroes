let ClientboundSetEntityMotionPacket = Java.loadClass('net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket');

StartupEvents.registry("palladium:abilities", event => {
  event.create("airline_heroes:pull")
    .icon(palladium.createItemIcon('minecraft:egg'))
    .documentationDescription('Gives motion to the player.')
    .addProperty("motion_scale", "float", 1, "Motion Scale")
    .tick((entity, entry, holder, enabled) => {
      if (enabled) {
        const motionscale = entry.getPropertyByName("motion_scale")

        if (entity !== null) {
          let motion = entity.getLookAngle().scale(motionscale);
          entity.setDeltaMovement(motion);       
            entity.connection.send(new ClientboundSetEntityMotionPacket(entity));
        }
      }
    })
});