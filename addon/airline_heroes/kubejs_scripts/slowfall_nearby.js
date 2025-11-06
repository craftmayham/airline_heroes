// File: kubejs/startup_scripts/beacon_aura.js

StartupEvents.registry('palladium:abilities', event => {
    event.create('airline_heroes:beacon_aura')
        .icon(palladium.createItemIcon('minecraft:beacon'))
        .displayName('Beacon Aura')
        .documentationDescription('Toggleable aura that grants beacon-like buffs to nearby allies.')
        .addProperty('radius', 'double', 8.0, 'Effect radius in blocks')
        .tick((entity, entry, holder, enabled) => {
            // Only active when toggled on
            if (!enabled) return;
            if (!entity.level || entity.level.isClientSide()) return;

            const radius = entry.getPropertyByName('radius');

            // Create an axis-aligned bounding box around the entity
            const aabb = AABB.of(
                entity.x - radius, entity.y - radius, entity.z - radius,
                entity.x + radius, entity.y + radius, entity.z + radius
            );

            // Get all nearby living entities, excluding the ability holder
            const nearby = entity.level.getEntitiesWithin(aabb)
                .filter(e => e && e.isLiving && e.isLiving() && e !== entity);

            for (const e of nearby) {
                try {
                    // Apply short-duration effects that refresh each tick
                    e.potionEffects.add('minecraft:slowness', 40, 5, false, false);
                    e.potionEffects.add('minecraft:slow_falling', 40, 0, false, false);
                    e.potionEffects.add('minecraft:mining_fatigue', 40, 2, false, false);
					e.potionEffects.add('airline_heroes:kinetic_drain',40, 0, true, true);
                } catch (err) {
                    console.warn('[BeaconAura] Skipped ${e} — ${err}');
                }
            }
        });
});
