let LivingEntity = Java.loadClass('net.minecraft.world.entity.LivingEntity');

StartupEvents.registry('palladium:condition_serializer', event => {
    event.create('airline_heroes:is_entity_nearby')
        .addProperty("search_radius", "float", 8.0, "Radius to detect nearby entities")
        .test((entity, properties) => {
            if (!entity || !entity.isLiving()) return false;
            if (!entity.serverLevel) return false;

            let radius = properties.get("search_radius") * 2.0;

            let entities = entity.serverLevel().getEntities(entity, AABB.ofSize(entity.position(), radius, radius, radius)).toArray();

            for (let e of entities) {
                if (
                    !e ||
                    e === entity ||
                    !e.isAlive()
                ) continue;

                if (e instanceof LivingEntity) {
                    return true;
                }
            }

            return false;
        }); //made by quill aha
});