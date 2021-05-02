function removeParticlesFromBoundary(graphN, boundaryN) {
  totalparticles = boundaryData[boundaryN]['particleNumber'];
  for (var partID in particleData[boundaryN]) {
    delete particleData[boundaryN][partID];
    particleCounts[graphN]['infected'] = 0;
    particleCounts[graphN]['susceptible'] = 0;
    particleCounts[graphN]['removed'] = 0;

    delete particleInfectionCount[graphN][partID];

    removePoint(graphN, 'particle@' + partID, options);
    removeCircle(graphN, 'particleCircle@' + partID);
  }
}
