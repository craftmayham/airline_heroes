let ClientboundSetEntityMotionPacket = Java.loadClass('net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket');
let $Vec3 = Java.loadClass('net.minecraft.world.phys.Vec3');
StartupEvents.registry('palladium:abilities', event => {
    event.create('airline_heroes:climb')
        .icon(palladium.createItemIcon('minecraft:elytra'))
        .displayName('Climb')
        .documentationDescription('Climb ability')
 .tick((entity, entry, holder, enabled) => {
            // Only active when toggled on
            if (!enabled) return;
            if (!entity.level || entity.level.isClientSide()) return;

            let vec3 = entity.getDeltaMovement()
            let newVec3 = new $Vec3(vec3.x(),0.2, vec3.z())
             entity.setDeltaMovement(newVec3)

                          if (entity.isPlayer()) {
                        entity.connection.send(new ClientboundSetEntityMotionPacket(entity));
                    }
        });
});