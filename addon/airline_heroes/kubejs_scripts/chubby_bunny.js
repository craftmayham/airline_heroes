StartupEvents.registry("palladium:abilities", event => {
  event.create("airline_heroes:chubby_feed")
    .icon(palladium.createItemIcon('minecraft:cooked_pork'))
    .documentationDescription('Feeds players with items from the wielders hand.')
    .tick((entity, entry, holder, enabled) => {
      if (enabled) {
        let target = entity.rayTrace(10).entity;
        let item = entity.mainHandItem
        if (target !== null && item.isEdible() && target.isPlayer()) {
          target.eat(entity.level, item)
          if (target.foodData.getFoodLevel == 20) {
            palladium.superpowers.addSuperpower(target, "airline_heroes:mob/tactile_pyrokinesis");
          }
        }
        if (target !== null && item.isEdible() && !target.isPlayer()) {
          palladium.superpowers.addSuperpower(target, "airline_heroes:mob/tactile_pyrokinesis");
          item.shrink(1);
        }
      }
    })
});
StartupEvents.registry("palladium:abilities", event => {
  event.create("airline_heroes:potion_transfer")
    .icon(palladium.createItemIcon('minecraft:cooked_pork'))
    .documentationDescription('Transfers potions from the user into a target.')
    .tick((entity, entry, holder, enabled) => {
      if (enabled) {
        let target = entity.rayTrace(10).entity;
        if (target !== null) {
          entity.activeEffects.forEach(effect => {
            target.potionEffect.add(effect)
          })
        }
      }
    })

});