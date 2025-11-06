// File: kubejs/server_scripts/achievement_points.js

// Listen for when a player completes an advancement
PlayerEvents.advancement(event => {
    let player = event.player;

    palladium.scoreboard.addScore(player, 'airline_heroes.skill_points', 1);
    
});
