StartupEvents.registry('palladium:abilities', (event) => {
    event.create('airline_heroes:effect_immunity')
        .icon(palladium.createItemIcon('minecraft:diamond'))
        .addProperty("effect", "string_array", [], "The effect the entity is immune to")
        .tick((entity, entry, enabled) => {
            const effect = entry.getPropertyByName("effect")
            if (enabled) {
                effect.forEach((effect) => {
                if(entity.hasEffect(effect)) {
                    entity.removeEffect(effect)
                    }
                });
            }
        });
}); //Original by AP - Edited by Purphect