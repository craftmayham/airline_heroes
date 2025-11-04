StartupEvents.registry('palladium:abilities', (event) => {
    event.create('airline_heroes:slowfall_aura')
        .icon(palladium.createItemIcon('minecraft:feather'))
        .documentationDescription('Slows the fall of nearby entities while active.')

        .addProperty('radius', 'double', 6.0, 'Radius around the entity that causes slowfall')
        .addProperty('fall_speed', 'double', -0.05, 'Minimum allowed downward velocity (closer to 0 = slower fall)')

        .tick((entity, entry, holder, enabled) => {
            if (!enabled) return;
            if (!entity.level || entity.level.isClientSide()) return; // run server-side only

            const radius = entry.getPropertyByName('radius');
            const fallSpeed = entry.getPropertyByName('fall_speed'); // e.g. -0.05

            // Create an area to check for entities
            const aabb = AABB.of(
                entity.x - radius, entity.y - radius, entity.z - radius,
                entity.x + radius, entity.y + radius, entity.z + radius
            );

            // Get all nearby entities except the ability holder
            const nearby = entity.level.getEntitiesWithin(aabb).filter(e => e.id != entity.id);

            // Limit downward motion of each entity
            nearby.forEach(e => {
                const motion = e.deltaMovement;
                if (motion.y < fallSpeed) {
                    e.setDeltaMovement(motion.x, fallSpeed, motion.z);
                }
            });
        });
});