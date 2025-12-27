StartupEvents.registry("palladium:abilities", (event) => {
  event
    .create("airline_heroes:prop_adjust_num")
    .addProperty("prop", "string", "FLAMECOLOUR", "the name of the property")
    .addProperty("amount", "integer", 1, "amount to adjust by")
    .addProperty(
      "mode",
      "string",
      "add",
      "add, subtract, multiply, divide, set, power"
    )
    .addProperty(
      "num2",
      "integer",
      2,
      "max value for add, min value for subtract."
    )
    .addProperty("num3", "integer", 0, "reset value for add or subtract.")
    .addProperty(
      "reset",
      "boolean",
      false,
      "whether to reset after max/min value"
    )

    .firstTick((entity, entry, holder, enabled) => {
      if (enabled && entity.isPlayer()) {
        const prop = entry.getPropertyByName("prop");
        let amount = entry.getPropertyByName("amount");
        let mode = entry.getPropertyByName("mode");
        let num2 = entry.getPropertyByName("num2");
        let num3 = entry.getPropertyByName("num3");
        let reset = entry.getPropertyByName("reset");
        if (mode === "add") {
          if (palladium.getProperty(entity, prop) < num2) {
            palladium.setProperty(
              entity,
              prop,
              palladium.getProperty(entity, prop) + amount
            );
          } else if (
            reset === true &&
            palladium.getProperty(entity, prop) === num2
          ) {
            palladium.setProperty(entity, prop, num3);
          }
        } else if (mode === "subtract") {
          if (palladium.getProperty(entity, prop) > num2) {
            palladium.setProperty(
              entity,
              prop,
              palladium.getProperty(entity, prop) - amount
            );
          } else if (
            reset === true &&
            palladium.getProperty(entity, prop) === num2
          ) {
            palladium.setProperty(entity, prop, num3);
          }
        } else if (mode === "set") {
          palladium.setProperty(entity, prop, amount);
        } else if (mode === "multiply") {
          palladium.setProperty(
            entity,
            prop,
            palladium.getProperty(entity, prop) * amount
          );
        } else if (mode === "divide") {
          palladium.setProperty(
            entity,
            prop,
            palladium.getProperty(entity, prop) / amount
          );
        } else if (mode === "power") {
          palladium.setProperty(
            entity,
            prop,
            palladium.getProperty(entity, prop) ^ amount
          );
        }
      }
    });
});
