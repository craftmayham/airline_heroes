//made by WolfDude24, inspired by fsang
StartupEvents.registry('palladium:condition_serializer', (event) => {
    event.create('airline_heroes:nearby_wall')

        .addProperty('blockID', 'string', 'minecraft:stone', 'Block ID of the target block')
        .addProperty('search_range', 'float', 10, 'Range to search for around the entity')
        .addProperty('amount', 'integer', 1, 'Minimum number of blocks required within the range')

        .test((entity, props) => {
            const world = entity.level;
            const blockID = props.get('blockID');
            const rawRange = props.get('search_range');
            const amount = props.get('amount');

            const range = Math.floor(rawRange);
            const entityPos = entity.blockPosition();
            let count = 0;
            const expectedId = `block.${blockID.replace(':', '.')}`;

            const offsets = [];
            for (let dx = -range; dx <= range; dx++) {
                for (let dy = 0; dy <= range+2; dy++) {
                    for (let dz = -range; dz <= range; dz++) {
                        offsets.push([dx, dy, dz]);
                    }
                }
            }

            offsets.forEach(([x, y, z]) => {
                const blockPos = entityPos.offset(x, y, z);
                const blockState = world.getBlockState(blockPos);
                const block = blockState.getBlock();

                if (!(block.getDescriptionId() === expectedId)) {
                    count++;
                }
            });

            return count >= amount;
        });
});