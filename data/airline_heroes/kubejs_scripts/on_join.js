PlayerEvents.loggedIn(event => {
    const player = event.player
    const username = player.getGameProfile().getName();
    event.server.runCommandSilent(`scoreboard objectives add airline_heroes.skill_points dummy`);
    event.server.runCommandSilent(`scoreboard objectives add airline_heroes.potential_energy dummy`);
	event.server.runCommandSilent(`execute unless score ${username} airline_heroes.skill_points matches 0.. run scoreboard players set ${username} airline_heroes.skill_points 0`);
})