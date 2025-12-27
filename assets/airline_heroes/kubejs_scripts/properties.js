PalladiumEvents.registerPropertiesClientSided((event) => {
  if (event.getEntityType() === "minecraft:player") {
    event.registerProperty("name", "string", "Example Name");
    event.registerProperty("description", "string", "Example Description");
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
  }
});
