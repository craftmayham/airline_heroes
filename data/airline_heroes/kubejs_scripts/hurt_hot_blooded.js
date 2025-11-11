EntityEvents.hurt((event) => {
    if (!event.source.damage) return

     if (event.source.damage.player) {
        let player = event.source.damage
        let hurtEntity = event.entity
		    const scoreboard = player.server.getScoreboard();
            const objective = scoreboard.getObjective('airline_heroes.heat_build_up');
		
        if (palladium.abilities.isEnabled(player, "airline_heroes:hot_blooded", "hot_blooded_build_up")) {
            scoreboard.getOrCreatePlayerScore(player.username, objective).add(500);
			    let pos = hurtEntity.blockPosition().mutable()
				let posfixed = pos.y+1
        player.server.runCommandSilent(`particle airline_heroes:air_punch ${pos.x} ${posfixed} ${pos.z} 0 0 0 0 5 force`);
        }
    }
});