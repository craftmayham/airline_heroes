let Minecraft = Java.loadClass('net.minecraft.client.Minecraft');
const RenderSystem = Java.loadClass('com.mojang.blaze3d.systems.RenderSystem');

PalladiumEvents.renderPowerScreen(e => {
    let entity = Minecraft.getInstance().player;
    if (!entity) return;

    let width = e.screen.width / 2;
    let height = e.screen.height / 2;

    // Only run for your mod's tab — adjust the namespace or specific power name if needed
    if (e.tab.toString().includes('airline_heroes:')) {
        // Get the scoreboard value
        let skill_points = palladium.scoreboard.getScore(entity, 'airline_heroes.skill_points', 0);

        // Draw the score as text
        palladium.gui.drawString(e.guiGraphics, Component.string(skill_points), ((width) - 147), ((height) - 51), 0xFFFFFF);
    }
});