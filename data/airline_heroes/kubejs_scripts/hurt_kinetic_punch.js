EntityEvents.hurt((event) => {
    if (!event.source.actual) return

     if (event.source.actual.player) {
        let player = event.source.actual
        let hurtEntity = event.entity
		    const scoreboard = player.server.getScoreboard();
            const objective = scoreboard.getObjective('airline_heroes.potential_energy');
		
        if (palladium.abilities.isEnabled(player, "airline_heroes:energy_transference", "kinetic_punch_damage")) {
            scoreboard.getOrCreatePlayerScore(player.username, objective).add(-500);
			    let pos = hurtEntity.blockPosition().mutable()
				let posfixed = pos.y+1
        player.server.runCommandSilent(`particle airline_heroes:air_punch ${pos.x} ${posfixed} ${pos.z} 0 0 0 0 5 force`);
        }
    }
});