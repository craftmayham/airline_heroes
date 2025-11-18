// File: kubejs/server_scripts/achievement_points.js

// Listen for when a player completes an advancement
PlayerEvents.advancement(event => {
    let player = event.player;
    
	let scoreboard = player.server.getScoreboard();
    let objective = scoreboard.getObjective('airline_heroes.skill_points');
    scoreboard.getOrCreatePlayerScore(player.username, objective).add(1);
    
});
