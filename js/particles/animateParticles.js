function animateParticles(ofBoundary) {
  partDB = particleData[ofBoundary];
  for (var particleIndex in partDB) {
    options = {};
    updatePointXY(
      boundaryData[ofBoundary]['graph'],
      'particle@' + particleIndex,
      partDB[particleIndex].x,
      partDB[particleIndex].y
    );

    if (particleData[ofBoundary][particleIndex].infectionAnimation) {
      particleData[ofBoundary][particleIndex].infectionAnimationFrame =
        particleData[ofBoundary][particleIndex].infectionAnimationFrame +
        (100 * simulationParameters.daysEverySecond) /
          (6 * simulationParameters.frameRate);
      cinfectradius = linearValue(
        0,
        100,
        0,
        simulationParameters.infectionRadius,
        particleData[ofBoundary][particleIndex].infectionAnimationFrame
      );
      cinfectradiusAlpha = linearValue(
        0,
        100,
        1,
        0,
        particleData[ofBoundary][particleIndex].infectionAnimationFrame
      );

      options = {};
      options.x = partDB[particleIndex].x;
      options.y = partDB[particleIndex].y;
      options.radius = cinfectradius;

      if (
        particleData[ofBoundary][particleIndex].infectionAnimationFrame > 100
      ) {
        particleData[ofBoundary][particleIndex].infectionAnimation = false;
        particleData[ofBoundary][particleIndex].infectionAnimationFrame = 0;
      }
      options.stroke =
        'hsla(' +
        particleData[ofBoundary][particleIndex].color +
        ',' +
        cinfectradiusAlpha +
        ')';
      updateCircle(
        boundaryData[ofBoundary]['graph'],
        'particleCircle@' + particleIndex,
        options
      );
    }
  }
}
