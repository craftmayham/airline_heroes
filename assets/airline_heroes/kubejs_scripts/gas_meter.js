// Name/key for the data, stored here to use everywhere else
const BROKEN_BLOCKS = 'broken_blocks';

// Resource Location of the bar texture. Using MC's here
const BAR_TEXTURE = 'airline_heroes:textures/gui/gas_hud.png';

// Event for registering HUDs
PalladiumEvents.registerGuiOverlays((event) => {
    event.register(
        // ID for the overlay
        'airline_heroes:gas',

        // Function for rendering
        (minecraft, gui, poseStack, partialTick, screenWidth, screenHeight) => {
            if (abilityUtil.hasPower(minecraft.player, 'airline_heroes:gas')) {

				const cake = palladium.scoreboard.getScore(minecraft.player, 'airline_heroes.cake', 0);
				const goldenCarrot = palladium.scoreboard.getScore(minecraft.player, 'airline_heroes.golden_carrot', 0);
				const melon = palladium.scoreboard.getScore(minecraft.player, 'airline_heroes.melon', 0);
				const glowBerry = palladium.scoreboard.getScore(minecraft.player, 'airline_heroes.glow_berries', 0);
				const potato = palladium.scoreboard.getScore(minecraft.player, 'airline_heroes.potato', 0);
				const rottenFlesh = palladium.scoreboard.getScore(minecraft.player, 'airline_heroes.rotten_flesh', 0);
         
				const speed = Math.max(0, Math.min(1, 1.0 - (cake / 25.0)));
				const regen = Math.max(0, Math.min(1, 1.0 - (goldenCarrot / 25.0)));
				const strength = Math.max(0, Math.min(1, 1.0 - (melon / 25.0)));
				const blindness = Math.max(0, Math.min(1, 1.0 - (glowBerry / 25.0)));
				const nausea = Math.max(0, Math.min(1, 1.0 - (potato / 25.0)));
				const poison = Math.max(0, Math.min(1, 1.0 - (rottenFlesh / 25.0)));
				guiUtil.blit(BAR_TEXTURE, poseStack, 5, 1, 0, 15, 35, 15);
                guiUtil.blit(BAR_TEXTURE, poseStack, 5, 1, 0, 0, 35, 15 * speed);
				
				guiUtil.blit(BAR_TEXTURE, poseStack, 5, 17, 0, 45, 35, 15);
				guiUtil.blit(BAR_TEXTURE, poseStack, 5, 17, 0, 30, 35, 15 * regen);
				
				guiUtil.blit(BAR_TEXTURE, poseStack, 5, 32, 0, 77, 33, 17);
				guiUtil.blit(BAR_TEXTURE, poseStack, 5, 32, 0, 60, 33, 17 * strength);
				
				guiUtil.blit(BAR_TEXTURE, poseStack, 5, 50, 0, 108, 33, 14);
				guiUtil.blit(BAR_TEXTURE, poseStack, 5, 50, 0, 94, 33, 14 * blindness);
				
				guiUtil.blit(BAR_TEXTURE, poseStack, 5, 66, 0, 139, 33, 17);
				guiUtil.blit(BAR_TEXTURE, poseStack, 5, 66, 0, 122, 33, 17 * nausea);
				
				guiUtil.blit(BAR_TEXTURE, poseStack, 5, 83, 0, 172, 35, 16);
				guiUtil.blit(BAR_TEXTURE, poseStack, 5, 83, 0, 156, 35, 16 * poison);
            }
        });
});