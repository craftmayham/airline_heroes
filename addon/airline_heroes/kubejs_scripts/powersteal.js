StartupEvents.registry("palladium:abilities", (event) => {
  // PowerSteal
  event
    .create("airline_heroes:afo_steal")
    .addProperty("range", "integer", 5, "range to steal power from")
    .addProperty("whitelist", "string_array", [], "powers that can be stolen")
    .addProperty(
      "max",
      "integer",
      5,
      "maximum number of powers that can be stolen"
    )
    .firstTick((entity, entry, enabled) => {
      let range = entry.getPropertyByName("range");
      let whitelist = entry.getPropertyByName("whitelist");
      let max = entry.getPropertyByName("max");
      let prop = palladium.getProperty(entity, "powerCount");
      let target = entity.rayTrace(range).entity;
      if (target !== null && enabled) {
        whitelist.forEach((p) => {
          if (
            palladium.superpowers.hasSuperpower(entity, "airline_heroes:ofa")
          ) {
            return;
          }
          if (
            palladium.superpowers.hasSuperpower(target, p) &&
            !palladium.superpowers.hasSuperpower(entity, p) &&
            prop < max
          ) {
            palladium.superpowers.removeSuperpower(target, p);
            palladium.superpowers.addSuperpower(entity, p);
            palladium.setProperty(entity, "powerCount", prop + 1);
          } else return;
        });
      }
    });
  event
    .create("airline_heroes:afo_transfer")
    .addProperty("range", "integer", 5, "range to pass the power from")
    .addProperty(
      "whitelist",
      "string_array",
      [],
      "powers that can be passed on"
    )
    .firstTick((entity, entry, enabled) => {
      let range = entry.getPropertyByName("range");
      let whitelist = entry.getPropertyByName("whitelist");
      let prop = palladium.getProperty(entity, "powerCount");
      let target = entity.rayTrace(range).entity;
      if (enabled && target === null) return;
      if (!enabled) return;
      if (enabled && target !== null) {
        whitelist.forEach((p) => {
          if (
            palladium.superpowers.hasSuperpower(entity, p) &&
            !palladium.superpowers.hasSuperpower(target, p)
          ) {
            palladium.superpowers.addSuperpower(target, p);
            palladium.superpowers.removeSuperpower(entity, p);
            palladium.setProperty(entity, "powerCount", prop - 1);
          } else return;
        });
      }
    });
  event.create("airline_heroes:afo_reset").firstTick((entity, enabled) => {
    let prop = palladium.getProperty(entity, "powerCount");
    if (enabled) {
      palladium.setProperty(entity, "powerCount", (prop = 0));
    }
  });
}); // Originals By ShadowLegacy - Edited by Purphect
