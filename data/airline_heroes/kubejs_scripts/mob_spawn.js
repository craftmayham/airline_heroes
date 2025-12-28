EntityEvents.spawned((event) => {
  let moblist = [
    "minecraft:zombie",
    "minecraft:skeleton",
    "minecraft:creeper",
    "minecraft:spider",
  ];
  let powerlist = [
    "airline_heroes:mob_cyclops",
    "airline_heroes:mob_fire",
    "airline_heroes:mob_immortality",
    "airline_heroes:mob_intangibility",
    "airline_heroes:mob_invisibility",
    "airline_heroes:mob_speed",
    "airline_heroes:mob_strength",
  ];
  if (moblist.includes(event.entity.getType())) {
    let num = Math.floor(Math.random() * 100) + 1;
    if (num <= 5) {
      let power = powerlist[Math.floor(Math.random() * powerlist.length)];
      palladium.superpowers.addSuperpower(event.entity, power);
    }
  }
}); // Made by ShadowLegacy557
