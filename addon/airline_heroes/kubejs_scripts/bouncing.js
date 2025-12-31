let ClientboundSetEntityMotionPacket = Java.loadClass(
  "net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket"
);

StartupEvents.registry("palladium:abilities", (event) => {
  event
    .create("airline_heroes:bouncing")
    .icon(palladium.createItemIcon("minecraft:elytra"))
    .displayName("Move Player")
    .documentationDescription("Bounces a player up and down")
    .tick((entity, entry, holder, enabled) => {
      if (!enabled) return;

      let bounceX = entity.persistentData.getDouble("bounceX") ?? 0;
	  let bounceY = entity.persistentData.getDouble("bounceY") ?? 0;
	  let bounceZ = entity.persistentData.getDouble("bounceZ") ?? 0;
	  let wasInAir = entity.persistentData.getBoolean("wasInAir") ?? false;
	  	  let motionX = entity.motionX;
	  let motionY = entity.motionY;
	  	  let motionZ = entity.motionZ;
      if (!entity.onGround()) {
		  bounceX = motionX * 5
		  bounceY = motionY * -1.3
		  bounceZ = motionZ * 5
		  wasInAir = true;
      }
	  entity.persistentData.putDouble("bounceX", bounceX)
	   entity.persistentData.putDouble("bounceY", bounceY)
	    entity.persistentData.putDouble("bounceZ", bounceZ)
      if (entity.onGround() & wasInAir) {
		entity.addMotion(bounceX, bounceY, bounceZ);
		     entity.server.runCommandSilent(`say ${bounceX}`);
		bounceX = 0
		bounceZ = 0
		bounceY = 0
		   if (entity.isPlayer()) {
        entity.connection.send(new ClientboundSetEntityMotionPacket(entity));
      }
		wasInAir = false;
      }
	 entity.persistentData.putBoolean("wasInAir", wasInAir)
    });
});
