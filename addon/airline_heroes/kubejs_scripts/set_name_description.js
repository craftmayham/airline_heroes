StartupEvents.registry('palladium:abilities', event => {
    event.create('airline_heroes:set_name_description')
        .icon(palladium.createItemIcon('minecraft:beacon'))
        .displayName('Set Name And Description')
        .documentationDescription('Potion area of effect')
        .addProperty('power_name', 'string', 'Example Name', 'Superpower name used in skill tree')
		.addProperty('power_description', 'string', 'Example Description', 'Superpower description used in skill tree')
        .firstTick((entity, entry, holder, enabled) => {
            if (!enabled) return;
            if (!entity.level || entity.level.isClientSide()) return;

        const name = entry.getPropertyByName('power_name');
		const description = entry.getPropertyByName('power_description');
        palladium.setProperty(entity, 'name', name);
        palladium.setProperty(entity, 'description', description);
        });
});
