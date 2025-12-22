StartupEvents.registry("palladium:abilities", (event) => {
  //Power Transferal
  event
    .create("airline_heroes:ofa")
    .addProperty("range", "integer", 5, "range to pass the power from")
    .addProperty(
      "whitelist",
      "string_array",
      [],
      "powers that can be passed on"
    )
    .addProperty(
      "player_only",
      "boolean",
      true,
      "only pass the ability to players"
    )
    .addProperty(
      "tag",
      "string",
      "airline_heroes.pastuser",
      "the tag that is applied to the entity when this ability is active."
    )
    .tick((entity, entry, enabled) => {
      if (enabled && entity.isPlayer()) {
        let range = entry.getPropertyByName("range");
        let whitelist = entry.getPropertyByName("whitelist");
        let tag = entry.getPropertyByName("tag");
        let target = entity.rayTrace(range).entity;
        let playerOnly = entry.getPropertyByName("player_only");
        if (playerOnly === true && (target === null || !target.isPlayer()))
          return;
        if (target !== null && !target.tags.contains(tag)) {
          whitelist.forEach((p) => {
            if (
              palladium.superpowers.hasSuperpower(entity, p) &&
              !palladium.superpowers.hasSuperpower(target, p)
            ) {
              entity.tags.add(tag);
              palladium.superpowers.addSuperpower(target, p);
            } else return;
          });
        }
      }
    });
}); // Original By ShadowLegacy - Edited by Purphect
