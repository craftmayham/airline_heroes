EntityEvents.spawned((event) => {
  let moblist = [
    "minecraft:zombie",
    "minecraft:skeleton",
    "minecraft:creeper",
    "minecraft:witch",
    "minecraft:husk",
    "minecraft:stray",
    "minecraft:wither_skeleton",
  ];
  let powerlist = [
    "airline_heroes:mob/2x_stregth",
    "airline_heroes:mob/auditory_mimicry",
    "airline_heroes:mob/big_head",
    "airline_heroes:mob/frigiokinesis",
    "airline_heroes:mob/headcannon",
    "airline_heroes:mob/immortality",
    "airline_heroes:mob/infinity",
    "airline_heroes:mob/intangibility",
    "airline_heroes:mob/ocular_beams",
    "airline_heroes:mob/shadow_fade",
    "airline_heroes:mob/speedster",
    "airline_heroes:mob/tactile_pyrokinesis",
  ];
  if (moblist.includes(event.entity.getType())) {
    let num = Math.floor(Math.random() * 100) + 1;
    if (num <= 5) {
      let power = powerlist[Math.floor(Math.random() * powerlist.length)];
      palladium.superpowers.addSuperpower(event.entity, power);
    }
  }
}); // Made by ShadowLegacy557
