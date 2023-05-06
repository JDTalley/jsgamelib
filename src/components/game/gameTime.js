/**
 * Adds data to entity for tracking and updating game time
 * @returns gameTime component
 */
const newGameTime = () => {
  return {
    name: "gameTime",
    data: {
      deltaTime: 0.01,
      accumulator: 0,
      lastTick: performance.now(),
    },
  };
};

export default newGameTime;
