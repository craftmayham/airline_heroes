StartupEvents.registry('palladium:abilities', (event) => {

  event.create('airline_heroes:charge_block')

    .icon(palladium.createItemIcon('minecraft:end_crystal'))

    .addProperty('max_distance', 'integer', 10, 'Max distance that a block can be charged from.')
    .addProperty("score_value", "string", "Score.Board", "Scoreboard Name")

    .tick((entity, entry, holder, enabled) => {
      if (enabled) {
        const max_distance = entry.getPropertyByName('max_distance');
        let scoreboard_obj = scoreboard.getObjective(entry.getPropertyByName("score_value"));
        let username = entity.getGameProfile().getName();
        let target = entity.rayTrace(range).block;
      };
    });
});