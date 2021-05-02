function setUpCommunitiesCaseGraph() {
  graphH = document.getElementById('communitiesCaseGraphH');
  graphoptions = {};
  sep = 0.2;
  aValueAP = -1 * (3 + sep);
  dValueAP = 2 + sep;

  toInfectCommunities = {};
  communitiesNames = [];

  for (bdi = 0; bdi < 3; bdi++) {
    for (bdj = 0; bdj < 3; bdj++) {
      communitiesNames.push('communitiesCaseB_' + bdi + '_' + bdj);
    }
  }

  communitiesToInfect = shuffle(communitiesNames);
  communitiesToInfect = communitiesToInfect.slice(
    0,
    simulationParameters.infectNCommunitiesInitially
  );

  for (commIndex = 0; commIndex < communitiesToInfect.length; commIndex++) {
    toInfectCommunities[communitiesToInfect[commIndex]] = true;
  }

  graphoptions.xmax = 2 + aValueAP + 2 * dValueAP;
  graphoptions.xmin = aValueAP;

  graphoptions.ymax = 2 + aValueAP + 2 * dValueAP;
  graphoptions.ymin = aValueAP;

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

  addGraph(graphH, 'communitiesCaseGraph', graphoptions);

  particleCounts['communitiesCaseGraph'] = {};
  particleCounts['communitiesCaseGraph']['infected'] = 0;
  particleCounts['communitiesCaseGraph']['susceptible'] = 0;
  particleCounts['communitiesCaseGraph']['removed'] = 0;

  particleCountTimeLine['communitiesCaseGraph'] = {};
  particleCountTimeLine['communitiesCaseGraph']['infected'] = [];
  particleCountTimeLine['communitiesCaseGraph']['susceptible'] = [];
  particleCountTimeLine['communitiesCaseGraph']['removed'] = [];

  particleInfectionCount['communitiesCaseGraph'] = {};

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
        'communitiesCaseGraph',
        'communitiesCaseB_' + bdi + '_' + bdj,
        boundaryRangeP,
        boundaryProperties
      );
      if (
        toInfectCommunities['communitiesCaseB_' + bdi + '_' + bdj] == undefined
      ) {
        boundaryData['communitiesCaseB_' + bdi + '_' + bdj][
          'fractionInfectedInitially'
        ] = 0;
      } else if (
        toInfectCommunities['communitiesCaseB_' + bdi + '_' + bdj] == true
      ) {
        boundaryData['communitiesCaseB_' + bdi + '_' + bdj][
          'fractionInfectedInitially'
        ] = simulationParameters.fractionInfectedInitially;
      }

      addParticlesToBoundary(
        'communitiesCaseGraph',
        'communitiesCaseB_' + bdi + '_' + bdj,
        simulationParameters.nPerCommunity
      );
      prepInteractionData('communitiesCaseB_' + bdi + '_' + bdj);
    }
  }
}
