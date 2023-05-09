const updatePhysics2D = (world) => {
  const validEntities = world.entities.filter(isValidEntity);
  const gameTime = world.entities.find((element) => element.gameTime).gameTime;

  while (gameTime.accumulator >= gameTime.deltaTime) {
    validEntities.forEach((element) => {
      element.position2D.xCoord += element.velocity2D.deltaX;
      element.position2D.yCoord += element.velocity2D.deltaY;
    });
    gameTime.accumulator -= gameTime.deltaTime;
  }
  //console.log(world);
  //console.log(validEntities);
  function isValidEntity(entity) {
    return entity.position2D && entity.velocity2D;
  }
};

export default updatePhysics2D;
