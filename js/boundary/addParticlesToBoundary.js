function addParticlesToBoundary(graphN, boundaryN, particleN) {
  boundaryData[boundaryN]['particleNumber'] = particleN;
  totalparticles = boundaryData[boundaryN]['particleNumber'];
  initiallyInfectedN = boundaryData[boundaryN]['fractionInfectedInitially'];

  bdrange = boundaryData[boundaryN]['range'];
  bdexclusionWX = (bdrange[1] - bdrange[0]) / 20;
  bdexclusionRX = bdrange[1] - bdrange[0] - 2 * bdexclusionWX;
  bdexclusionSX = bdrange[0] + bdexclusionWX;

  bdexclusionWY = (bdrange[3] - bdrange[2]) / 20;
  bdexclusionRY = bdrange[3] - bdrange[2] - 2 * bdexclusionWY;
  bdexclusionSY = bdrange[2] + bdexclusionWY;

  for (particleIndex = 0; particleIndex < totalparticles; particleIndex++) {
    options = {};
    options.pointsize = simulationParameters.particleSize;

    particleData[boundaryN][particleID] = {};

    particleInfectionCount[graphN][particleID] = {};
    particleInfectionCount[graphN][particleID].infectionC = 0;

    particleData[boundaryN][particleID].socialDistancingObedience = 1;

    particleData[boundaryN][particleID].vx =
      2 * (Math.random() - 0.5) * initialParticleV;
    particleData[boundaryN][particleID].vy =
      2 * (Math.random() - 0.5) * initialParticleV;

    particleData[boundaryN][particleID].ax = 0;
    particleData[boundaryN][particleID].ay = 0;

    particleData[boundaryN][particleID].x =
      bdexclusionSX + Math.random() * bdexclusionRX;
    particleData[boundaryN][particleID].y =
      bdexclusionSY + Math.random() * bdexclusionRY;
    if (particleIndex < parseInt(totalparticles * initiallyInfectedN)) {
      particleData[boundaryN][particleID].state = 'infected';
      particleCounts[graphN]['infected'] =
        particleCounts[graphN]['infected'] + 1;
    } else {
      particleData[boundaryN][particleID].state = 'susceptible';
      particleCounts[graphN]['susceptible'] =
        particleCounts[graphN]['susceptible'] + 1;
    }

    particleData[boundaryN][particleID].infectionAnimation = false;
    particleData[boundaryN][particleID].infectionAnimationFrame = 0;
    particleData[boundaryN][particleID].daysSinceInfection = 0;

    particleData[boundaryN][particleID].quarantined = false;
    particleData[boundaryN][particleID].showsSymptoms = true;

    particleData[boundaryN][particleID].visitingCentralLocation = false;
    particleData[boundaryN][particleID].visitingCLFrame = 0;

    particleData[boundaryN][particleID].color =
      stateColors[particleData[boundaryN][particleID].state];
    if (
      Math.random() < simulationParameters.probabilityOfNoSymptoms &&
      particleData[boundaryN][particleID].state == 'infected'
    ) {
      particleData[boundaryN][particleID].showsSymptoms = false;
      particleData[boundaryN][particleID].color = stateColors['noSymptoms'];
    }

    particleData[boundaryN][particleID].moveAnimation = false;
    particleData[boundaryN][particleID].moveAnimationFrom = [
      particleData[boundaryN][particleID].x,
      particleData[boundaryN][particleID].y,
    ];
    particleData[boundaryN][particleID].moveAnimationTo =
      boundaryData[boundaryN]['center'];
    particleData[boundaryN][particleID].moveAnimationFrame = 0;
    particleData[boundaryN][particleID].moveAnimationTime = timeStepsPerDay / 2;

    options.x = particleData[boundaryN][particleID].x;
    options.y = particleData[boundaryN][particleID].y;
    options.pointcolor =
      'hsla(' + particleData[boundaryN][particleID].color + ',1)';
    addPoint(graphN, 'particle@' + particleID, options);

    options = {};
    options.circlecolor = 'hsla(190, 0%, 0%, 0)';
    options.stroke =
      'hsla(' + particleData[boundaryN][particleID].color + ',0)';
    options.x = particleData[boundaryN][particleID].x;
    options.y = particleData[boundaryN][particleID].y;
    options.radius = 0;
    options.strokewidth = 2;
    addCircle(graphN, 'particleCircle@' + particleID, options);
    particleID = particleID + 1;
  }
}
