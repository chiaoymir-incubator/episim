function setUpCentralLocationQuarantineCaseGraph() {
  graphH = document.getElementById('centralLocationQuarantineCaseGraphH');
  graphoptions = {};
  graphoptions.xmax = 1;
  graphoptions.xmin = -1.7;

  graphoptions.ymax = 1.7;
  graphoptions.ymin = -1.7;

  graphoptions.axislocationX = 0;
  graphoptions.axislocationY = 0;

  graphoptions.xaxislabelvisibility = 'no';
  graphoptions.yaxislabelvisibility = 'no';

  graphoptions.xaxisvisibility = 'no';
  graphoptions.yaxisvisibility = 'no';

  graphoptions.xmajorgridlabelvisibility = 'no';
  graphoptions.ymajorgridlabelvisibility = 'no';

  graphoptions.xmajorgridlinesvisibility = 'no';
  graphoptions.ymajorgridlinesvisibility = 'no';

  graphoptions.fontSize = 1.6;

  graphoptions.unitAspectRatio = 'yes';
  graphoptions.fixAxisStretchCentrally = 'yes';

  graphoptions.scrollZoom = 'yes';
  graphoptions.draggability = 'yes';

  addGraph(graphH, 'centralLocationQuarantineCaseGraph', graphoptions);

  boundaryProperties = {};
  boundaryProperties.color = 'white';
  drawBoundary(
    'centralLocationQuarantineCaseGraph',
    'centralLocationQuarantineCaseB',
    simpleCaseBoundaryRanges,
    boundaryProperties
  );

  boundaryProperties.color = 'hsla(2, 100%, 50%, 1)';
  drawBoundary(
    'centralLocationQuarantineCaseGraph',
    'centralLocationQuarantineB',
    [-1.7, -1.2, -1, -0.5],
    boundaryProperties
  );

  options = {};
  options.pathcolor = 'white';
  options.strokewidth = 0.3;
  options.points = [
    [0.08, 0.08],
    [-0.08, 0.08],
    [-0.08, -0.08],
    [0.08, -0.08],
    [0.08, 0.08],
  ];
  addPath('centralLocationQuarantineCaseGraph', 'centralLocB', options);

  boundaryData['centralLocationQuarantineCaseB']['fractionInfectedInitially'] =
    simulationParameters.fractionInfectedInitially;

  particleCounts['centralLocationQuarantineCaseGraph'] = {};
  particleCounts['centralLocationQuarantineCaseGraph']['infected'] = 0;
  particleCounts['centralLocationQuarantineCaseGraph']['susceptible'] = 0;
  particleCounts['centralLocationQuarantineCaseGraph']['removed'] = 0;

  particleCountTimeLine['centralLocationQuarantineCaseGraph'] = {};
  particleCountTimeLine['centralLocationQuarantineCaseGraph']['infected'] = [];
  particleCountTimeLine['centralLocationQuarantineCaseGraph'][
    'susceptible'
  ] = [];
  particleCountTimeLine['centralLocationQuarantineCaseGraph']['removed'] = [];

  particleInfectionCount['centralLocationQuarantineCaseGraph'] = {};

  addParticlesToBoundary(
    'centralLocationQuarantineCaseGraph',
    'centralLocationQuarantineCaseB',
    simulationParameters.numberOfParticles
  );

  createVicinityDB('centralLocationQuarantineCaseB');

  prepInteractionData('centralLocationQuarantineCaseB');
}
