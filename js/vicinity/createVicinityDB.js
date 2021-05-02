function createVicinityDB(forBoundary) {
  vicinityDelta = simulationParameters.infectionRadius;
  particleVicinityDB[forBoundary] = {};
  allParticleVicinityDB[forBoundary] = {};
  bdranges = boundaryData[forBoundary]['range'];
  xbreaks = parseInt((bdranges[1] - bdranges[0]) / vicinityDelta);
  ybreaks = parseInt((bdranges[3] - bdranges[2]) / vicinityDelta);
  boundaryData[forBoundary]['xbreaks'] = xbreaks;
  boundaryData[forBoundary]['ybreaks'] = ybreaks;
  boundaryData[forBoundary]['vdelta'] = vicinityDelta;
  for (i = 0; i <= xbreaks; i++) {
    for (j = 0; j <= ybreaks; j++) {
      particleVicinityDB[forBoundary][i + '&' + j] = [];
      allParticleVicinityDB[forBoundary][i + '&' + j] = [];
    }
  }
}
