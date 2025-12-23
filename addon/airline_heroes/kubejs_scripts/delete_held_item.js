StartupEvents.registry('palladium:abilities', (event) => {
    event.create('airline_heroes:delete_held_item')
        .icon(palladium.createItemIcon('minecraft:lava_bucket'))
        .addProperty('amount', 'integer', 1, 'Amount of items to delete')

        .tick((entity, entry, holder, enabled) => {
            if (enabled && entity.isPlayer()) {
                const amount = entry.getPropertyByName("amount")

                let mainHandItem = entity.getMainHandItem();
                if (!mainHandItem.isEmpty()) {
                    mainHandItem.shrink(amount);
                }
            }
        });
});
