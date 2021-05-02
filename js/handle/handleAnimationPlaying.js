function handleAnimationPlaying() {
  if (currentSim == 'simpleCase') {
    animateParticles('simpleCaseGraphB');
  } else if (currentSim == 'simpleCase&Q') {
    animateParticles('simpleCaseGraph&QB');
    animateParticles('simpleQuarantineB');
  } else if (currentSim == 'centralLocationCase') {
    animateParticles('centralLocationCaseB');
  } else if (currentSim == 'centralLocationQuarantineCase') {
    animateParticles('centralLocationQuarantineCaseB');
    animateParticles('centralLocationQuarantineB');
  } else if (currentSim == 'communitiesCase') {
    for (bdi = 0; bdi < 3; bdi++) {
      for (bdj = 0; bdj < 3; bdj++) {
        animateParticles('communitiesCaseB_' + bdi + '_' + bdj);
      }
    }
  } else if (currentSim == 'communitiesQuarantineCase') {
    for (bdi = 0; bdi < 3; bdi++) {
      for (bdj = 0; bdj < 3; bdj++) {
        animateParticles('communitiesQuarantineCaseB_' + bdi + '_' + bdj);
      }
    }
    animateParticles('communitiesQuarantineB');
  }
}
