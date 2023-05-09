// Requirements
const ECS = require("./ecs/ecs");
import newGameTime from "./components/game/gameTime";
import updateTiming from "./systems/game/updateTiming";

const createGame = () => {
  // create and setup world
  const world = ECS.createWorld();
  const game = ECS.addEntity(world);
  const gameTime = newGameTime();
  ECS.addComponentToEntity(world, game, gameTime);
  ECS.addSystem(world, updateTiming, "preupdate");
};

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

export default {
  createGame,
  startTick,
};
