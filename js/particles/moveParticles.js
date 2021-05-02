function moveParticles(ofBoundary) {
  partDB = particleData[ofBoundary];
  for (var particleIndex in partDB) {
    if (partDB[particleIndex].moveAnimation) {
      moveFrom = partDB[particleIndex].moveAnimationFrom;
      moveTo = partDB[particleIndex].moveAnimationTo;
      moveTime = partDB[particleIndex].moveAnimationTime;
      particleData[ofBoundary][particleIndex].moveAnimationFrame =
        particleData[ofBoundary][particleIndex].moveAnimationFrame + 1;
      partDB[particleIndex].x = linearValue(
        0,
        moveTime,
        moveFrom[0],
        moveTo[0],
        particleData[ofBoundary][particleIndex].moveAnimationFrame
      );
      partDB[particleIndex].y = linearValue(
        0,
        moveTime,
        moveFrom[1],
        moveTo[1],
        particleData[ofBoundary][particleIndex].moveAnimationFrame
      );

      if (
        particleData[ofBoundary][particleIndex].moveAnimationFrame >= moveTime
      ) {
        particleData[ofBoundary][particleIndex].moveAnimation = false;
        particleData[ofBoundary][particleIndex].moveAnimationFrame = 0;
      }
    } else if (partDB[particleIndex].visitingCentralLocation) {
      partDB[particleIndex].visitingCLFrame =
        partDB[particleIndex].visitingCLFrame + 1;
      if (
        partDB[particleIndex].visitingCLFrame <
        visitCLAndReturnDuration * fractionOfDurationToReachCL
      ) {
        partDB[particleIndex].x = linearValue(
          0,
          visitCLAndReturnDuration * fractionOfDurationToReachCL,
          partDB[particleIndex].visitingCLFrom[0],
          boundaryData[ofBoundary]['center'][0],
          partDB[particleIndex].visitingCLFrame
        );
        partDB[particleIndex].y = linearValue(
          0,
          visitCLAndReturnDuration * fractionOfDurationToReachCL,
          partDB[particleIndex].visitingCLFrom[1],
          boundaryData[ofBoundary]['center'][1],
          partDB[particleIndex].visitingCLFrame
        );
      } else if (
        partDB[particleIndex].visitingCLFrame >
        visitCLAndReturnDuration * returnToCLFactor
      ) {
        partDB[particleIndex].x = linearValue(
          visitCLAndReturnDuration * fractionOfDurationToReachCL,
          visitCLAndReturnDuration,
          boundaryData[ofBoundary]['center'][0],
          partDB[particleIndex].visitingCLFrom[0],
          partDB[particleIndex].visitingCLFrame
        );
        partDB[particleIndex].y = linearValue(
          visitCLAndReturnDuration * fractionOfDurationToReachCL,
          visitCLAndReturnDuration,
          boundaryData[ofBoundary]['center'][1],
          partDB[particleIndex].visitingCLFrom[1],
          partDB[particleIndex].visitingCLFrame
        );
      }

      if (partDB[particleIndex].visitingCLFrame >= visitCLAndReturnDuration) {
        partDB[particleIndex].visitingCentralLocation = false;
        partDB[particleIndex].visitingCLFrame = 0;
      }
    } else {
      partDB[particleIndex].x =
        partDB[particleIndex].x + partDB[particleIndex].vx * timeStep;
      partDB[particleIndex].y =
        partDB[particleIndex].y + partDB[particleIndex].vy * timeStep;

      if (ofBoundary == 'simpleQuarantineB') {
        boundaryRForce = boundaryRepulsiveForce(
          [partDB[particleIndex].x, partDB[particleIndex].y],
          ofBoundary,
          boundaryForceC * 3,
          0.07
        );
      } else {
        boundaryRForce = boundaryRepulsiveForce(
          [partDB[particleIndex].x, partDB[particleIndex].y],
          ofBoundary,
          boundaryForceC,
          0.1
        );
      }

      // A SocialDistancingRepulsiveForce

      if (
        simulationParameters.socialDistancingFactorA > 0 &&
        particleData[ofBoundary][particleIndex].socialDistancingObedience != 0
      ) {
        mainParticlePos = [
          particleData[ofBoundary][particleIndex].x,
          particleData[ofBoundary][particleIndex].y,
        ];
        vicinityN = getParticleVicinityN(mainParticlePos, ofBoundary);
        particlesClose = getSurroundingRepulsives(vicinityN, ofBoundary);

        totalForce = [0, 0];
        for (vPIndex = 0; vPIndex < particlesClose.length; vPIndex++) {
          vicinityParticle = particlesClose[vPIndex];
          if (
            vicinityParticle != particleIndex &&
            particleData[ofBoundary][vicinityParticle] != undefined
          ) {
            vicinityParticlePos = [
              particleData[ofBoundary][vicinityParticle].x,
              particleData[ofBoundary][vicinityParticle].y,
            ];
            distanceR = distF(mainParticlePos, vicinityParticlePos);
            unitVec = directionvec(vicinityParticlePos, mainParticlePos);
            distanceInverse = 1 / Math.pow(distanceR, 3);

            obedience =
              particleData[ofBoundary][particleIndex].socialDistancingObedience;
            socialDistancingForceFactor =
              simulationParameters.socialDistancingFactorA;
            smallF = [
              unitVec[0] *
                distanceInverse *
                socialDistancingForceFactor *
                obedience,
              unitVec[1] *
                distanceInverse *
                socialDistancingForceFactor *
                obedience,
            ];
            totalForce = addVec(totalForce, smallF);
          }
        }
        partDB[particleIndex].ax =
          partDB[particleIndex].ax + totalForce[0] / 100;
        partDB[particleIndex].ay =
          partDB[particleIndex].ay + totalForce[1] / 100;

        speedLimitForSD = linearValue(
          0,
          1,
          0.1,
          0.05,
          simulationParameters.socialDistancingFactorA
        );

        pspeed = mod([partDB[particleIndex].vx, partDB[particleIndex].vy]);
        if (pspeed > speedLimitForSD) {
          partDB[particleIndex].vx =
            (partDB[particleIndex].vx * speedLimitForSD) / pspeed;
          partDB[particleIndex].vy =
            (partDB[particleIndex].vy * speedLimitForSD) / pspeed;
        }
        accLimitForSD = linearValue(
          0,
          1,
          0.01,
          0.1,
          simulationParameters.socialDistancingFactorA
        );

        modAcc = mod([partDB[particleIndex].ax, partDB[particleIndex].ay]);
        if (modAcc > accLimitForSD) {
          partDB[particleIndex].ax =
            (partDB[particleIndex].ax * accLimitForSD) / modAcc;
          partDB[particleIndex].ay =
            (partDB[particleIndex].ay * accLimitForSD) / modAcc;
        }
      } else {
        partDB[particleIndex].ax =
          partDB[particleIndex].ax +
          2 * (Math.random() - 0.5) * randomSmallJerk;
        partDB[particleIndex].ay =
          partDB[particleIndex].ay +
          2 * (Math.random() - 0.5) * randomSmallJerk;

        pspeed = mod([partDB[particleIndex].vx, partDB[particleIndex].vy]);
        if (pspeed > speedLimit) {
          partDB[particleIndex].vx =
            (partDB[particleIndex].vx * speedLimit) / pspeed;
          partDB[particleIndex].vy =
            (partDB[particleIndex].vy * speedLimit) / pspeed;
        }

        modAcc = mod([partDB[particleIndex].ax, partDB[particleIndex].ay]);
        if (modAcc > accLimit) {
          partDB[particleIndex].ax =
            (partDB[particleIndex].ax * accLimit) / modAcc;
          partDB[particleIndex].ay =
            (partDB[particleIndex].ay * accLimit) / modAcc;
        }
      }

      partDB[particleIndex].vx =
        partDB[particleIndex].vx +
        partDB[particleIndex].ax * timeStep +
        boundaryRForce[0] * timeStep;
      partDB[particleIndex].vy =
        partDB[particleIndex].vy +
        partDB[particleIndex].ay * timeStep +
        boundaryRForce[1] * timeStep;
    }

    if (
      (currentSim == 'centralLocationCase' ||
        currentSim == 'centralLocationQuarantineCase') &&
      particleData[ofBoundary][particleIndex].moveAnimation == false &&
      Math.random() < simulationParameters.probabilityCLVisit &&
      particleData[ofBoundary][particleIndex].visitingCentralLocation == false
    ) {
      particleData[ofBoundary][particleIndex].visitingCentralLocation = true;
      particleData[ofBoundary][particleIndex].visitingCLFrame = 0;
      particleData[ofBoundary][particleIndex].visitingCLFrom = [
        particleData[ofBoundary][particleIndex].x,
        particleData[ofBoundary][particleIndex].y,
      ];
    }
  }
}
