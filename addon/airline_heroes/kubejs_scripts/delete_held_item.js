StartupEvents.registry('palladium:abilities', (event) => {
    event.create('airline_heroes:delete_held_item')
        .icon(palladium.createItemIcon('minecraft:diamond_sword'))
        .tick((entity, entry, holder, enabled) => {
            if (enabled && entity.isPlayer()) {
                let mainHandItem = entity.getMainHandItem();
                if (!mainHandItem.isEmpty()) {
                    mainHandItem.shrink(1);
                }
            }
        });
});
