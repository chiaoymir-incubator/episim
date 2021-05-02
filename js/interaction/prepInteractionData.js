function prepInteractionData(ofBoundary) {
  createVicinityDB(ofBoundary);
  partDB = particleData[ofBoundary];

  for (var particleIndex in partDB) {
    if (
      particleData[ofBoundary][particleIndex].state == 'susceptible' &&
      particleData[ofBoundary][particleIndex].moveAnimation == false
    ) {
      vicinityN = getParticleVicinityN(
        [
          particleData[ofBoundary][particleIndex].x,
          particleData[ofBoundary][particleIndex].y,
        ],
        ofBoundary
      );
      particleVicinityDB[ofBoundary][vicinityN[0] + '&' + vicinityN[1]].push(
        particleIndex
      );
    }
    if (particleData[ofBoundary][particleIndex].moveAnimation == false) {
      vicinityN = getParticleVicinityN(
        [
          particleData[ofBoundary][particleIndex].x,
          particleData[ofBoundary][particleIndex].y,
        ],
        ofBoundary
      );
      allParticleVicinityDB[ofBoundary][vicinityN[0] + '&' + vicinityN[1]].push(
        particleIndex
      );
    }
  }
}
