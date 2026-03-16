
StartupEvents.registry("palladium:abilities", event => {
  event.create("airline_heroes:swap_places")
    .icon(palladium.createItemIcon('minecraft:cooked_pork'))
    .documentationDescription('Teleport behind someone immediately/teleport above someone')
    .addProperty("air", "boolean", false, "Teleport player above target instead of behind")
    .tick((entity, entry, holder, enabled) => {
      const air = entry.getPropertyByName("air");
      if (enabled) {
        let level = entity.getLevel();

        const oldBlockPos = {
          x: 0,
          y: 0,
          z: 0,
          dim: entity.level.dimension,
          yaw: entity.yaw,
          pitch: entity.pitch
        }
        let result = entity.rayTrace(10);
        if (!result) {
          oldBlockPos = {
            x: entity.x,
            y: entity.y,
            z: entity.z,
            dim: entity.level.dimension,
            yaw: entity.yaw,
            pitch: entity.pitch
          };
          return;
        }
        if (result.entity) {
          let target = result.entity;

          const tPos = {
            x: target.x,
            y: target.y,
            z: target.z,
            dim: target.level.dimension,
            yaw: target.yaw,
            pitch: target.pitch
          };
          const verticalMotion = entity.getDeltaMovement().y();
          entity.teleportTo(tPos.dim, tPos.x, tPos.y, tPos.z, tPos.yaw, tPos.pitch);
          target.teloportTo(oldBlockPos.dim, oldBlockPos.x, oldBlockPos.y, oldBlockPos.z, oldBlockPos.yaw, oldBlockPos.pitch)
        }
      }
    })
});