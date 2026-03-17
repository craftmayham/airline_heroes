StartupEvents.registry('palladium:abilities', (event) => {

    event.create('airline_heroes:teleport')

        .icon(palladium.createItemIcon('minecraft:ender_pearl'))

        .addProperty('max_distance', 'integer', 10, 'Max distance that the player can teleport.')
        .tick((entity, entry, holder, enabled) => {
            if (enabled) {

                let username = entity.getGameProfile().getName();
                entity.runCommandSilent(`function airline_heroes:safe_teleport`);
            }


        }
        )
});