const distance = (x, y, z, x2, y2, z2) => {
  return Math.sqrt(
    (x - x2) ** 2 +
    (y - y2) ** 2 +
    (z - z2) ** 2
  );
};
StartupEvents.registry("palladium:abilities", event => {
  let oldBlockPos = { x: 0, y: 0, z: 0 };
  event.create("airline_heroes:flash_step")
    .icon(palladium.createItemIcon('minecraft:cooked_pork'))
    .documentationDescription('Teleport behind someone immediately/teleport above someone')
    .addProperty("air", "boolean", false, "Teleport player above target instead of behind")
    .tick((entity, entry, holder, enabled) => {
      const air = entry.getPropertyByName("air");
      if (enabled) {
        let level = entity.getLevel();


        let result = entity.rayTrace(10);
        if (!result) {
          oldBlockPos = {
            x: entity.x,
            y: entity.y,
            z: entity.z
          };
          return;
        }
        if (result.entity) {
          let target = result.entity;

          const tPos = {
            x: target.x + -(Math.sin((target.yaw + 180) * (JavaMath.PI / 180))) * 3,
            y: target.y,
            z: target.z + Math.cos((target.yaw + 180) * (JavaMath.PI / 180)) * 3,
            dim: target.level.dimension,
            yaw: target.yaw,
            pitch: target.pitch
          };
          const verticalMotion = entity.getDeltaMovement().y();

          if (verticalMotion > 0.01 && !entity.onGround()) {
            entity.teleportTo(tPos.dim, target.x, target.y + 5, target.z, tPos.yaw, 90)
          } else {
            entity.teleportTo(tPos.dim, tPos.x, tPos.y, tPos.z, tPos.yaw, tPos.pitch);
          }
        }
      }
    })
});