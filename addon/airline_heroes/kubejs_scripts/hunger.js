StartupEvents.registry('palladium:condition_serializer', (event) => {
  event.create('airline_heroes:has_hunger')
    .displayName('Has Hunger')
    .documentationDescription('Checks if the player has a certain amount of hunger')
    .addProperty('min_hunger', 'integer', 1, 'Minimum hunger level to pass')
    .addProperty('max_hunger', 'integer', 20, 'Maximum hunger level to pass')
    .test((entity, props) => {
      // Entity is player
      if (!entity.isPlayer()) {
                return false;
       }

      // Get hunger
      const hunger = entity.foodData.foodLevel;

      // Check if within range
      return hunger >= props.min_hunger && hunger <= props.max_hunger;
    });
});