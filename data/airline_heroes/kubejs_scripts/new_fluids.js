let ClientboundSetEntityMotionPacket = Java.loadClass('net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket');
LevelEvents.tick(event=>{
    let level = event.level
    let lavaLike = "kubejs:thick_fluid"
	
	for (let entity of level.getEntities()) {
    if([entity.block].some(b => b.id == lavaLike)){
		entity.setDeltaMovement(entity.getDeltaMovement().multiply(0.05,0.1,0.05))
		  if (entity.isPlayer()) {
        entity.connection.send(new ClientboundSetEntityMotionPacket(entity))
		  }
		if([entity.block.up].some(b => b.id == lavaLike)){

		entity.setAirSupply(Math.max(entity.getAirSupply() - 5, -20))
		  
		}
	}
}
})