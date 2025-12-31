StartupEvents.registry('mob_effect', event => {
  event.create('airline_heroes:nullified') // Create the effect under "airline_heroes:nullified"
    .color(0x000000) // Sets the color of the Effect's Particles.
    .harmful() // Categorizes the Effect as Harmful.

  event.create('airline_heroes:space_breathing')
    .color(0x888888)
})