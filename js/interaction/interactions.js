function interactions(ofBoundary) {
  partDB = particleData[ofBoundary];
  for (var particleIndex in partDB) {
    mainParticle = particleIndex;
    if (
      particleData[ofBoundary][mainParticle].state == 'infected' &&
      particleData[ofBoundary][mainParticle].moveAnimation == false
    ) {
      vicinityN = getParticleVicinityN(
        [
          particleData[ofBoundary][mainParticle].x,
          particleData[ofBoundary][mainParticle].y,
        ],
        ofBoundary
      );
      particlesSusceptible = getSurrounding(vicinityN, ofBoundary);

      for (
        vicinityPIndex = 0;
        vicinityPIndex < particlesSusceptible.length;
        vicinityPIndex++
      ) {
        if (Math.random() < simulationParameters.probabilityofInfection) {
          if (interactionAnimation) {
            if (particleData[ofBoundary][mainParticle].state == 'infected') {
              if (
                particleData[ofBoundary][mainParticle].infectionAnimation ==
                false
              ) {
                particleData[ofBoundary][
                  mainParticle
                ].infectionAnimation = true;
                particleData[ofBoundary][
                  mainParticle
                ].infectionAnimationFrame = 0;
              }
            }
          }

          vicinityParticle = particlesSusceptible[vicinityPIndex];
          vicinityParticlePos = [
            particleData[ofBoundary][vicinityParticle].x,
            particleData[ofBoundary][vicinityParticle].y,
          ];
          mainParticlePos = [
            particleData[ofBoundary][mainParticle].x,
            particleData[ofBoundary][mainParticle].y,
          ];

          if (
            distF(vicinityParticlePos, mainParticlePos) <
              simulationParameters.infectionRadius &&
            mainParticle != vicinityParticle &&
            particleData[ofBoundary][vicinityParticle].state == 'susceptible'
          ) {
            options = {};
            particleData[ofBoundary][vicinityParticle].state = 'infected';
            particleData[ofBoundary][vicinityParticle].color =
              stateColors['infected'];

            particleInfectionCount[graphForParticle][mainParticle].infectionC =
              particleInfectionCount[graphForParticle][mainParticle]
                .infectionC + 1;

            graphForParticle = boundaryData[ofBoundary]['graph'];
            particleCounts[graphForParticle]['susceptible'] =
              particleCounts[graphForParticle]['susceptible'] - 1;
            particleCounts[graphForParticle]['infected'] =
              particleCounts[graphForParticle]['infected'] + 1;

            zoneP =
              particleVicinityDB[ofBoundary][vicinityN[0] + '&' + vicinityN[1]];

            particleVicinityDB[ofBoundary][
              vicinityN[0] + '&' + vicinityN[1]
            ].splice(zoneP.indexOf(vicinityParticle), 1);

            options.pointcolor =
              'hsla(' +
              particleData[ofBoundary][vicinityParticle].color +
              ',1)';
            if (Math.random() < simulationParameters.probabilityOfNoSymptoms) {
              particleData[ofBoundary][vicinityParticle].showsSymptoms = false;
              particleData[ofBoundary][vicinityParticle].color =
                stateColors['noSymptoms'];
              options.pointcolor =
                'hsla(' +
                particleData[ofBoundary][vicinityParticle].color +
                ',1)';
            }
            updatePoint(
              boundaryData[ofBoundary]['graph'],
              'particle@' + vicinityParticle,
              options
            );
          }
        }
      }

      particleData[ofBoundary][mainParticle].daysSinceInfection =
        particleData[ofBoundary][mainParticle].daysSinceInfection + 1;

      if (
        particleData[ofBoundary][mainParticle].daysSinceInfection >
        simulationParameters.infectionTime
      ) {
        particleData[ofBoundary][mainParticle].state = 'removed';
        particleData[ofBoundary][mainParticle].color = stateColors['removed'];

        particleCounts[graphForParticle]['removed'] =
          particleCounts[graphForParticle]['removed'] + 1;
        particleCounts[graphForParticle]['infected'] =
          particleCounts[graphForParticle]['infected'] - 1;

        options.pointcolor =
          'hsla(' + particleData[ofBoundary][mainParticle].color + ',1)';
        updatePoint(
          boundaryData[ofBoundary]['graph'],
          'particle@' + mainParticle,
          options
        );

        particleData[ofBoundary][mainParticle].infectionAnimation = false;
        particleData[ofBoundary][mainParticle].infectionAnimationFrame = 0;

        options.radius = 0;
        options.stroke = 'hsla(0, 0%, 0%, 0)';
        updateCircle(
          boundaryData[ofBoundary]['graph'],
          'particleCircle@' + mainParticle,
          options
        );
      }

      if (
        currentSim == 'simpleCase&Q' &&
        particleData[ofBoundary][mainParticle].daysSinceInfection >
          simulationParameters.quarantineAfter &&
        particleData[ofBoundary][mainParticle].moveAnimation == false &&
        particleData[ofBoundary][mainParticle].quarantined == false &&
        particleData[ofBoundary][mainParticle].showsSymptoms &&
        dayCount > simulationParameters.startQ
      ) {
        particleData[ofBoundary][mainParticle].quarantined = true;
        particleData[ofBoundary][mainParticle].socialDistancingObedience = 0;
        moveToBoundary(
          'simpleQuarantineB',
          'simpleCaseGraph&QB',
          mainParticle,
          timeStepsPerDay / 2
        );
      }

      if (
        currentSim == 'centralLocationQuarantineCase' &&
        particleData[ofBoundary][mainParticle].daysSinceInfection >
          simulationParameters.quarantineAfter &&
        particleData[ofBoundary][mainParticle].moveAnimation == false &&
        particleData[ofBoundary][mainParticle].quarantined == false &&
        particleData[ofBoundary][mainParticle].showsSymptoms &&
        dayCount > simulationParameters.startQ
      ) {
        particleData[ofBoundary][mainParticle].visitingCentralLocation = false;
        particleData[ofBoundary][mainParticle].visitingCLFrame = 0;
        particleData[ofBoundary][mainParticle].quarantined = true;
        particleData[ofBoundary][mainParticle].socialDistancingObedience = 0;
        moveToBoundary(
          'centralLocationQuarantineB',
          'centralLocationQuarantineCaseB',
          mainParticle,
          timeStepsPerDay / 2
        );
      }
      if (
        currentSim == 'communitiesQuarantineCase' &&
        particleData[ofBoundary][mainParticle].daysSinceInfection >
          simulationParameters.quarantineAfter &&
        particleData[ofBoundary][mainParticle].moveAnimation == false &&
        particleData[ofBoundary][mainParticle].quarantined == false &&
        particleData[ofBoundary][mainParticle].showsSymptoms &&
        dayCount > simulationParameters.startQ
      ) {
        particleData[ofBoundary][mainParticle].visitingCentralLocation = false;
        particleData[ofBoundary][mainParticle].visitingCLFrame = 0;
        particleData[ofBoundary][mainParticle].quarantined = true;
        particleData[ofBoundary][mainParticle].socialDistancingObedience = 0;
        moveToBoundary(
          'communitiesQuarantineB',
          ofBoundary,
          mainParticle,
          timeStepsPerDay / 2
        );
      }
    }
    if (
      currentSim == 'communitiesCase' &&
      particleData[ofBoundary][mainParticle].moveAnimation == false &&
      Math.random() < simulationParameters.travelProbability
    ) {
      chooseFrom = communitiesNames.slice(0, communitiesNames.length);
      chooseFrom.splice(chooseFrom.indexOf(ofBoundary), 1);
      moveToBoundary(
        randomChoice(chooseFrom),
        ofBoundary,
        mainParticle,
        2 * timeStepsPerDay
      );
    }
    if (particleData[ofBoundary][mainParticle] != undefined) {
      if (
        currentSim == 'communitiesQuarantineCase' &&
        particleData[ofBoundary][mainParticle].moveAnimation == false &&
        Math.random() < simulationParameters.travelProbability &&
        particleData[ofBoundary][mainParticle].quarantined == false
      ) {
        chooseFrom = communitiesQuarantineNames.slice(
          0,
          communitiesQuarantineNames.length
        );
        chooseFrom.splice(chooseFrom.indexOf(ofBoundary), 1);
        moveToBoundary(
          randomChoice(chooseFrom),
          ofBoundary,
          mainParticle,
          2 * timeStepsPerDay
        );
      }
    }
  }
}
