function setUpCommunitiesQuarantineCaseGraph() {
  graphH = document.getElementById('communitiesQuarantineCaseGraphH');
  graphoptions = {};
  sep = 0.2;
  aValueAP = -1 * (3 + sep);
  dValueAP = 2 + sep;

  toInfectCommunitiesQuarantine = {};
  communitiesQuarantineNames = [];

  for (bdi = 0; bdi < 3; bdi++) {
    for (bdj = 0; bdj < 3; bdj++) {
      communitiesQuarantineNames.push(
        'communitiesQuarantineCaseB_' + bdi + '_' + bdj
      );
    }
  }

  communitiesQuarantineToInfect = shuffle(communitiesQuarantineNames);
  communitiesQuarantineToInfect = communitiesQuarantineToInfect.slice(
    0,
    simulationParameters.infectNCommunitiesInitially
  );

  for (
    commIndex = 0;
    commIndex < communitiesQuarantineToInfect.length;
    commIndex++
  ) {
    toInfectCommunitiesQuarantine[
      communitiesQuarantineToInfect[commIndex]
    ] = true;
  }

  graphoptions.xmax = 2 + aValueAP + 2 * dValueAP;
  graphoptions.xmin = aValueAP - 0.7;

  graphoptions.ymax = 2 + aValueAP + 2 * dValueAP;
  graphoptions.ymin = aValueAP - 0.7;

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

  addGraph(graphH, 'communitiesQuarantineCaseGraph', graphoptions);

  particleCounts['communitiesQuarantineCaseGraph'] = {};
  particleCounts['communitiesQuarantineCaseGraph']['infected'] = 0;
  particleCounts['communitiesQuarantineCaseGraph']['susceptible'] = 0;
  particleCounts['communitiesQuarantineCaseGraph']['removed'] = 0;

  particleCountTimeLine['communitiesQuarantineCaseGraph'] = {};
  particleCountTimeLine['communitiesQuarantineCaseGraph']['infected'] = [];
  particleCountTimeLine['communitiesQuarantineCaseGraph']['susceptible'] = [];
  particleCountTimeLine['communitiesQuarantineCaseGraph']['removed'] = [];

  particleInfectionCount['communitiesQuarantineCaseGraph'] = {};

  boundaryProperties.color = 'hsla(2, 100%, 50%, 1)';
  drawBoundary(
    'communitiesQuarantineCaseGraph',
    'communitiesQuarantineB',
    [aValueAP - 0.7, aValueAP - 0.7 + 0.5, aValueAP, aValueAP + 0.5],
    boundaryProperties
  );

  for (bdi = 0; bdi < 3; bdi++) {
    for (bdj = 0; bdj < 3; bdj++) {
      boundaryRangeP = [
        aValueAP + bdi * dValueAP,
        2 + aValueAP + bdi * dValueAP,
        aValueAP + bdj * dValueAP,
        2 + aValueAP + bdj * dValueAP,
      ];
      boundaryProperties = {};
      boundaryProperties.color = 'white';
      drawBoundary(
        'communitiesQuarantineCaseGraph',
        'communitiesQuarantineCaseB_' + bdi + '_' + bdj,
        boundaryRangeP,
        boundaryProperties
      );
      if (
        toInfectCommunitiesQuarantine[
          'communitiesQuarantineCaseB_' + bdi + '_' + bdj
        ] == undefined
      ) {
        boundaryData['communitiesQuarantineCaseB_' + bdi + '_' + bdj][
          'fractionInfectedInitially'
        ] = 0;
      } else if (
        toInfectCommunitiesQuarantine[
          'communitiesQuarantineCaseB_' + bdi + '_' + bdj
        ] == true
      ) {
        boundaryData['communitiesQuarantineCaseB_' + bdi + '_' + bdj][
          'fractionInfectedInitially'
        ] = simulationParameters.fractionInfectedInitially;
      }

      addParticlesToBoundary(
        'communitiesQuarantineCaseGraph',
        'communitiesQuarantineCaseB_' + bdi + '_' + bdj,
        simulationParameters.nPerCommunity
      );
      prepInteractionData('communitiesQuarantineCaseB_' + bdi + '_' + bdj);
    }
  }
}
