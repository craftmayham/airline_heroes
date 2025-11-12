EntityEvents.hurt((event) => {
    if (!event.source.actual) return;

    let hurtEntity = event.entity;
    let source = event.source.actual;

    // When a player(with the ability) attacks something
    if (source.player) {
        let player = source;
        let scoreboard = player.server.getScoreboard();
        let objective = scoreboard.getObjective('airline_heroes.heat_build_up');

        if (palladium.abilities.isEnabled(player, "airline_heroes:hot_blooded", "hot_blooded_build_up")) {
            scoreboard.getOrCreatePlayerScore(player.username, objective).add(1);

            let pos = hurtEntity.blockPosition().mutable();
            let posfixed = pos.y + 1;
        }
    }

    // When the player(with the ability) is hit
    if (hurtEntity.player && palladium.abilities.isEnabled(hurtEntity, "airline_heroes:hot_blooded", "hot_blooded_build_up")) {
        let scoreboard = hurtEntity.server.getScoreboard();
        let objective = scoreboard.getObjective('airline_heroes.heat_build_up');

        scoreboard.getOrCreatePlayerScore(hurtEntity.username, objective).add(5);

        let pos = hurtEntity.blockPosition().mutable();
        let posfixed = pos.y + 1;   

		// let damage_type = event.source.islightning_bolt
        if (source.isLighting) {

				event.server.runCommandSilent('say ${damage_type}');	

			scoreboard.getOrCreatePlayerScore(hurtEntity.username, scoreboard.getObjective('airline_heroes.struck_by_lightning')).add(1);
		}
    }
	
});