const updateTiming = (world) => {
  const gameTime = world.entities.find((element) => element.gameTime).gameTime;
  const currentTime = performance.now();
  const elapsedTime = currentTime - gameTime.lastTick;

  gameTime.lastTick = currentTime;
  gameTime.accumulator += elapsedTime;
};

export default updateTiming;
