// ECS functions
import ECS from "./ecs/ecs";

// import components
import newGameTime from "./components/game/gameTime";
import newPosition2D from "./components/position/position2D";
import newVelocity2D from "./components/position/velocity2D";

// import systems
import updateTiming from "./systems/game/updateTiming";
import updatePhysics2D from "./systems/physics/updatePhysics2D";

// create and setup world
const world = ECS.createWorld();
const game = ECS.addEntity(world);
const gameTime = newGameTime();
ECS.addComponentToEntity(world, game, gameTime);
ECS.addSystem(world, updateTiming, "preupdate");
ECS.addSystem(world, updatePhysics2D, "update");

// add entities
const player = ECS.addEntity(world);
const enemy = ECS.addEntity(world);

// create player components
const playerPosition2D = newPosition2D(0, 0);
const playerVelocity2D = newVelocity2D(0, 0);

// associate player components
ECS.addComponentToEntity(world, player, playerPosition2D);
ECS.addComponentToEntity(world, player, playerVelocity2D);

// create enemy components
const enemyPosition2D = newPosition2D(2, 2);
const enemyVelocity2D = newVelocity2D(0, 0);

// associate enemy components
ECS.addComponentToEntity(world, enemy, enemyPosition2D);
ECS.addComponentToEntity(world, enemy, enemyVelocity2D);

// game loop
const gameTick = () => {
  ECS.preUpdate(world);
  ECS.update(world);
  ECS.postUpdate(world);

  queueTick();
};

// queue next game tick
const queueTick = () => {
  window.requestAnimationFrame(gameTick);
};

// start game loop
const startTick = () => {
  queueTick();
};

startTick();

//console.log(world.entities, world.lookup[enemy.id]);
