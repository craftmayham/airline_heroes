// Event for registering HUDs
PalladiumEvents.registerGuiOverlays((event) => {
    event.register(
        // ID for the overlay
        'airline_heroes:shotgun_sword_ammo_display',
        // Function for rendering
        (minecraft, gui, poseStack, partialTick, screenWidth, screenHeight) => {
            if (abilityUtil.hasPower(minecraft.player, 'airline_heroes:shotgun_sword')) {        
                
                    let username = minecraft.player.getGameProfile().getName();
                let value = Utils.server.scoreboard.getOrCreatePlayerScore(username, Utils.server.scoreboard.getObjective("airline_heroes.capo_shotgun_ammo")).getScore();

                // Drawing text. Parameters: PoseStack, Text (as text component), X, Y, Color
                guiUtil.drawString(poseStack, Component.string("Ammo : " + value), 10, 20, 0x9e120b);

            }
        });
});