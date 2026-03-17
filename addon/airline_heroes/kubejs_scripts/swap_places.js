
StartupEvents.registry("palladium:abilities", event => {
  event.create("airline_heroes:swap_places")
    .icon(palladium.createItemIcon('minecraft:cooked_pork'))
    .documentationDescription('Teleport behind someone immediately/teleport above someone')
    .tick((entity, entry, holder, enabled) => {
      if (enabled) {
        let result = entity.rayTrace(10);
        if (!result) {
          return;
        }
        if (result.entity) {
          let target = result.entity;
          const oldBlockPos = {
            x: entity.x,
            y: entity.y,
            z: entity.z,
            dim: entity.level.dimension,
            yaw: entity.yaw,
            pitch: entity.pitch
          };
          const tPos = {
            x: target.x,
            y: target.y,
            z: target.z,
            dim: target.level.dimension,
            yaw: target.yaw,
            pitch: target.pitch
          };
          entity.teleportTo(tPos.dim, tPos.x, tPos.y, tPos.z, tPos.yaw, tPos.pitch);
          target.teleportTo(oldBlockPos.dim, oldBlockPos.x, oldBlockPos.y, oldBlockPos.z, oldBlockPos.yaw, oldBlockPos.pitch)
        }
      }
    })
});