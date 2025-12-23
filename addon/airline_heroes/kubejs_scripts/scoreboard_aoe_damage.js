StartupEvents.registry('palladium:abilities', (event) => {

    event.create('airline_heroes:scoreboard_aoe_damage')
        .icon(palladium.createItemIcon('palladium:vibranium_circuit'))
        .documentationDescription('Deals damage around you based on a scoreboard value')
        .addProperty('radius', 'integer', 10, 'Radius in which surrounding entities will be damaged')
        .addProperty('default_damage', 'string', '3.0', 'Fallback damage if scoreboard is unavailable')
        .addProperty('scoreboard_objective', 'string', 'ability_damage', 'Scoreboard objective name for damage')
        .addProperty('score_divisor', 'string', '1.0', 'Amount to divide the scoreboard value by')
        .addProperty('fire_seconds', 'string', '0.0', 'Seconds the entity should be on fire')
        .addProperty('reset_score_after_use', 'string', 'false', 'Whether to reset the scoreboard value after use (true/false)')

        .tick((entity, entry, holder, enabled) => {
            if (enabled && entity.isPlayer()) {
                const radius = parseFloat(entry.getPropertyByName('radius')) * 2.0;
                const scoreboardName = entry.getPropertyByName('scoreboard_objective');
                const defaultDamage = parseFloat(entry.getPropertyByName('default_damage'));
                const divisor = parseFloat(entry.getPropertyByName('score_divisor'));
                const fireSeconds = parseFloat(entry.getPropertyByName('fire_seconds'));
                const resetAfterUse = entry.getPropertyByName('reset_score_after_use').toLowerCase() === 'true';

                let damage = defaultDamage;
                const scoreboard = Utils.server.scoreboard;
                const scoreboardObj = scoreboard.getObjective(scoreboardName);

                if (scoreboardObj != null) {
                    const playerName = entity.getGameProfile().getName();
                    const playerScore = scoreboard.getOrCreatePlayerScore(playerName, scoreboardObj);
                    const scoreValue = parseFloat(playerScore.getScore());
                    if (divisor !== 0) {
                        damage = scoreValue / divisor;
                    } else {
                        damage = defaultDamage;
                    }
                    console.log(`[AOE DAMAGE DEBUG] Player: ${playerName} | Score: ${scoreValue} | Divisor: ${divisor} | Damage: ${damage}`);

                    // Reset score if enabled
                    if (resetAfterUse) {
                        playerScore.setScore(0);
                        console.log(`[AOE DAMAGE DEBUG] Score for ${playerName} reset to 0 after use.`);
                    }
                }

                const box = AABB.ofSize(entity.position(), radius, radius, radius);
                const targets = entity.level.getEntities(entity, box).toArray();

                for (let target of targets) {
                    if (target !== entity &&
                        !["minecraft:item", "minecraft:item_frame", "minecraft:glow_item_frame", "minecraft:armor_stand", "palladium:suit_stand"].includes(target.type)) {
                        target.attack(damage);
                        if (fireSeconds > 0) target.setSecondsOnFire(fireSeconds);
                    }
                }
            }
        });
});
