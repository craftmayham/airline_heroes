StartupEvents.registry('palladium:abilities', event => {
    event.create('airline_heroes:nullify')
        .icon(palladium.createItemIcon('minecraft:beacon'))
        .addProperty('radius', 'double', 8.0, 'Effect radius in blocks')
		.addProperty('time', 'double', 2, 'How long effect lasts')
		.addProperty('effect', 'string', 'airline_heroes:nullified', 'Effect ID to apply')
        .tick((entity, entry, holder, enabled) => {
            if (!enabled) return;
            if (!entity.level || entity.level.isClientSide()) return;

            const radius = entry.getPropertyByName('radius');
            const time = entry.getPropertyByName('time');
			const effect = entry.getPropertyByName('effect');
			
            // Create bounding box
            const aabb = AABB.of(
                entity.x - radius, entity.y - radius, entity.z - radius,
                entity.x + radius, entity.y + radius, entity.z + radius
            );

            // Get all nearby living entities, excluding the ability holder
            const nearby = entity.level.getEntitiesWithin(aabb)
                .filter(e => e && e !== entity);

            for (const e of nearby) {
					  
                    // Apply potion effects each tick
			    try {
					e.potionEffects.add(effect,time, 4, false, true); 
					
					} 
					catch (err) { console.warn('[PotionAOE] Skipped ${e} — ${err}'); 
					}
            }
        });
});