StartupEvents.registry('mob_effect', event => {
  event.create('airline_heroes:nullified') // Create the effect under "airline_heroes:nullified"
    .color(0x000000) // Sets the color of the Effect's Particles.
    .harmful() // Categorizes the Effect as Harmful.

  event.create('airline_heroes:space_breathing')
    .color(0x888888)

  event.create('airline_heroes:freeze')
    .color(0x000000)
    .beneficial()
    .effectTick((entity, lvl) => {
      if (!entity.server) return;

      const scoreboard = entity.server.getScoreboard();
      const objective = scoreboard.getObjective('airline_heroes.potential_energy');
      if (!objective) return;

      const players = entity.server.players;

      for (const player of players) {
        if (superpowerUtil.hasSuperpower(player, "airline_heroes:energy_transference")) {
          let username = player.getGameProfile().getName();
          scoreboard.getOrCreatePlayerScore(username, objective).add(1);
        }
      }
    });
})
