let ClientboundSetEntityMotionPacket = Java.loadClass('net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket');
StartupEvents.registry('palladium:abilities', event => {
    event.create('airline_heroes:launch_player')
        .icon(palladium.createItemIcon('minecraft:elytra'))
        .displayName('Launch Forward')
        .documentationDescription('Launches the player in the direction they are looking.')
        .addProperty('power', 'double', 2.0, 'Launch strength multiplier')
 .tick((entity, entry, holder, enabled) => {
            // Only active when toggled on
            if (!enabled) return;
            if (!entity.level || entity.level.isClientSide()) return;
 
            const lookVec = entity.getLookAngle(); // Vec3d
            const launchPower = entry.getPropertyByName('power');
            const motion = lookVec.scale(launchPower);
                   
					 entity.setDeltaMovement(motion);
            // Apply velocity boost in the look direction      
			              if (entity.isPlayer()) {
                        entity.connection.send(new ClientboundSetEntityMotionPacket(entity));
                    }
        });
});