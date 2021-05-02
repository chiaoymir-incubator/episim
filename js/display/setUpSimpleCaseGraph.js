function setUpSimpleCaseGraph() {
  graphH = document.getElementById('simpleCaseGraphH');
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

  addGraph(graphH, 'simpleCaseGraphG', graphoptions);

  boundaryProperties = {};
  boundaryProperties.color = 'white';
  drawBoundary(
    'simpleCaseGraphG',
    'simpleCaseGraphB',
    simpleCaseBoundaryRanges,
    boundaryProperties
  );

  boundaryData['simpleCaseGraphB']['fractionInfectedInitially'] =
    simulationParameters.fractionInfectedInitially;

  particleCounts['simpleCaseGraphG'] = {};
  particleCounts['simpleCaseGraphG']['infected'] = 0;
  particleCounts['simpleCaseGraphG']['susceptible'] = 0;
  particleCounts['simpleCaseGraphG']['removed'] = 0;

  particleCountTimeLine['simpleCaseGraphG'] = {};
  particleCountTimeLine['simpleCaseGraphG']['infected'] = [];
  particleCountTimeLine['simpleCaseGraphG']['susceptible'] = [];
  particleCountTimeLine['simpleCaseGraphG']['removed'] = [];

  particleInfectionCount['simpleCaseGraphG'] = {};

  addParticlesToBoundary(
    'simpleCaseGraphG',
    'simpleCaseGraphB',
    simulationParameters.numberOfParticles
  );

  createVicinityDB('simpleCaseGraphB');

  prepInteractionData('simpleCaseGraphB');
}
