PalladiumEvents.registerGuiOverlays((event) => {
  event.register(
    // ID for the overlay
    "test/broken_blocks_counter",

    // Function for rendering
    (minecraft, gui, poseStack, partialTick, screenWidth, screenHeight) => {
      if (
        abilityUtil.hasPower(minecraft.player, "airline_heroes:afo_limited")
      ) {
        const prop1 = palladium.getProperty(minecraft.player, "pSlot1");
        const prop2 = palladium.getProperty(minecraft.player, "pSlot2");
        const prop3 = palladium.getProperty(minecraft.player, "pSlot3");

        // Drawing text. Parameters: PoseStack, Text (as text component), X, Y, Color
        guiUtil.drawString(
          poseStack,
          Component.string("§cPower 1: " + String(prop1)),
          10,
          10,
          0xffffff
        );
        guiUtil.drawString(
          poseStack,
          Component.string("§cPower 2: " + String(prop2)),
          10,
          30,
          0xffffff
        );
        guiUtil.drawString(
          poseStack,
          Component.string("§cPower 3: " + String(prop3)),
          10,
          50,
          0xffffff
        );
      }
    }
  );
});
