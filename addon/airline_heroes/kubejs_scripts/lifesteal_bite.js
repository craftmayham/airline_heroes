StartupEvents.registry("palladium:abilities", event => {
  event.create("airline_heroes:lifesteal_bite")
    .icon(palladium.createItemIcon('minecraft:iron_sword'))
    .documentationDescription('Bites a mob, dealing damage and healing the player for a portion of the damage dealt.')
    .addProperty('range', 'double', 4.0, 'Range')
    .addProperty('damage', 'double', 6.0, 'Damage')
    .tick((entity, entry, holder, enabled) => {
      const range = entry.getPropertyByName('range');
      const damage = entry.getPropertyByName('damage');
      if (enabled) {
        let result = entity.rayTrace(range, true);
        if (!result) {
          return;
        }
        if (result.entity) {
          let target = result.entity;
          target.attack(damage);
          entity.heal(damage);
        }
      }
    })
});