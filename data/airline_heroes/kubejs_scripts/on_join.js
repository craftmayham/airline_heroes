PlayerEvents.loggedIn(event => {
    const player = event.player
    const username = player.getGameProfile().getName();
    event.server.runCommandSilent(`scoreboard objectives add airline_heroes.skill_points dummy`);
    event.server.runCommandSilent(`scoreboard objectives add airline_heroes.potential_energy dummy`);

	event.server.runCommandSilent(`scoreboard objectives add airline_heroes.golden_carrot minecraft.used:minecraft.golden_carrot`);
	event.server.runCommandSilent(`scoreboard objectives add airline_heroes.cake minecraft.custom:minecraft.eat_cake_slice`);
	event.server.runCommandSilent(`scoreboard objectives add airline_heroes.melon minecraft.used:minecraft.melon_slice`);
	
	event.server.runCommandSilent(`scoreboard objectives add airline_heroes.glow_berries minecraft.used:minecraft.glow_berries`);
	event.server.runCommandSilent(`scoreboard objectives add airline_heroes.potato minecraft.used:minecraft.potato`);
	
	event.server.runCommandSilent(`scoreboard objectives add airline_heroes.heat_build_up dummy`);
	event.server.runCommandSilent(`scoreboard objectives add airline_heroes.struck_by_lightning dummy`);
	event.server.runCommandSilent(`scoreboard objectives add airline_heroes.heat_build_up_timer dummy`);	
	
	event.server.runCommandSilent(`scoreboard objectives add airline_heroes.kinetic_energy dummy`);	
	
})