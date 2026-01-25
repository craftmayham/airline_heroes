PlayerEvents.tick((event) => {
  let player = event.player;
  let y = player.y;
  let dim = player.level.dimension;
  const pos = player.blockPosition();
  if (dim == "minecraft:overworld" && palladium.abilities.hasPower(player, "airline_heroes:on_moon")) {
    palladium.superpowers.removeSuperpower(player, "airline_heroes:on_moon");
  } else if (dim == "airline_heroes:the_moon" && !palladium.abilities.hasPower(player, "airline_heroes:on_moon")) {
    palladium.superpowers.addSuperpower(player, "airline_heroes:on_moon");
  }
  if (y > 299) {
    if (dim == "minecraft:overworld") {
      player.teleportTo(
        "airline_heroes:the_moon",
        pos.x,
        295,
        pos.z,
        player.yaw,
        player.pitch
      );
    }
    if (dim == "airline_heroes:the_moon") {
      player.teleportTo(
        "minecraft:overworld",
        pos.x,
        295,
        pos.z,
        player.yaw,
        player.pitch
      );
    }
  }
});
