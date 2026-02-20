//Made by Shadowlegacy557
//Edited by Purphect
// some help from Fsang

const SELECTOR = "collectionSelector"; // selector (integer)
// 'pSlot' power string storage slot (string)
const PSLOT = [
  "pSlot1",
  "pSlot2",
  "pSlot3",
  "pSlot4",
  "pSlot5",
  "pSlot6",
  "pSlot7",
  "pSlot8",
  "pSlot9",
  "pSlot10",
];

StartupEvents.registry("palladium:abilities", (event) => {
  event
    .create("airline_heroes:power_steal")
    .addProperty("range", "integer", 3, "the range you can steal powers from")
    .addProperty(
      "max",
      "integer",
      3,
      "the max amount of powers to have stored at once"
    )
    .addProperty(
      "whitelist",
      "string_array",
      [],
      "the powers that can be stolen"
    )
    .tick((entity, entry, holder, enabled) => {
      if (enabled) {
        let range = entry.getPropertyByName("range");
        let max = entry.getPropertyByName("max");
        let whitelist = entry.getPropertyByName("whitelist");
        let target = entity.rayTrace(range).entity;
        if (target != null) {
          let num = palladium.getProperty(entity, SELECTOR);
          let numstring = String(num);
          let pSlot = "pSlot" + numstring;
          if (1 <= num <= max) {
            whitelist.forEach((power) => {
              PSLOT.forEach((pSlot) => {
                if (
                  palladium.getProperty(entity, pSlot) == "empty" &&
                  palladium.superpowers.hasSuperpower(target, power) &&
                  !palladium.superpowers.hasSuperpower(entity, power)
                ) {
                  palladium.superpowers.removeSuperpower(target, power);
                  palladium.superpowers.addSuperpower(entity, power);
                  palladium.setProperty(entity, pSlot, power);
                  palladium.setProperty(target, "name", "None");
                  palladium.setProperty(target, "description", "");
                  palladium.setProperty(target, "hasPower", false);
                }
              });
            });
          }
        }
      }
    });
});
StartupEvents.registry("palladium:abilities", (event) => {
  event
    .create("airline_heroes:power_bestow")
    .addProperty("range", "integer", 3, "the range to bestow a power")
    .addProperty("max", "integer", 3, "the max amount of stored powers")
    .tick((entity, entry, holder, enabled) => {
      if (enabled) {
        let range = entry.getPropertyByName("range");
        let max = entry.getPropertyByName("max");
        let target = entity.rayTrace(range).entity;
        if (target === null) return;
        if (target != null) {
          let num = palladium.getProperty(entity, SELECTOR);
          let numstring = String(num);
          let pSlot = "pSlot" + numstring;
          let power = palladium.getProperty(entity, pSlot);
          if (
            0 < num <= max &&
            palladium.getProperty(entity, pSlot) !== "empty" &&
            !palladium.superpowers.hasSuperpower(target, power)
          ) {
            palladium.setProperty(entity, pSlot, "empty");
            palladium.superpowers.removeSuperpower(entity, power);
            palladium.superpowers.addSuperpower(target, power);
            palladium.setProperty(target, "hasPower", true);
          }
        } else return;
      }
    });
});

StartupEvents.registry("palladium:abilities", (event) => {
  event
    .create("airline_heroes:copy_to")
    .addProperty("range", "integer", 3, "the range to bestow a power")
    .addProperty("max", "integer", 3, "the max amount of stored powers")
    .tick((entity, entry, holder, enabled) => {
      if (enabled) {
        let range = entry.getPropertyByName("range");
        let max = entry.getPropertyByName("max");
        let target = entity.rayTrace(range).entity;
        if (target === null) return;
        if (target != null) {
          let num = palladium.getProperty(entity, SELECTOR);
          let numstring = String(num);
          let pSlot = "pSlot" + numstring;
          let power = palladium.getProperty(entity, pSlot);
          if (
            0 < num <= max &&
            palladium.getProperty(entity, pSlot) !== "empty" &&
            !palladium.superpowers.hasSuperpower(target, power)
          ) {
            palladium.superpowers.addSuperpower(target, power);
          }
        } else return;
      }
    });
});

StartupEvents.registry("palladium:abilities", (event) => {
  event
    .create("airline_heroes:power_bestow_all")
    .addProperty(
      "range",
      "integer",
      3,
      "the range you give all the stored powers from"
    )
    .addProperty(
      "max",
      "integer",
      3,
      "the max amount of powers to give at once"
    )
    .addProperty(
      "whitelist",
      "string_array",
      [],
      "the powers that can be returned"
    )
    .tick((entity, entry, holder, enabled) => {
      if (enabled) {
        let range = entry.getPropertyByName("range");
        let max = entry.getPropertyByName("max");
        let whitelist = entry.getPropertyByName("whitelist");
        let target = entity.rayTrace(range).entity;
        if (target != null) {
          let num = palladium.getProperty(entity, SELECTOR);
          let numstring = String(num);
          let pSlot = "pSlot" + numstring;
          if (1 <= num <= max) {
            whitelist.forEach((power) => {
              PSLOT.forEach((pSlot) => {
                if (
                  palladium.getProperty(entity, pSlot) != "empty" &&
                  palladium.superpowers.hasSuperpower(entity, power) &&
                  !palladium.superpowers.hasSuperpower(target, power)
                ) {
                  palladium.superpowers.removeSuperpower(entity, power);
                  palladium.superpowers.addSuperpower(target, power);
                  palladium.setProperty(entity, pSlot, "empty");
                  palladium.setProperty(target, "hasPower", true);
                }
              });
            });
          }
        }
      }
    });
});

StartupEvents.registry("palladium:abilities", (event) => {
  event
    .create("airline_heroes:nomu_creation")
    .addProperty("range", "integer", 3, "the range to bestow a power")
    .tick((entity, entry, holder, enabled) => {
      if (enabled) {
        let range = entry.getPropertyByName("range");
        let target = entity.rayTrace(range).entity;
        if (target === null) return;
        if (target.isPlayer()) {
          let power = "airline_heroes:nomu";
          palladium.superpowers.addSuperpower(target, power);
        } else return;
      }
    });
});

StartupEvents.registry("palladium:abilities", (event) => {
  event.create("airline_heroes:afo_prop_tell").tick((entity, enabled) => {
    let range = 5;
    let target = entity.rayTrace(range).entity;
    let targetPower = palladium.getProperty(target, "name");
    if (enabled && target != null) {
      entity.setStatusMessage("§6" + "The target's power is: " + targetPower);
    } else return;
  });
});
