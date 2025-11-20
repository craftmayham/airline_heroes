let $Util = Java.loadClass("net.minecraft.Util");

StartupEvents.registry("palladium:abilities", event => {
    event.create("airline_heroes:telekinesis")
        .icon(palladium.createItemIcon("minecraft:player_head"))
        .documentationDescription("Telekinesis: grab entities and float them in front of you.")
        .addProperty("scrollable", "boolean", false, "For if you intend to use the tele_valchange ability to make this scrollable.")
        .addProperty("damage", "float", 2, "The damage to apply when hitting an entity via telekinesis.")
        .addProperty("range", "integer", 8, "The default range of the ability.")
        .addProperty("strength", "float", 0.8, "The default strength/speed of the telekinesis.")
        .addProperty("particle", "string", "minecraft:enchant", "The ID of the particle you want to summon around the entity.")
        .addProperty("dust", "boolean", true, "Whether or not you'd like to have dust particles around the grabbed entity.")
        .addProperty("other_rgbs", "string", "null", "The rgbs values for the other particle if it is colorable. Values are: red, green, blue, size. (Leave null if not colorable)")
        .addProperty("other_count", "integer", 1, "The number of particles to spawn.")
        .addProperty("other_speed", "integer", 1, "The speed of the particles.")
        .addProperty("dust_rgbs", "string", "1 1 1 1", "The rgbs values for the dust particle if enabled. Values are: red, green, blue, size")
        .addProperty("dust_count", "integer", 1, "The number of particles to spawn.")
        .addProperty("dust_speed", "integer", 1, "The speed of the particles.")
        .addUniqueProperty("held_entity", "uuid", $Util.NIL_UUID)
        .addUniqueProperty("cur_range", "integer", 8)
        .addUniqueProperty("cur_strength", "float", 0.8)
        .firstTick((entity, entry, holder, enabled) => {
            const range = entry.getPropertyByName(`scrollable`) == false ? `range` : `cur_range`;
            if (enabled) {
                let rayTrace = entity.rayTrace(entry.getPropertyByName(range), false);
                if (rayTrace.entity != null) {
                    entry.setUniquePropertyByName(`held_entity`, rayTrace.entity.uuid);
                }
            }
        })
        .tick((entity, entry, holder, enabled) => {
            const range = entry.getPropertyByName(`scrollable`) == false ? `range` : `cur_range`;
            const strength = entry.getPropertyByName(`scrollable`) == false ? `strength` : `cur_strength`;
            const rgbs = entry.getPropertyByName(`dust_rgbs`);
            const particle = entry.getPropertyByName(`other_rgbs`) == "null" ? entry.getPropertyByName(`particle`) : entry.getPropertyByName(`particle`) + " " + entry.getPropertyByName(`other_rgbs`);
            if (enabled) {
                let heldEntity = getHeldEntity(entity.level, entry);
                if (heldEntity == null) return;
                let targetPos = entity.getEyePosition().add(entity.getLookAngle().scale(entry.getPropertyByName(range)));
                let boundingBox = entity.getBoundingBox();

                heldEntity.setDeltaMovement(targetPos.subtract(heldEntity.getEyePosition()).scale(entry.getPropertyByName(strength)));
                heldEntity.resetFallDistance();

                entity.level.sendParticles(
                    particle,
                    heldEntity.x, heldEntity.y + 0.5 * boundingBox.getYsize(), heldEntity.z,
                    entry.getPropertyByName(`other_count`),
                    boundingBox.getXsize() * 0.5, boundingBox.getYsize() * 0.5, boundingBox.getZsize() * 0.5,
                    entry.getPropertyByName(`other_speed`)
                );
                if (entry.getPropertyByName(`dust`) == true) {
                    entity.level.sendParticles(
                        `minecraft:dust ${rgbs}`,
                        heldEntity.x, heldEntity.y + 0.5 * boundingBox.getYsize(), heldEntity.z,
                        entry.getPropertyByName(`dust_count`),
                        boundingBox.getXsize() * 0.5, boundingBox.getYsize() * 0.5, boundingBox.getZsize() * 0.5,
                        entry.getPropertyByName(`dust_speed`)
                    );
                }
            }
        })
        .lastTick((entity, entry, holder, enabled) => {
            entry.setUniquePropertyByName(`held_entity`, $Util.NIL_UUID);
        });
});

function getHeldEntity(level, entry) {
    let uuid = entry.getPropertyByName(`held_entity`);
    if (uuid == $Util.NIL_UUID) return;
    return getEntity(level, uuid);
}

function getEntity(level, uuid) {
    if (uuid == null || uuid == $Util.NIL_UUID) return null;
    let entities = level.getEntities();
    for (let i = 0; i < entities.size(); i++) {
        if (entities.get(i).uuid.equals(uuid)) {
            return entities.get(i);
        }
    }
}
