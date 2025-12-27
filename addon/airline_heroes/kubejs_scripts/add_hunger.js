StartupEvents.registry('palladium:abilities', (event) => {
    event.create('airline_heroes:add_hunger')
        .icon(palladium.createItemIcon('minecraft:steak'))
        .documentationDescription('Sets your hunger')
		.addProperty('hunger', 'integer', -1, 'Amount of hunger to add')

        .tick((entity, entry, holder, enabled) => {
			const hunger = entry.getPropertyByName("hunger");
            if (enabled && entity.isPlayer()) {
                entity.foodData.foodLevel = Math.min(20, Math.max(0, entity.foodData.foodLevel + hunger));
            } 
        });
});