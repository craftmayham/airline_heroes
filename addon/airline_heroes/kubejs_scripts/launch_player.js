let ClientboundSetEntityMotionPacket = Java.loadClass('net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket');
StartupEvents.registry("palladium:abilities", event => {
    event.create("starwars:force_jump")
        .icon(palladium.createItemIcon('minecraft:rabbit_foot'))
        .addProperty("max_height", "integer", 10, "Max height reachable by the jump")
        .addProperty("speed", "float", 100, "How many ticks it takes to reach the max height")
        .firstTick((entity, entry, holder, enabled) => {
            if (enabled) {
                let initialY = entity.getY()
                palladium.scoreboard.setScore(entity, "starwars.jumpInitialY", initialY)
            }
        })
        .tick((entity, entry, holder, enabled) => {
            let height = entry.getPropertyByName("max_height")
            let tick = entry.getPropertyByName("speed")
            let speed = height / tick
            if (enabled) {
                let maxY = palladium.scoreboard.getScore(entity, 'starwars.jumpInitialY') + height
                if (entity.tags.contains("starwars.forceJump") === false) {
                    if (entity.getY() < maxY) {
                        let motion = entity.getDeltaMovement().multiply(1, 0, 1).add(0, speed, 0);
                        entity.setDeltaMovement(motion)
                    } else if (entity.getY() >= maxY) {
                        entity.tags.add("starwars.forceJump")
                    }
                    if (entity.isPlayer()) {
                        entity.connection.send(new ClientboundSetEntityMotionPacket(entity));
                    }
                }
                else return
            }
        })
        .lastTick((entity, entry, holder, enabled) => {
            if (enabled && entity.tags.contains("starwars.forceJump") === false) {
                entity.tags.add("starwars.forceJump")
            }
        })
}) // made by ShadowLegacy557