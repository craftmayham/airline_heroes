StartupEvents.registry("palladium:abilities", (event) => {
  event
    .create("airline_heroes:erasure")
    .addProperty("range", "integer", 5, "range to nullify from")
    .addProperty(
      "effect",
      "string_array",
      [],
      "The effect to be applied"
    )
    .addProperty("time", "integer", 120, "the amount of seconds the effect will last")
    .tick((entity, entry, enabled) => {
      if (enabled) {
        let range = entry.getPropertyByName("range");
        let target = entity.rayTrace(range).entity;
        let effect = entry.getPropertyByName("effect");
        let time = entry.getPropertyByName("time");
        if (target === null) return;
        if (target !== null) {
            effect.forEach((effect) => {
                target.potionEffects.add(effect, time, 1, true, true);
            });
        }
      }
    });
}); //by Purphect
