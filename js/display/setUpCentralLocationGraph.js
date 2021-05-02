function setUpCentralLocationCaseGraph() {
  graphH = document.getElementById('centralLocationCaseGraphH');
  graphoptions = {};
  graphoptions.xmax = 1;
  graphoptions.xmin = -1;

  graphoptions.ymax = 1;
  graphoptions.ymin = -1;

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

  addGraph(graphH, 'centralLocationCaseG', graphoptions);

  boundaryProperties = {};
  boundaryProperties.color = 'white';
  drawBoundary(
    'centralLocationCaseG',
    'centralLocationCaseB',
    simpleCaseBoundaryRanges,
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
  addPath('centralLocationCaseG', 'centralLocB', options);

  boundaryData['centralLocationCaseB']['fractionInfectedInitially'] =
    simulationParameters.fractionInfectedInitially;

  particleCounts['centralLocationCaseG'] = {};
  particleCounts['centralLocationCaseG']['infected'] = 0;
  particleCounts['centralLocationCaseG']['susceptible'] = 0;
  particleCounts['centralLocationCaseG']['removed'] = 0;

  particleCountTimeLine['centralLocationCaseG'] = {};
  particleCountTimeLine['centralLocationCaseG']['infected'] = [];
  particleCountTimeLine['centralLocationCaseG']['susceptible'] = [];
  particleCountTimeLine['centralLocationCaseG']['removed'] = [];

  particleInfectionCount['centralLocationCaseG'] = {};

  addParticlesToBoundary(
    'centralLocationCaseG',
    'centralLocationCaseB',
    simulationParameters.numberOfParticles
  );

  createVicinityDB('centralLocationCaseB');

  prepInteractionData('centralLocationCaseB');
}
