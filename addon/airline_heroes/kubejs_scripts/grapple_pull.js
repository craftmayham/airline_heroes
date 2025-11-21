let ClientboundSetEntityMotionPacket = Java.loadClass('net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket');
StartupEvents.registry('palladium:abilities', event => {
    event.create('airline_heroes:nearby_block')
        .addProperty('force', 'float', 1.6, 'pull strength')
        .addProperty('range', 'integer', 40, 'range of grab')

        .tick((entity, entry, holder, enabled) => {
    // Raycast up to 40 blocks
	let range = entry.getPropertyByName('range')
    const hit = entity.getLookAngle().entity;
    if (!hit || !hit.block) return; // must hit a block

    let bx = hit.block.x + 0.5;
    let by = hit.block.y + 0.5;
    let bz = hit.block.z + 0.5;

    let px = entity.x;
    let py = entity.y + 1.0;
    let pz = entity.z;

    // Direction vector
    let dx = bx - px;
    let dy = by - py;
    let dz = bz - pz;

    // Normalize
    const len = Math.sqrt(dx*dx + dy*dy + dz*dz);
    if (len === 0) return;

    dx /= len;
    dy /= len;
    dz /= len;

    // Pull strength
    const force = entry.getPropertyByName('force');

    // Apply motion
    entity.setDeltaMovement(dx * force, dy * force, dz * force);
	});
});

