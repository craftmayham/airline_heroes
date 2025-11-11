EntityEvents.hurt((event) => {
    if (!event.source.actual) return

     if (event.source.actual.player) {
        let player = event.source.actual
        let hurtEntity = event.entity
		    const scoreboard = player.server.getScoreboard();
            const objective = scoreboard.getObjective('airline_heroes.heat_build_up');
		
        if (palladium.abilities.isEnabled(player, "airline_heroes:hot_blooded", "hot_blooded_build_up")) {
            scoreboard.getOrCreatePlayerScore(player.username, objective).add(500);
			    let pos = hurtEntity.blockPosition().mutable()
				let posfixed = pos.y+1
        player.server.runCommandSilent(`particle airline_heroes:air_punch ${pos.x} ${posfixed} ${pos.z} 0 0 0 0 5 force`);
        };
		if (palladium.abilities.isEnabled(hurtEntity, "airline_heroes:hot_blooded", "hot_blooded_build_up")) {
            scoreboard.getOrCreatePlayerScore(hurtEntity.username, objective).add(500);
			    let pos = player.blockPosition().mutable()
				let posfixed = pos.y+1
        hurtEntity.server.runCommandSilent(`particle airline_heroes:air_punch ${pos.x} ${posfixed} ${pos.z} 0 0 0 0 5 force`);
        }
    }
});