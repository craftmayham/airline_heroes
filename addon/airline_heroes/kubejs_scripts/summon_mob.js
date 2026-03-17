StartupEvents.registry('palladium:abilities', event => {
    event.create('airline_heroes:summon_mob')
        .icon(palladium.createItemIcon('minecraft:egg'))
        .displayName('Summon Mob')
        .documentationDescription('Summons a mob(s) on the player')
        .addProperty('x', 'double', 0.0, 'X offset')
        .addProperty('y', 'double', 0.0, 'Y offset')
        .addProperty('z', 'double', 0.0, 'Z offset')
        .addProperty('mob', 'string', 'minecraft:wolf', 'The Mob to summon')
        .addProperty('tamed', 'boolean', true, 'Whether the mob should be tamed')
        .tick((entity, entry, holder, enabled) => {
            if (!enabled) return;
            const mob = entry.getPropertyByName('mob');
            const x = entry.getPropertyByName('x');
            const y = entry.getPropertyByName('y');
            const z = entry.getPropertyByName('z');
            const tamed = entry.getPropertyByName('tamed');
            const summon = entity.level.createEntity(mob);
            if (tamed) {
                summon.mergeNbt({ Owner: entity.getUuid().toString() });
            }
            summon.setPosition(entity.x + x, entity.y + y, entity.z + z);
            summon.spawn();
        });
});
