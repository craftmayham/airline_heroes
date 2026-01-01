PalladiumEvents.registerProperties((event) => {
  // if (event.getEntityType() === "minecraft:player") {
  event.registerProperty("name", "string", "None");
  event.registerProperty("description", "string", "");
  event.registerProperty("powerCount", "integer", 0);
  event.registerProperty("powerSelect", "integer", 0);
  event.registerProperty("collectionSelector", "integer", 1);
  event.registerProperty("pSlot1", "string", "empty");
  event.registerProperty("pSlot2", "string", "empty");
  event.registerProperty("pSlot3", "string", "empty");
  event.registerProperty("pSlot4", "string", "empty");
  event.registerProperty("pSlot5", "string", "empty");
  event.registerProperty("pSlot6", "string", "empty");
  event.registerProperty("pSlot7", "string", "empty");
  event.registerProperty("pSlot8", "string", "empty");
  event.registerProperty("pSlot9", "string", "empty");
  event.registerProperty("pSlot10", "string", "empty");

  event.registerProperty("boomSelector", "integer", 1);
  event.registerProperty("bomb1", "string", "empty");
  event.registerProperty("bomb2", "string", "empty");
  event.registerProperty("bomb3", "string", "empty");
  event.registerProperty("bomb4", "string", "empty");
  event.registerProperty("bomb5", "string", "empty");
  event.registerProperty("marked", "boolean", false);

  event.registerProperty("hasPower", "boolean", false);
  // }
});
