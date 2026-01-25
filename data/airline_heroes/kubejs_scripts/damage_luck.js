EntityEvents.hurt((event) => {
    if (!event.source.actual) return

     if (event.source.actual.player) {
		 if (palladium.abilities.isEnabled(event.source.actual, "airline_heroes:luck", "lucky_shot")) {
        if (Math.random() > 0.5) {
        let pos = event.entity.blockPosition().mutable()
        event.entity.level.spawnParticles(
        "airline_heroes:lucky_crit",
        true,
        pos.x,
        pos.y+1.2,
        pos.z,
        0,
        0.2,
        0,
        10,
        0.08
    )
	                 event.entity.attack(event.source, event.getDamage() * 2);
                      return event.cancel();
        }
		 }
    }
});