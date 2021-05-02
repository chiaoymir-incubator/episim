function handleCalculationPlaying() {
  if (currentSim == 'simpleCase') {
    moveParticles('simpleCaseGraphB');
    if (timecount % timeStepsPerDay == 0) {
      prepInteractionData('simpleCaseGraphB');
    }
    if (timecount % timeStepsPerDay == 1) {
      updatePlotGraph();
      interactions('simpleCaseGraphB');
      dayCount = dayCount + 1;
    }
  } else if (currentSim == 'simpleCase&Q') {
    moveParticles('simpleCaseGraph&QB');
    moveParticles('simpleQuarantineB');
    if (timecount % timeStepsPerDay == 0) {
      prepInteractionData('simpleCaseGraph&QB');
      prepInteractionData('simpleQuarantineB');
    }
    if (timecount % timeStepsPerDay == 1) {
      updatePlotGraph();
      interactions('simpleCaseGraph&QB');
      interactions('simpleQuarantineB');
      dayCount = dayCount + 1;
    }
  } else if (currentSim == 'centralLocationCase') {
    moveParticles('centralLocationCaseB');
    if (timecount % timeStepsPerDay == 0) {
      prepInteractionData('centralLocationCaseB');
    }
    if (timecount % timeStepsPerDay == 1) {
      updatePlotGraph();
      interactions('centralLocationCaseB');
      dayCount = dayCount + 1;
    }
  } else if (currentSim == 'centralLocationQuarantineCase') {
    moveParticles('centralLocationQuarantineCaseB');
    moveParticles('centralLocationQuarantineB');
    if (timecount % timeStepsPerDay == 0) {
      prepInteractionData('centralLocationQuarantineCaseB');
      prepInteractionData('centralLocationQuarantineB');
    }
    if (timecount % timeStepsPerDay == 1) {
      updatePlotGraph();
      interactions('centralLocationQuarantineCaseB');
      interactions('centralLocationQuarantineB');
      dayCount = dayCount + 1;
    }
  } else if (currentSim == 'communitiesCase') {
    for (bdi = 0; bdi < 3; bdi++) {
      for (bdj = 0; bdj < 3; bdj++) {
        moveParticles('communitiesCaseB_' + bdi + '_' + bdj);
      }
    }
    if (timecount % timeStepsPerDay == 0) {
      for (bdi = 0; bdi < 3; bdi++) {
        for (bdj = 0; bdj < 3; bdj++) {
          prepInteractionData('communitiesCaseB_' + bdi + '_' + bdj);
        }
      }
    }
    if (timecount % timeStepsPerDay == 1) {
      updatePlotGraph();
      for (bdi = 0; bdi < 3; bdi++) {
        for (bdj = 0; bdj < 3; bdj++) {
          interactions('communitiesCaseB_' + bdi + '_' + bdj);
        }
      }
      dayCount = dayCount + 1;
    }
  } else if (currentSim == 'communitiesQuarantineCase') {
    for (bdi = 0; bdi < 3; bdi++) {
      for (bdj = 0; bdj < 3; bdj++) {
        moveParticles('communitiesQuarantineCaseB_' + bdi + '_' + bdj);
      }
    }
    moveParticles('communitiesQuarantineB');
    if (timecount % timeStepsPerDay == 0) {
      for (bdi = 0; bdi < 3; bdi++) {
        for (bdj = 0; bdj < 3; bdj++) {
          prepInteractionData('communitiesQuarantineCaseB_' + bdi + '_' + bdj);
        }
      }
      prepInteractionData('communitiesQuarantineB');
    }

    if (timecount % timeStepsPerDay == 1) {
      updatePlotGraph();
      for (bdi = 0; bdi < 3; bdi++) {
        for (bdj = 0; bdj < 3; bdj++) {
          interactions('communitiesQuarantineCaseB_' + bdi + '_' + bdj);
        }
      }
      interactions('communitiesQuarantineB');
      dayCount = dayCount + 1;
    }
  }
}
