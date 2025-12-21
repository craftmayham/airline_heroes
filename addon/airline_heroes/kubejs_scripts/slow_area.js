let ClientboundSetEntityMotionPacket = Java.loadClass('net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket');
StartupEvents.registry('palladium:abilities', event => {
    event.create('airline_heroes:slow_area')
        .icon(palladium.createItemIcon('minecraft:beacon'))
        .displayName('Slow Area')
        .documentationDescription('Toggleable aoe that slows entities and grants them the "Kinetic Drain Effect"')
        .addProperty('radius', 'double', 8.0, 'Effect radius in blocks')
		.addProperty('speed', 'double', 0.5, 'Speed of slowness')
        .tick((entity, entry, holder, enabled) => {
            if (!enabled) return;
            if (!entity.level || entity.level.isClientSide()) return;

            const radius = entry.getPropertyByName('radius');
            const speed = entry.getPropertyByName('speed');
			
            // Create bounding box
            const aabb = AABB.of(
                entity.x - radius, entity.y - radius, entity.z - radius,
                entity.x + radius, entity.y + radius, entity.z + radius
            );

            // Get all nearby living entities, excluding the ability holder
            const nearby = entity.level.getEntitiesWithin(aabb)
                .filter(e => e && e !== entity);

            for (const e of nearby) {
				      let motion = e.getDeltaMovement().multiply(speed, speed, speed);
                      e.setDeltaMovement(motion)  
					  
                    // Apply kinetic drain
			    try {
					e.potionEffects.add('airline_heroes:kinetic_drain',20, 0, true, true); 
					
					} 
					catch (err) { console.warn('[SlowAura] Skipped ${e} — ${err}'); 
					}
			
				                    if (e.isPlayer()) {
                        e.connection.send(new ClientboundSetEntityMotionPacket(e));
                    }
            }
        });
});
