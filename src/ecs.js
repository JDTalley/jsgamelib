export const createWorld = () => {
    const world = {
        id: crypto.randomUUID(),
        entities: [],
        systems: []
    }

    return world;
}

export const addEntity = (world) => {
    const entity = crypto.randomUUID();

    world.entities.push(entity);

    return entity;
}

export default {
    createWorld,
    addEntity
}