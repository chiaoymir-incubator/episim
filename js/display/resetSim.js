function resetSim(event) {
  if (currentSim == 'simpleCase') {
    // playing = false
    clearInterval(loopinterval);
    clearInterval(loopinterval2);
    timecount = 0;
    loopcount = 0;
    removeParticlesFromBoundary('simpleCaseGraphG', 'simpleCaseGraphB');
    removeGraph('simpleCaseGraphG');
    removeGraph('plotG');
    dayCount = 0;
    setUpSimpleCaseGraph();
    setUpPlotGraph();
    handleSDObedience();
    setAnimationDetails();
    playCalculationLoop();
    playAnimationLoop();
    // playing = true
  } else if (currentSim == 'simpleCase&Q') {
    // playing = false
    clearInterval(loopinterval);
    clearInterval(loopinterval2);
    timecount = 0;
    loopcount = 0;
    removeParticlesFromBoundary('simpleCaseGraph&QG', 'simpleCaseGraph&QB');
    removeParticlesFromBoundary('simpleCaseGraph&QG', 'simpleQuarantineB');
    removeGraph('simpleCaseGraph&QG');
    removeGraph('plotG');
    dayCount = 0;
    setUpSimpleQuarantineCaseGraph();
    setUpPlotGraph();
    handleSDObedience();
    setAnimationDetails();
    playCalculationLoop();
    playAnimationLoop();
    // playing = true
  } else if (currentSim == 'centralLocationCase') {
    // playing = false
    clearInterval(loopinterval);
    clearInterval(loopinterval2);
    timecount = 0;
    loopcount = 0;
    removeParticlesFromBoundary('centralLocationCaseG', 'centralLocationCaseB');
    removeGraph('centralLocationCaseG');
    removeGraph('plotG');
    dayCount = 0;
    setUpCentralLocationCaseGraph();
    setUpPlotGraph();
    handleSDObedience();
    setAnimationDetails();
    playCalculationLoop();
    playAnimationLoop();
    // playing = true
  } else if (currentSim == 'centralLocationQuarantineCase') {
    // playing = false
    clearInterval(loopinterval);
    clearInterval(loopinterval2);
    timecount = 0;
    loopcount = 0;
    removeParticlesFromBoundary(
      'centralLocationQuarantineCaseGraph',
      'centralLocationQuarantineCaseB'
    );
    removeParticlesFromBoundary(
      'centralLocationQuarantineCaseGraph',
      'centralLocationQuarantineB'
    );
    removeGraph('centralLocationQuarantineCaseGraph');
    removeGraph('plotG');
    dayCount = 0;
    setUpCentralLocationQuarantineCaseGraph();
    setUpPlotGraph();
    handleSDObedience();
    setAnimationDetails();
    playCalculationLoop();
    playAnimationLoop();
    // playing = true
  } else if (currentSim == 'communitiesCase') {
    // playing = false
    clearInterval(loopinterval);
    clearInterval(loopinterval2);
    timecount = 0;
    loopcount = 0;
    for (bdi = 0; bdi < 3; bdi++) {
      for (bdj = 0; bdj < 3; bdj++) {
        removeParticlesFromBoundary(
          'communitiesCaseGraph',
          'communitiesCaseB_' + bdi + '_' + bdj
        );
      }
    }
    removeGraph('communitiesCaseGraph');
    removeGraph('plotG');
    dayCount = 0;
    setUpCommunitiesCaseGraph();
    setUpPlotGraph();
    handleSDObedience();
    setAnimationDetails();
    playCalculationLoop();
    playAnimationLoop();
    // playing = true
  } else if (currentSim == 'communitiesQuarantineCase') {
    // playing = false
    clearInterval(loopinterval);
    clearInterval(loopinterval2);

    timecount = 0;
    loopcount = 0;
    for (bdi = 0; bdi < 3; bdi++) {
      for (bdj = 0; bdj < 3; bdj++) {
        removeParticlesFromBoundary(
          'communitiesQuarantineCaseGraph',
          'communitiesQuarantineCaseB_' + bdi + '_' + bdj
        );
      }
    }
    removeParticlesFromBoundary(
      'communitiesQuarantineCaseGraph',
      'communitiesQuarantineB'
    );
    removeGraph('communitiesQuarantineCaseGraph');
    removeGraph('plotG');
    dayCount = 0;
    setUpCommunitiesQuarantineCaseGraph();
    setUpPlotGraph();
    handleSDObedience();
    setAnimationDetails();
    playCalculationLoop();
    playAnimationLoop();
    // playing = true
  }
}
