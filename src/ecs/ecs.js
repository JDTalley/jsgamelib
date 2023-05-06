/**
 * Creates a world with random ID
 * @returns {world} created world
 */
const createWorld = () => {
  const world = {
    id: crypto.randomUUID(),
    entities: [],
    lookup: {},
    systems: {
      preupdate: [],
      update: [],
      postupdate: [],
    },
  };

  return world;
};

/**
 * Creates an entity with random ID
 * @param {world} worldID ID of the world to add entity to
 * @returns {entity} ID of created entity
 */
const addEntity = (world) => {
  const entity = {
    id: crypto.randomUUID(),
  };

  world.entities.push(entity);

  const index = world.entities.length - 1;

  world.lookup = {
    ...world.lookup,
    [entity.id]: index,
  };

  return entity;
};

/**
 * Adds component to entity
 * @param {world} world
 * @param {entity} entity
 * @param {component} component
 */
const addComponentToEntity = (world, { id }, { name, data }) => {
  const index = world.lookup[id];

  if (world.entities[index].name) {
    world.entities[index].name = {
      ...data,
    };
  } else {
    world.entities[index] = {
      ...world.entities[index],
      [name]: data,
    };
  }
};

const addSystem = (world, system, stage = "preupdate") => {
  world.systems[stage].push(system);
};

const preUpdate = (world) => {
  world.systems.preupdate.forEach((el) => {
    el(world);
  });
};

const update = (world) => {
  world.systems.update.forEach((el) => {
    el(world);
  });
};

const postUpdate = (world) => {
  world.systems.postupdate.forEach((el) => {
    el(world);
  });
};

export default {
  createWorld,
  addEntity,
  addComponentToEntity,
  addSystem,
  preUpdate,
  update,
  postUpdate,
};
