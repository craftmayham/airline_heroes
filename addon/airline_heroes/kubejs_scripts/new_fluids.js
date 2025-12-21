StartupEvents.registry('fluid', event => {

  event.create('oil')
    .thickTexture(0x1A1A1A)
    .bucketColor(0x1A1A1A)
    .displayName('Oil')
                 
  event.create('acetone')
    .thinTexture(0xD0C0D8)
    .bucketColor(0xD0C0D8)
    .displayName('Acetone')
    
  event.create('liquid_cement')
    .stillTexture('minecraft:block/gray_concrete_powder')
    .flowingTexture('minecraft:block/gray_concrete_powder')
    .bucketColor(0x34373F)
    .displayName('Liquid Cement')
})

BlockEvents.modification(event => {
  event.modify('kubejs:thin_fluid', block => {
    block.destroySpeed = 0.1
  })
})

