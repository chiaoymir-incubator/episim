function setUpPlotGraph() {
  graphH = document.getElementById('plotGraphH');
  graphoptions = {};
  graphoptions.xmax = 10 + 10 * 0.3;
  graphoptions.xmin = -0.1;

  graphoptions.ymax = 120;
  graphoptions.ymin = -30;

  graphoptions.axislocationX = 0;
  graphoptions.axislocationY = 0;

  // graphoptions.xaxislabelvisibility = 'no'
  graphoptions.yaxislabelvisibility = 'no';

  graphoptions.xaxisvisibility = 'no';
  graphoptions.yaxisvisibility = 'no';

  // graphoptions.xmajorgridlabelvisibility = 'no'
  // graphoptions.ymajorgridlabelvisibility = 'no'

  graphoptions.xmajorgridlabelOnlyIf = 'value >= 0 && value <= 10';
  graphoptions.ymajorgridlabelOnlyIf =
    'value >= 0 && value <= 100 && value % 20 != 10';

  graphoptions.xmajorgridlinesvisibility = 'no';
  graphoptions.ymajorgridlinesvisibility = 'no';

  graphoptions.ymajorgridlabelcolor = 'hsla(190, 0%, 100%, 1)';

  // graphoptions.ymajorgridlinesextension = 'yes'
  // graphoptions.xmajorgridlinesextension = 'yes'

  // graphoptions.xaxislabel = 'Time'
  // graphoptions.yaxislabel = 'M'

  graphoptions.gridlinenumberX = 5;
  graphoptions.gridlinenumberY = 10;

  graphoptions.fontSize = '0.67vmax';

  graphoptions.xmajorgridlabelshift = 6;
  graphoptions.ymajorgridlabelshift = -12;

  graphoptions.yaxisthickness = 2;
  graphoptions.xaxisthickness = 2;

  fontForLineLabel = '0.8vmax';

  graphoptions.draggability = 'no';

  if (dmode == 'landscape') {
    graphoptions.fontSize = '0.24vmax';
    graphoptions.xmajorgridlabelshift = 4;
    graphoptions.ymajorgridlabelshift = -9;
    fontForLineLabel = '0.28vmax';
    graphoptions.draggability = 'yes';
  }

  // if (mode == 'portrait') {
  // 	graphoptions.gridlinenumberX = 4
  // 	graphoptions.gridlinenumberY = 11
  // 	graphoptions.fontSize = 5
  // }

  // graphoptions.unitAspectRatio = 'yes'
  // graphoptions.fixAxis = 'xaxis'
  // graphoptions.fixAxisStretchCentrally = 'yes'

  // graphoptions.position = 'relative'
  graphoptions.scrollZoom = 'yes';

  // graphoptions.isgraphH = 'yes'

  // addGraph(graphH, 'plotG', graphoptions);

  // options = {};
  // options.x1 = 0;
  // options.y1 = 0;
  // options.x2 = 10;
  // options.y2 = 0;
  // options.linecolor = 'hsla(0, 0%, 70%, 1)';
  // options.strokewidth = 1;

  // addLine('plotG', 'xAxisLine', options);

  // options = {};
  // options.x1 = 0;
  // options.y1 = 0;
  // options.x2 = 0;
  // options.y2 = 100;
  // options.linecolor = 'hsla(0, 0%, 70%, 1)';
  // options.strokewidth = 1;

  // addLine('plotG', 'yAxisLine', options);

  // options = {};
  // options.points = [
  //   [0, 0],
  //   [0, 0],
  // ];
  // options.pathcolor = 'hsla(' + stateColors['removed'] + ',0)';
  // removedLinePath = addPath('plotG', 'removedLine', options)[0];
  // removedLinePath.style.fill = 'hsla(' + stateColors['removed'] + ',1)';

  // options = {};
  // options.x = 10 * 1.03;
  // options.y = 80;
  // options.text = '1% Removed';
  // options.fontSize = fontForLineLabel;
  // options.textcolor = 'hsla(190, 0%, 70%, 1)';
  // addText('plotG', 'removedText', options);

  // options = {};
  // options.points = [
  //   [0, 0],
  //   [0, 0],
  // ];
  // options.pathcolor = 'hsla(' + stateColors['susceptible'] + ',0)';
  // susceptibleLinePath = addPath('plotG', 'susceptibleLine', options)[0];
  // susceptibleLinePath.style.fill = 'hsla(' + stateColors['susceptible'] + ',1)';

  // options = {};
  // options.x = 10 * 1.03;
  // options.y = 50;
  // options.text = '1% Susceptible';
  // options.fontSize = fontForLineLabel;
  // options.textcolor = 'hsla(' + stateColors['susceptible'] + ',1)';
  // addText('plotG', 'susceptibleText', options);

  // options = {};
  // options.points = [
  //   [0, 0],
  //   [0, 0],
  // ];
  // options.pathcolor = 'hsla(' + stateColors['infected'] + ',0)';
  // infectedLinePath = addPath('plotG', 'infectedLine', options)[0];
  // infectedLinePath.style.fill = 'hsla(' + stateColors['infected'] + ',1)';

  // options = {};
  // options.x = 10 * 1.03;
  // options.y = 20;
  // options.text = '1% Infected';
  // options.fontSize = fontForLineLabel;
  // options.textcolor = 'hsla(' + stateColors['infected'] + ',1)';
  // addText('plotG', 'infectedText', options);
}
