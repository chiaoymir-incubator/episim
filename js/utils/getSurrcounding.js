function getSurrounding(zonevalues, boundaryN) {
  returnParticles = [];
  xbreaks = boundaryData[boundaryN]['xbreaks'];
  ybreaks = boundaryData[boundaryN]['ybreaks'];
  vdelta = boundaryData[boundaryN]['vdelta'];

  sideBoxesN = parseInt(simulationParameters.infectionRadius / vdelta);
  if (sideBoxesN < 1) {
    sideBoxesN = 1;
  }
  startib = zonevalues[0] - sideBoxesN;
  if (startib < 0) {
    startib = 0;
  }
  startjb = zonevalues[1] - sideBoxesN;
  if (startjb < 0) {
    startjb = 0;
  }

  endib = zonevalues[0] + sideBoxesN;
  if (endib > xbreaks) {
    endib = xbreaks;
  }
  endjb = zonevalues[1] + sideBoxesN;
  if (endjb > ybreaks) {
    endjb = ybreaks;
  }
  for (ib = startib; ib <= endib; ib++) {
    for (jb = startjb; jb <= endjb; jb++) {
      zoneParticles = particleVicinityDB[boundaryN][ib + '&' + jb];
      if (zoneParticles.length != 0) {
        returnParticles = returnParticles.concat(zoneParticles);
      }
    }
  }
  return returnParticles;
}
