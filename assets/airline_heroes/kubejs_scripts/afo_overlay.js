PalladiumEvents.registerGuiOverlays((event) => {
  event.register(
    // ID for the overlay
    "test/broken_blocks_counter",

    // Function for rendering
    (minecraft, gui, poseStack, partialTick, screenWidth, screenHeight) => {
      if (abilityUtil.hasPower(minecraft.player, "airline_heroes:afo")) {
        const prop1 = palladium.getProperty(minecraft.player, "pSlot1");
        const prop2 = palladium.getProperty(minecraft.player, "pSlot2");
        const prop3 = palladium.getProperty(minecraft.player, "pSlot3");
        const prop4 = palladium.getProperty(minecraft.player, "pSlot4");
        const prop5 = palladium.getProperty(minecraft.player, "pSlot5");
        const prop6 = palladium.getProperty(minecraft.player, "pSlot6");
        const prop7 = palladium.getProperty(minecraft.player, "pSlot7");
        const prop8 = palladium.getProperty(minecraft.player, "pSlot8");
        const prop9 = palladium.getProperty(minecraft.player, "pSlot9");
        const prop10 = palladium.getProperty(minecraft.player, "pSlot10");

        // Drawing text. Parameters: PoseStack, Text (as text component), X, Y, Color
        guiUtil.drawString(
          poseStack,
          Component.string("Power 1: " + String(prop1)),
          10,
          10,
          0xffffff
        );
        guiUtil.drawString(
          poseStack,
          Component.string("Power 2: " + String(prop2)),
          10,
          30,
          0xffffff
        );
        guiUtil.drawString(
          poseStack,
          Component.string("Power 3: " + String(prop3)),
          10,
          50,
          0xffffff
        );
        guiUtil.drawString(
          poseStack,
          Component.string("Power 4: " + String(prop4)),
          10,
          70,
          0xffffff
        );
        guiUtil.drawString(
          poseStack,
          Component.string("Power 5: " + String(prop5)),
          10,
          90,
          0xffffff
        );
        guiUtil.drawString(
          poseStack,
          Component.string("Power 6: " + String(prop6)),
          10,
          110,
          0xffffff
        );
        guiUtil.drawString(
          poseStack,
          Component.string("Power 7: " + String(prop7)),
          10,
          130,
          0xffffff
        );
        guiUtil.drawString(
          poseStack,
          Component.string("Power 8: " + String(prop8)),
          10,
          150,
          0xffffff
        );
        guiUtil.drawString(
          poseStack,
          Component.string("Power 9: " + String(prop9)),
          10,
          170,
          0xffffff
        );
        guiUtil.drawString(
          poseStack,
          Component.string("Power 10: " + String(prop10)),
          10,
          190,
          0xffffff
        );
      }
    }
  );
});
