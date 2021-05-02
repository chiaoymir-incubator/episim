function setUpSimpleQuarantineCaseGraph() {
  graphH = document.getElementById('simpleCaseGraph&QH');
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
  // graphoptions.fixAxis = 'yaxis'
  graphoptions.fixAxisStretchCentrally = 'yes';

  graphoptions.scrollZoom = 'yes';
  graphoptions.draggability = 'yes';

  addGraph(graphH, 'simpleCaseGraph&QG', graphoptions);

  boundaryProperties = {};
  boundaryProperties.color = 'white';
  drawBoundary(
    'simpleCaseGraph&QG',
    'simpleCaseGraph&QB',
    [-1, 1, -1, 1],
    boundaryProperties
  );

  boundaryProperties.color = 'hsla(2, 100%, 50%, 1)';
  drawBoundary(
    'simpleCaseGraph&QG',
    'simpleQuarantineB',
    [-1.7, -1.2, -1, -0.5],
    boundaryProperties
  );

  boundaryData['simpleCaseGraph&QB']['fractionInfectedInitially'] =
    simulationParameters.fractionInfectedInitially;

  particleCounts['simpleCaseGraph&QG'] = {};
  particleCounts['simpleCaseGraph&QG']['infected'] = 0;
  particleCounts['simpleCaseGraph&QG']['susceptible'] = 0;
  particleCounts['simpleCaseGraph&QG']['removed'] = 0;

  particleCountTimeLine['simpleCaseGraph&QG'] = {};
  particleCountTimeLine['simpleCaseGraph&QG']['infected'] = [];
  particleCountTimeLine['simpleCaseGraph&QG']['susceptible'] = [];
  particleCountTimeLine['simpleCaseGraph&QG']['removed'] = [];

  particleInfectionCount['simpleCaseGraph&QG'] = {};

  addParticlesToBoundary(
    'simpleCaseGraph&QG',
    'simpleCaseGraph&QB',
    simulationParameters.numberOfParticles
  );

  createVicinityDB('simpleCaseGraph&QB');

  prepInteractionData('simpleCaseGraph&QB');
}
