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

        let p1 = prop1.replace("airline_heroes:mob/", "");
        let p2 = prop2.replace("airline_heroes:mob/", "");
        let p3 = prop3.replace("airline_heroes:mob/", "");
        let p4 = prop4.replace("airline_heroes:mob/", "");
        let p5 = prop5.replace("airline_heroes:mob/", "");
        let p6 = prop6.replace("airline_heroes:mob/", "");
        let p7 = prop7.replace("airline_heroes:mob/", "");
        let p8 = prop8.replace("airline_heroes:mob/", "");
        let p9 = prop9.replace("airline_heroes:mob/", "");
        let p10 = prop10.replace("airline_heroes:mob/", "");

        // Drawing text. Parameters: PoseStack, Text (as text component), X, Y, Color
        guiUtil.drawString(
          poseStack,
          Component.string("§cPower 1: " + String(p1)),
          10,
          10,
          0xffffff
        );
        guiUtil.drawString(
          poseStack,
          Component.string("§cPower 2: " + String(p2)),
          10,
          30,
          0xffffff
        );
        guiUtil.drawString(
          poseStack,
          Component.string("§cPower 3: " + String(p3)),
          10,
          50,
          0xffffff
        );
        guiUtil.drawString(
          poseStack,
          Component.string("§cPower 4: " + String(p4)),
          10,
          70,
          0xffffff
        );
        guiUtil.drawString(
          poseStack,
          Component.string("§cPower 5: " + String(p5)),
          10,
          90,
          0xffffff
        );
        guiUtil.drawString(
          poseStack,
          Component.string("§cPower 6: " + String(p6)),
          10,
          110,
          0xffffff
        );
        guiUtil.drawString(
          poseStack,
          Component.string("§cPower 7: " + String(p7)),
          10,
          130,
          0xffffff
        );
        guiUtil.drawString(
          poseStack,
          Component.string("§cPower 8: " + String(p8)),
          10,
          150,
          0xffffff
        );
        guiUtil.drawString(
          poseStack,
          Component.string("§cPower 9: " + String(p9)),
          10,
          170,
          0xffffff
        );
        guiUtil.drawString(
          poseStack,
          Component.string("§cPower 10: " + String(p10)),
          10,
          190,
          0xffffff
        );
      }
      if (
        abilityUtil.hasPower(minecraft.player, "airline_heroes:afo_limited")
      ) {
        const prop1 = palladium.getProperty(minecraft.player, "pSlot1");
        const prop2 = palladium.getProperty(minecraft.player, "pSlot2");
        const prop3 = palladium.getProperty(minecraft.player, "pSlot3");
        const prop4 = palladium.getProperty(minecraft.player, "pSlot4");
        const prop5 = palladium.getProperty(minecraft.player, "pSlot5");
        const prop6 = palladium.getProperty(minecraft.player, "pSlot6");
        let p1 = prop1.replace("airline_heroes:mob/", "");
        let p2 = prop2.replace("airline_heroes:mob/", "");
        let p3 = prop3.replace("airline_heroes:mob/", "");
        let p4 = prop4.replace("airline_heroes:mob/", "");
        let p5 = prop5.replace("airline_heroes:mob/", "");
        let p6 = prop6.replace("airline_heroes:mob/", "");

        // Drawing text. Parameters: PoseStack, Text (as text component), X, Y, Color
        guiUtil.drawString(
          poseStack,
          Component.string("§cPower 1: " + String(p1)),
          10,
          10,
          0xffffff
        );
        guiUtil.drawString(
          poseStack,
          Component.string("§cPower 2: " + String(p2)),
          10,
          30,
          0xffffff
        );
        guiUtil.drawString(
          poseStack,
          Component.string("§cPower 3: " + String(p3)),
          10,
          50,
          0xffffff
        );
        guiUtil.drawString(
          poseStack,
          Component.string("§cPower 4: " + String(p4)),
          10,
          70,
          0xffffff
        );
        guiUtil.drawString(
          poseStack,
          Component.string("§cPower 5: " + String(p5)),
          10,
          90,
          0xffffff
        );
        guiUtil.drawString(
          poseStack,
          Component.string("§cPower 6: " + String(p6)),
          10,
          110,
          0xffffff
        );
      }
    }
  );
});
