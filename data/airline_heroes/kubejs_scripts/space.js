PlayerEvents.tick((event) => {
  let player = event.player;
  let dim = player.level.dimension;

  // Extract persistent data
  let oxygen = parseFloat(player.persistentData.oxygen);
  let tickCounter = parseFloat(player.persistentData.tickCounter);

  if (isNaN(oxygen)) oxygen = 30; // Default oxygen time (30 sec)
  if (isNaN(tickCounter)) tickCounter = 0;

  let eyeBlock = player.level.getBlock(player.x, player.y + player.eyeHeight, player.z);
  let isFullySubmerged = eyeBlock.id === 'minecraft:water';


  if ((dim != "airline_heroes:the_moon")) {
    return;
  }

  if ((dim == "airline_heroes:the_moon")) {
    oxygen = 0;
    tickCounter = 0;
    player.airSupply = 0;

    if (oxygen <= 0  && !player.hasEffect("airline_heroes:space_breathing")) {
        player.attack(1); // Apply suffocation damage
    }
  } else if (player.hasEffect("airline_heroes:space_breathing")) {
    oxygen = 30;
    tickCounter = 0;
  }


  if (dim != "airline_heroes:the_moon" && isFullySubmerged == false) {
        player.airSupply = player.maxAirSupply; // Keep bubbles at max
    }

  // Store updated values in persistent data
  player.persistentData.oxygen = oxygen;
  player.persistentData.tickCounter = tickCounter;
});
