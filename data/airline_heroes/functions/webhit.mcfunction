execute at @e[distance=0..5, tag=!webimmune, type=!palladium:custom_projectile, limit=1, type=!minecraft:item, type=!minecraft:arrow, sort=nearest] run fill ~ ~ ~ ~ ~1 ~ minecraft:cobweb
superpower add airline_heroes:effect_webbed @e[distance=0..5, tag=!webimmune, type=!palladium:custom_projectile, limit=1, type=!minecraft:item, type=!minecraft:arrow, sort=nearest] 
damage @e[distance=0..5, tag=!webimmune, type=!palladium:custom_projectile, limit=1, type=!minecraft:item, type=!minecraft:arrow, sort=nearest] 5 minecraft:player_attack by @p[tag=webimmune,sort=nearest,limit=1]
effect give @e[distance=0..5, tag=!webimmune, type=!palladium:custom_projectile, limit=1, type=!minecraft:item, type=!minecraft:arrow, sort=nearest] slowness 5 100
