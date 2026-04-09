StartupEvents.registry('palladium:condition_serializer', (event) => {
  event.create('airline_heroes:has_hunger')
    .displayName('Has Hunger')
    .documentationDescription('Checks if the player has a certain amount of hunger')
    .addProperty('min_hunger', 'integer', 1, 'Minimum hunger level to pass')
    .addProperty('max_hunger', 'integer', 20, 'Maximum hunger level to pass')
    .test((entity, props) => {

      if (entity.isPlayer()) {


        const hunger = entity.foodData.foodLevel;

        return hunger >= props.min_hunger && hunger <= props.max_hunger;
      }
    });
});

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