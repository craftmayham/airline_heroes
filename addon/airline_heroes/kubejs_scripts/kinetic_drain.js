StartupEvents.registry('mob_effect', event => {
    event.create('airline_heroes:kinetic_drain')
        .color(0x000000)
        .beneficial()
        .effectTick((entity, lvl) => {
            if (!entity.server) return;

            const scoreboard = entity.server.getScoreboard();
            const objective = scoreboard.getObjective('kinetic_drain');
            if (!objective) return;

            const players = entity.server.players;

            for (const player of players) {
                if (superpowerUtil.hasSuperpower(player, "airline_heroes:energy_transference")) {
                    let username = player.getGameProfile().getName();
                    scoreboard.getOrCreatePlayerScore(username, objective).add(1);
                }
            }
        });
});