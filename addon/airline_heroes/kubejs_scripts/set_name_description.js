StartupEvents.registry("palladium:abilities", (event) => {
  event
    .create("airline_heroes:set_name_description")
    .icon(palladium.createItemIcon("minecraft:beacon"))
    .displayName("Set Name And Description")
    .documentationDescription("Potion area of effect")
    .addProperty(
      "power_description",
      "string",
      "Example Description",
      "Superpower description used in skill tree"
    )
    .firstTick((entity, entry, holder, enabled) => {
      if (!enabled) return;
      if (!entity.level || entity.level.isClientSide()) return;
      const description = entry.getPropertyByName("power_description");
      let powerIds = palladium.powers.getPowerIds(entity);
      let names = [];
      for (let powerId of powerIds) {
        let instance = abilityUtil.getInstance(entity, powerId, "set_name_description");
        if (!instance) continue;
        let name = instance.getHolder().getPower().getName().getString();
        names.push(name);
      }
      let nameString = names.join(", ");
      palladium.setProperty(entity, "name", nameString);
      palladium.setProperty(entity, "description", description);
    });
});
