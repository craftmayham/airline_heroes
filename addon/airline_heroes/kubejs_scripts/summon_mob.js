StartupEvents.registry('palladium:abilities', event => {
    event.create('airline_heroes:summon_mob')
        .icon(palladium.createItemIcon('minecraft:egg'))
        .displayName('Summon Mob')
        .documentationDescription('Summons a mob(s) on the player')
        .addProperty('x', 'double', 0.0, 'X offset')
        .addProperty('y', 'double', 0.0, 'Y offset')
        .addProperty('z', 'double', 0.0, 'Z offset')
        .addProperty('mob', 'string', 'minecraft:wolf', 'The Mob to summon')
        .addProperty('tamed', 'boolean', true, 'Whether the mob should be tamed')
        .addProperty('random', 'boolean', false, 'Whether to randomly select a mob')
        .tick((entity, entry, holder, enabled) => {
            if (!enabled) return;
            let mob = entry.getPropertyByName('mob');
            const random = entry.getPropertyByName('random');
            const mobs = [
                //Passive
                "minecraft:allay",
                "minecraft:armadillo",
                "minecraft:axolotl",
                "minecraft:bat",
                "minecraft:bee",
                "minecraft:camel",
                "minecraft:cat",
                "minecraft:chicken",
                "minecraft:cod",
                "minecraft:cow",
                "minecraft:donkey",
                "minecraft:frog",
                "minecraft:fox",
                "minecraft:glow_squid",
                "minecraft:goat",
                "minecraft:horse",
                "minecraft:llama",
                "minecraft:mooshroom",
                "minecraft:mule",
                "minecraft:ocelot",
                "minecraft:panda",
                "minecraft:parrot",
                "minecraft:pig",
                "minecraft:pufferfish",
                "minecraft:rabbit",
                "minecraft:salmon",
                "minecraft:sheep",
                "minecraft:skeleton_horse",
                "minecraft:sniffer",
                "minecraft:snow_golem",
                "minecraft:squid",
                "minecraft:strider",
                "minecraft:tadpole",
                "minecraft:tropical_fish",
                "minecraft:turtle",
                "minecraft:villager",
                "minecraft:wandering_trader",
                "minecraft:wolf",

                //Neutral
                "minecraft:bee",
                "minecraft:cave_spider",
                "minecraft:dolphin",
                "minecraft:drowned",
                "minecraft:enderman",
                "minecraft:goat",
                "minecraft:iron_golem",
                "minecraft:llama",
                "minecraft:piglin",
                "minecraft:piglin_brute",
                "minecraft:polar_bear",
                "minecraft:spider",
                "minecraft:trader_llama",
                "minecraft:wolf",
                "minecraft:zombified_piglin",

                //Hostile
                "minecraft:blaze",
                "minecraft:breeze",
                "minecraft:bogged",
                "minecraft:creeper",
                "minecraft:elder_guardian",
                "minecraft:endermite",
                "minecraft:evoker",
                "minecraft:ghast",
                "minecraft:guardian",
                "minecraft:hoglin",
                "minecraft:husk",
                "minecraft:illusioner",
                "minecraft:magma_cube",
                "minecraft:phantom",
                "minecraft:piglin_brute",
                "minecraft:pillager",
                "minecraft:ravager",
                "minecraft:shulker",
                "minecraft:silverfish",
                "minecraft:skeleton",
                "minecraft:slime",
                "minecraft:stray",
                "minecraft:vex",
                "minecraft:vindicator",
                "minecraft:warden",
                "minecraft:witch",
                "minecraft:wither_skeleton",
                "minecraft:zoglin",
                "minecraft:zombie",
                "minecraft:zombie_villager",

                //Bosses
                "minecraft:wither"
            ];
            const randommob = mobs[Math.floor(Math.random() * mobs.length)];
            if (random) {
                mob = randommob;
            }
            const x = entry.getPropertyByName('x');
            const y = entry.getPropertyByName('y');
            const z = entry.getPropertyByName('z');
            const tamed = entry.getPropertyByName('tamed');
            const summon = entity.level.createEntity(mob);
            if (tamed) {
                summon.mergeNbt({ Owner: entity.getUuid().toString() });
            }
            summon.setPosition(entity.x + x, entity.y + y, entity.z + z);
            summon.spawn();
        });
});

StartupEvents.registry('palladium:abilities', event => {
    event.create('airline_heroes:slime_launch')
        .icon(palladium.createItemIcon('minecraft:egg'))
        .displayName('Slime Launch')
        .documentationDescription('Launches a slime in the direction the player is looking')
        .addProperty('x', 'double', 0.0, 'X offset')
        .addProperty('y', 'double', 1.0, 'Y offset')
        .addProperty('z', 'double', 0.0, 'Z offset')
        .addProperty('mob', 'string', 'minecraft:slime', 'The Mob to summon')
        .addProperty('tamed', 'boolean', true, 'Whether the mob should be tamed')
        .addProperty('random', 'boolean', false, 'Whether to randomly select a mob')
        .tick((entity, entry, holder, enabled) => {
            if (!enabled) return;
            let mob = entry.getPropertyByName('mob');
            const x = entry.getPropertyByName('x');
            const y = entry.getPropertyByName('y');
            const z = entry.getPropertyByName('z');
            const tamed = entry.getPropertyByName('tamed');
            const summon1 = entity.level.createEntity(mob);
            const summon2 = entity.level.createEntity(mob);
            const summon3 = entity.level.createEntity(mob);
            summon1.mergeNbt({ Size: 2 });
            summon2.mergeNbt({ Size: 2 });
            summon3.mergeNbt({ Size: 2 });

            summon1.setPosition(entity.x + x, entity.y + y, entity.z + z);
            summon1.spawn();
            summon2.setPosition(entity.x + x, entity.y + y, entity.z + z);
            summon2.spawn();
            summon3.setPosition(entity.x + x, entity.y + y, entity.z + z);
            summon3.spawn();

            const lookVec = entity.getLookAngle();
            const launchPower = 1.5
            const motion = lookVec.scale(launchPower);
            summon1.setDeltaMovement(motion);
            summon2.setDeltaMovement(motion);
            summon3.setDeltaMovement(motion);
        });
});
