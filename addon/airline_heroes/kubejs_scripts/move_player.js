let ClientboundSetEntityMotionPacket = Java.loadClass('net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket');

StartupEvents.registry('palladium:abilities', event => {
    event.create('airline_heroes:move_player')
        .icon(palladium.createItemIcon('minecraft:elytra'))
        .displayName('Move Player')
        .documentationDescription('Moves a player in a non-relative direction.')
        .addProperty('x', 'double', 0.0, 'X strength multiplier')
		.addProperty('y', 'double', 2.0, 'Y strength multiplier')
		.addProperty('z', 'double', 0.0, 'Z strength multiplier')
 .tick((entity, entry, holder, enabled) => {
            if (!enabled) return;
    
            const x = entry.getPropertyByName('x');
			const y = entry.getPropertyByName('y');
			const z = entry.getPropertyByName('z');
			
             let newVec3 = new $Vec3(x,y, z)        
					 entity.setDeltaMovement(newVec3);
            // Apply velocity     
			              if (entity.isPlayer()) {
                        entity.connection.send(new ClientboundSetEntityMotionPacket(entity));
                    }
        });
});
