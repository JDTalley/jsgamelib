/**
 * Adds X and Y velocity to entity
 * @param {deltaX} deltaX x velocity of entity
 * @param {deltaY} deltaY y velocity of entity
 * @returns
 */
const newVelocity2D = (deltaX, deltaY) => {
  return {
    name: "velocity2D",
    data: {
      deltaX: deltaX,
      deltaY: deltaY,
    },
  };
};

export default newVelocity2D;
