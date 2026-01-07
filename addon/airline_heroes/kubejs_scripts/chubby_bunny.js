let ClientboundSetEntityMotionPacket = Java.loadClass('net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket');

StartupEvents.registry("palladium:abilities", event => {
  event.create("airline_heroes:chubby_feed")
    .icon(palladium.createItemIcon('minecraft:egg'))
    .documentationDescription('Gives motion to the player.')
    .tick((entity, entry, holder, enabled) => {
      if (enabled) {
        let target = entity.rayTrace(10).entity;
        let item = entity.mainHandItem
        entity.setDiscardFriction(true)
        if (entity !== null && item.isEdible() && entity.isPlayer()) {
          entity.eat(entity.level, item)
        }
      }
    })
});