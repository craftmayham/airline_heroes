EntityEvents.hurt((event) => {
    if (!event.source.actual) return

     if (event.entity.isPlayer()) {
		if (palladium.abilities.isEnabled(event.entity, "airline_heroes:luck", "happy_accident")) { 
        if (Math.random() > 0.5) {
        let pos = event.entity.blockPosition().mutable()
        event.entity.level.spawnParticles(
        "airline_heroes:miss",
        true,
        pos.x+0.3,
        pos.y+2.5,
        pos.z,
        1,
        0.2,
        1,
        1,
        0
    )
        event.cancel()
        }
		}
    }
});