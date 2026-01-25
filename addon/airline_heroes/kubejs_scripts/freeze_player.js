let ClientboundSetEntityMotionPacket = Java.loadClass('net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket');
let $Vec3 = Java.loadClass('net.minecraft.world.phys.Vec3');
StartupEvents.registry('palladium:abilities', event => {
    event.create('airline_heroes:freeze_player')
        .icon(palladium.createItemIcon('minecraft:elytra'))
        .displayName('Freeze Player')
        .documentationDescription('Freezes the player on the y axis')
 .tick((entity, entry, holder, enabled) => {
            if (!enabled) return;
            if (!entity.level || entity.level.isClientSide()) return;

            let vec3 = entity.getDeltaMovement()
            let newVec3 = new $Vec3(0,0, 0)
             entity.setDeltaMovement(newVec3)

                          if (entity.isPlayer()) {
                        entity.connection.send(new ClientboundSetEntityMotionPacket(entity));
                    }
        });
});