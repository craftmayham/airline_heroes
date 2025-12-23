EntityEvents.hurt((event) => {
    if (!event.source.actual) return

     if (event.source.actual.player) {
        let player = event.source.actual
        let hurtEntity = event.entity
		    const scoreboard = player.server.getScoreboard();
            const objective = scoreboard.getObjective('airline_heroes.kinetic_energy');
		
        if (palladium.abilities.isEnabled(player, "airline_heroes:kinetic_energy_manipulation", "charge_arms_dummy")) {
            scoreboard.getOrCreatePlayerScore(player.username, objective).add(-100);
			    let pos = hurtEntity.blockPosition().mutable()
				let posfixed = pos.y+1
            player.server.runCommandSilent(`particle airline_heroes:air_punch ${pos.x} ${posfixed} ${pos.z} 0 0 0 0 5 force`);
            player.server.runCommandSilent(`particle minecraft:dust 0.6 0.08 0.78 100 ${pos.x} ${posfixed} ${pos.z} 0 0 0 1 3 force`);
        }
    }
});