const BonemealableBlock = Java.loadClass('net.minecraft.world.level.block.BonemealableBlock')
const RandomSource = Java.loadClass('net.minecraft.util.RandomSource')

BlockEvents.rightClicked(event => {
  if (event.level.isClientSide()) return

  const level = event.level
  const pos = event.block.pos
  const state = event.block.blockState
  const block = state.block
if (palladium.abilities.isEnabled(event.player, "airline_heroes:bee_physiology", "set_name_description") && event.player.isShiftKeyDown()) {
  if (!(block instanceof BonemealableBlock)) return

  const random = RandomSource.create()

  if (
    block.isValidBonemealTarget(level, pos, state, false) &&
    block.isBonemealSuccess(level, random, pos, state)
  ) {
    block.performBonemeal(level, random, pos, state)

    event.cancel()

  }
}
})
