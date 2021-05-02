function handleSDObedience() {
  if (currentSim == 'simpleCase') {
    allParts = Object.keys(particleData['simpleCaseGraphB']);
    allParts = shuffle(allParts);
    toObeyP = simulationParameters.socialDistanceObedientPop * allParts.length;
    for (partIndex = 0; partIndex < allParts.length; partIndex++) {
      if (partIndex < toObeyP) {
        particleData['simpleCaseGraphB'][
          allParts[partIndex]
        ].socialDistancingObedience = 1;
      } else {
        particleData['simpleCaseGraphB'][
          allParts[partIndex]
        ].socialDistancingObedience = 0;
      }
    }
  } else if (currentSim == 'simpleCase&Q') {
    allParts = Object.keys(particleData['simpleCaseGraph&QB']);
    allParts = shuffle(allParts);
    toObeyP = simulationParameters.socialDistanceObedientPop * allParts.length;
    for (partIndex = 0; partIndex < allParts.length; partIndex++) {
      if (partIndex < toObeyP) {
        particleData['simpleCaseGraph&QB'][
          allParts[partIndex]
        ].socialDistancingObedience = 1;
      } else {
        particleData['simpleCaseGraph&QB'][
          allParts[partIndex]
        ].socialDistancingObedience = 0;
      }
    }
  } else if (currentSim == 'centralLocationCase') {
    allParts = Object.keys(particleData['centralLocationCaseB']);
    allParts = shuffle(allParts);
    toObeyP = simulationParameters.socialDistanceObedientPop * allParts.length;
    for (partIndex = 0; partIndex < allParts.length; partIndex++) {
      if (partIndex < toObeyP) {
        particleData['centralLocationCaseB'][
          allParts[partIndex]
        ].socialDistancingObedience = 1;
      } else {
        particleData['centralLocationCaseB'][
          allParts[partIndex]
        ].socialDistancingObedience = 0;
      }
    }
  } else if (currentSim == 'centralLocationQuarantineCase') {
    allParts = Object.keys(particleData['centralLocationQuarantineCaseB']);
    allParts = shuffle(allParts);
    toObeyP = simulationParameters.socialDistanceObedientPop * allParts.length;
    for (partIndex = 0; partIndex < allParts.length; partIndex++) {
      if (partIndex < toObeyP) {
        particleData['centralLocationQuarantineCaseB'][
          allParts[partIndex]
        ].socialDistancingObedience = 1;
      } else {
        particleData['centralLocationQuarantineCaseB'][
          allParts[partIndex]
        ].socialDistancingObedience = 0;
      }
    }
  } else if (currentSim == 'communitiesCase') {
    for (bdi = 0; bdi < 3; bdi++) {
      for (bdj = 0; bdj < 3; bdj++) {
        allParts = Object.keys(
          particleData['communitiesCaseB_' + bdi + '_' + bdj]
        );
        allParts = shuffle(allParts);
        toObeyP =
          simulationParameters.socialDistanceObedientPop * allParts.length;
        for (partIndex = 0; partIndex < allParts.length; partIndex++) {
          if (partIndex < toObeyP) {
            particleData['communitiesCaseB_' + bdi + '_' + bdj][
              allParts[partIndex]
            ].socialDistancingObedience = 1;
          } else {
            particleData['communitiesCaseB_' + bdi + '_' + bdj][
              allParts[partIndex]
            ].socialDistancingObedience = 0;
          }
        }
      }
    }
  } else if (currentSim == 'communitiesQuarantineCase') {
    for (bdi = 0; bdi < 3; bdi++) {
      for (bdj = 0; bdj < 3; bdj++) {
        allParts = Object.keys(
          particleData['communitiesQuarantineCaseB_' + bdi + '_' + bdj]
        );
        allParts = shuffle(allParts);
        toObeyP =
          simulationParameters.socialDistanceObedientPop * allParts.length;
        for (partIndex = 0; partIndex < allParts.length; partIndex++) {
          if (partIndex < toObeyP) {
            particleData['communitiesQuarantineCaseB_' + bdi + '_' + bdj][
              allParts[partIndex]
            ].socialDistancingObedience = 1;
          } else {
            particleData['communitiesQuarantineCaseB_' + bdi + '_' + bdj][
              allParts[partIndex]
            ].socialDistancingObedience = 0;
          }
        }
      }
    }
  }
}
