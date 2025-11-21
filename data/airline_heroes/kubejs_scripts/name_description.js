PalladiumEvents.registerProperties((event) => {
    if (event.getEntityType() === 'minecraft:player') {
        event.registerProperty('name', 'string', 'Example Name')
		event.registerProperty('description', 'string', 'Example Description')
    }
})
