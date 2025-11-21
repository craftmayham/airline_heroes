let Minecraft = Java.loadClass('net.minecraft.client.Minecraft');
const RenderSystem = Java.loadClass('com.mojang.blaze3d.systems.RenderSystem');
const InventoryScreen = Java.loadClass('net.minecraft.client.gui.screens.inventory.InventoryScreen');
const Quaternionf = Java.loadClass('org.joml.Quaternionf');



PalladiumEvents.renderPowerScreen(e => {
    let entity = Minecraft.getInstance().player;
    if (!entity) return;

    let width = e.screen.width / 2;
    let height = e.screen.height / 2;

    // Only run for your mod's tab — adjust the namespace or specific power name if needed
    if (e.tab.toString().includes('airline_heroes:')) {
        // Get the scoreboard value
        let skill_points = palladium.scoreboard.getScore(entity, 'airline_heroes.skill_points', 0);
        let superpower =  palladium.getProperty(entity, 'name');
		let description =  palladium.getProperty(entity, 'description');
        // Draw the score as text
        palladium.gui.drawString(e.guiGraphics, Component.string(skill_points), ((width) - 147), ((height) - 51), 0xFFFFFF);
		palladium.gui.drawString(e.guiGraphics, Component.string(superpower), ((width) - 125), ((height) - 110), 0xFFFFFF);
		palladium.gui.drawString(e.guiGraphics, Component.string(description), ((width) - 140), ((height) + 100), 0xFFFFFF);
		let yaw = -(entity.yBodyRot + entity.age * 2 * JavaMath.PI / 180);
   InventoryScreen.renderEntityInInventory(e.guiGraphics, width / 2, height / 0.8, 40, new Quaternionf(Math.cos(0.5 * yaw), 0, -Math.sin(0.5 * yaw), 0), null, entity);
    }
});