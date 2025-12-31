StartupEvents.registry("palladium:abilities", (event) => {
  //Power Transferal
  event
    .create("airline_heroes:power_transferal")
    .addProperty("range", "integer", 5, "range to pass the power from")
    .addProperty(
      "whitelist",
      "string_array",
      [],
      "powers that can be passed on"
    )
    .addProperty(
      "blacklist",
      "string",
      "aireline_heroes:ergo",
      "The power to keep with the passing of OFA"
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
    .firstTick((entity, entry, enabled) => {
      if (enabled && entity.isPlayer()) {
        let range = entry.getPropertyByName("range");
        let whitelist = entry.getPropertyByName("whitelist");
        let tag = entry.getPropertyByName("tag");
        let target = entity.rayTrace(range).entity;
        let playerOnly = entry.getPropertyByName("player_only");
        let blacklist = entry.getPropertyByName("blacklist");
        if (playerOnly === true && (target === null || !target.isPlayer()))
          return;
        if (
          target !== null &&
          !target.tags.contains(tag) &&
          !target.tags.contains("airline_heroes.afo")
        ) {
          whitelist.forEach((p) => {
            if (
              palladium.superpowers.hasSuperpower(entity, p) &&
              !palladium.superpowers.hasSuperpower(target, p) &&
              p != blacklist
            ) {
              palladium.superpowers.addSuperpower(target, p);
              palladium.superpowers.removeSuperpower(entity, p);
            } else return;
          });
          palladium.superpowers.addSuperpower(target, blacklist);
          entity.tags.add(tag);
        }
      }
    });
}); // Original By ShadowLegacy - Edited by Purphect
