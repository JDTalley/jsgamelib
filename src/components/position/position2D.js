/**
 * Adds X and Y coordinate to entity
 * @param {Coord} xCoord x coordinate of entity
 * @param {Coord} yCoord y coordinate of entity
 * @returns position2D Component
 */
const newPosition2D = (xCoord, yCoord) => {
  return {
    name: "position2D",
    data: {
      xCoord: xCoord,
      yCoord: yCoord,
    },
  };
};

export default newPosition2D;
