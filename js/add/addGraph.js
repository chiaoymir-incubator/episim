function addGraph(parentdiv, name, gdata) {
  gdata = gdata || {};

  gdata.name = name || 'graph' + Math.random().toString();

  if (gdata.axislocationX != 0) {
    gdata.axislocationX = gdata.axislocationX || 0;
  } else {
    gdata.axislocationX = 0;
  }
  if (gdata.axislocationY != 0) {
    gdata.axislocationY = gdata.axislocationY || 0;
  } else {
    gdata.axislocationY = 0;
  }
  if (gdata.xmin != 0) {
    gdata.xmin = gdata.xmin || -1;
  } else {
    gdata.xmin = 0;
  }
  if (gdata.xmax != 0) {
    gdata.xmax = gdata.xmax || -1;
  } else {
    gdata.xmax = 0;
  }
  if (gdata.ymin != 0) {
    gdata.ymin = gdata.ymin || -1;
  } else {
    gdata.ymin = 0;
  }
  if (gdata.ymax != 0) {
    gdata.ymax = gdata.ymax || -1;
  } else {
    gdata.ymax = 0;
  }

  gdata.unitAspectRatio = gdata.unitAspectRatio || 'no';
  gdata.fixAxis = gdata.fixAxis || 'yaxis';
  gdata.fixAxisStretchCentrally = gdata.fixAxisStretchCentrally || 'no';

  gdata.xaxisvisibility = gdata.xaxisvisibility || 'yes';
  gdata.yaxisvisibility = gdata.yaxisvisibility || 'yes';

  gdata.xaxislabelvisibility = gdata.xaxislabelvisibility || 'yes';
  gdata.yaxislabelvisibility = gdata.yaxislabelvisibility || 'yes';

  gdata.xmajorgridlinesvisibility = gdata.xmajorgridlinesvisibility || 'yes';
  gdata.ymajorgridlinesvisibility = gdata.ymajorgridlinesvisibility || 'yes';

  gdata.position = gdata.position || 'absolute';

  var svgElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  );
  svgElement.setAttribute('height', '100%');
  svgElement.setAttribute('width', '100%');
  svgElement.setAttribute('viewBox', '0 0 100 100');
  // svgElement.setAttribute('preserveAspectRatio',"none")
  svgElement.setAttribute('id', name);
  svgElement.style.position = gdata.position;
  svgElement.style.left = '0%';
  svgElement.style.top = '0%';
  parentdiv.appendChild(svgElement);
  gdata.svgElement = svgElement;
  gdata.parentElement = parentdiv;

  gdata.fontSize = gdata.fontSize || 5;

  gdata.gridlinenumberX = gdata.gridlinenumberX || 10;
  gdata.gridlinenumberY = gdata.gridlinenumberY || 10;

  gdata.parentW = parentdiv.offsetWidth;
  gdata.parentH = parentdiv.offsetHeight;

  aratio = parentdiv.offsetWidth / parentdiv.offsetHeight;

  if (gdata.unitAspectRatio == 'yes') {
    if (gdata.fixAxis == 'yaxis') {
      if (gdata.fixAxisStretchCentrally == 'yes') {
        centre = (gdata.xmax + gdata.xmin) / 2;
        gdata.xmin = centre - ((gdata.ymax - gdata.ymin) * aratio) / 2;
        gdata.xmax = centre + ((gdata.ymax - gdata.ymin) * aratio) / 2;
      } else {
        gdata.xmax = gdata.xmin + (gdata.ymax - gdata.ymin) * aratio;
      }
    } else {
      if (gdata.fixAxisStretchCentrally == 'yes') {
        centre = (gdata.ymax + gdata.ymin) / 2;
        gdata.ymin = centre - ((gdata.xmax - gdata.xmin) * aratio) / 2;
        gdata.ymax = centre + ((gdata.xmax - gdata.xmin) * aratio) / 2;
      } else {
        gdata.ymax = gdata.ymin + (gdata.xmax - gdata.xmin) * aratio;
      }
    }
  }

  if (darkmode) {
    gdata.yaxiscolor = gdata.yaxiscolor || 'hsla(0, 100%, 100%, 1)';
    gdata.xaxiscolor = gdata.xaxiscolor || 'hsla(0, 100%, 100%, 1)';
    gdata.xmajorgridlabelcolor =
      gdata.xmajorgridlabelcolor || 'hsla(0, 100%, 100%, 1)';
    gdata.ymajorgridlabelcolor =
      gdata.ymajorgridlabelcolor || 'hsla(0, 100%, 100%, 1)';
    gdata.xmajorgridcolor = gdata.xmajorgridcolor || 'hsla(0, 100%, 100%, 1)';
    gdata.ymajorgridcolor = gdata.ymajorgridcolor || 'hsla(0, 100%, 100%, 1)';
  }

  gdata.yaxisthickness = gdata.yaxisthickness || 0.5;
  gdata.yaxiscolor = gdata.yaxiscolor || 'hsla(0, 50%, 0%, 1)';

  if (gdata.yaxisvisibility == 'yes') {
    var lineElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'line'
    );
    lineElement.setAttribute(
      'x1',
      graphToScaledX(gdata.axislocationX, gdata.xmin, gdata.xmax, aratio) + '%'
    );
    lineElement.setAttribute(
      'y1',
      graphToScaledY(gdata.ymax, gdata.ymin, gdata.ymax, aratio) + '%'
    );
    lineElement.setAttribute('vector-effect', 'non-scaling-stroke');
    lineElement.setAttribute(
      'x2',
      graphToScaledX(gdata.axislocationX, gdata.xmin, gdata.xmax, aratio) + '%'
    );
    lineElement.setAttribute(
      'y2',
      graphToScaledY(gdata.ymin, gdata.ymin, gdata.ymax, aratio) + '%'
    );
    lineElement.setAttribute('id', gdata.name + '-yaxis');
    lineElement.style.stroke = gdata.yaxiscolor;
    lineElement.style.strokeWidth = gdata.yaxisthickness + '%';
    gdata.yaxisElement = lineElement;
    svgElement.appendChild(lineElement);
  }

  gdata.xaxisthickness = gdata.xaxisthickness || 0.5;
  gdata.xaxiscolor = gdata.xaxiscolor || 'hsla(0, 50%, 0%, 1)';

  if (gdata.xaxisvisibility == 'yes') {
    var lineElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'line'
    );
    lineElement.setAttribute(
      'x1',
      graphToScaledX(gdata.xmin, gdata.xmin, gdata.xmax, aratio) + '%'
    );
    lineElement.setAttribute(
      'y1',
      graphToScaledY(gdata.axislocationY, gdata.ymin, gdata.ymax, aratio) + '%'
    );
    lineElement.setAttribute('vector-effect', 'non-scaling-stroke');
    lineElement.setAttribute(
      'x2',
      graphToScaledX(gdata.xmax, gdata.xmin, gdata.xmax, aratio) + '%'
    );
    lineElement.setAttribute(
      'y2',
      graphToScaledY(gdata.axislocationY, gdata.ymin, gdata.ymax, aratio) + '%'
    );
    lineElement.setAttribute('id', gdata.name + '-xaxis');
    lineElement.style.stroke = gdata.xaxiscolor;
    lineElement.style.strokeWidth = gdata.xaxisthickness + '%';
    gdata.xaxisElement = lineElement;
    svgElement.appendChild(lineElement);
  }

  gdata.xmajorgridcolor = gdata.xmajorgridcolor || 'hsla(190, 0%, 50%, 1)';
  gdata.xmajorgridthickness = gdata.xmajorgridthickness || 0.3;

  gdata.xmajorgridlinesextension = gdata.xmajorgridlinesextension || 'yes';
  gdata.ymajorgridlinesextension = gdata.ymajorgridlinesextension || 'yes';

  ticks = gdata.gridlinenumberX;

  if (gdata.xmajorgridlinesvisibility == 'yes') {
    xmajortickvalues = gridtickvalues(gdata.xmin, gdata.xmax, ticks);
    gdata.xmajorgridElements = [];
    for (m = 0; m < xmajortickvalues.length; m++) {
      ticklocation = xmajortickvalues[m];
      var lineElement = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'line'
      );
      ylength = gdata.ymax - gdata.ymin;
      if (gdata.xmajorgridlinesextension == 'yes') {
        lineElement.setAttribute(
          'x1',
          graphToScaledX(ticklocation, gdata.xmin, gdata.xmax, aratio) + '%'
        );
        lineElement.setAttribute(
          'y1',
          graphToScaledY(
            gdata.ymin - ylength / 2,
            gdata.ymin,
            gdata.ymax,
            aratio
          ) + '%'
        );
        lineElement.setAttribute('vector-effect', 'non-scaling-stroke');
        lineElement.setAttribute(
          'x2',
          graphToScaledX(ticklocation, gdata.xmin, gdata.xmax, aratio) + '%'
        );
        lineElement.setAttribute(
          'y2',
          graphToScaledY(
            gdata.ymax + ylength / 2,
            gdata.ymin,
            gdata.ymax,
            aratio
          ) + '%'
        );
      } else {
        lineElement.setAttribute(
          'x1',
          graphToScaledX(ticklocation, gdata.xmin, gdata.xmax, aratio) + '%'
        );
        lineElement.setAttribute(
          'y1',
          graphToScaledY(gdata.ymin, gdata.ymin, gdata.ymax, aratio) + '%'
        );
        lineElement.setAttribute('vector-effect', 'non-scaling-stroke');
        lineElement.setAttribute(
          'x2',
          graphToScaledX(ticklocation, gdata.xmin, gdata.xmax, aratio) + '%'
        );
        lineElement.setAttribute(
          'y2',
          graphToScaledY(gdata.ymax, gdata.ymin, gdata.ymax, aratio) + '%'
        );
        lineElement.setAttribute('id', gdata.name + '-xmajorgridline-' + m);
      }
      lineElement.setAttribute('id', gdata.name + '-xmajorgridline-' + m);
      lineElement.style.stroke = gdata.xmajorgridcolor;
      lineElement.style.strokeWidth = gdata.xmajorgridthickness + '%';
      gdata.xmajorgridElements.push(lineElement);
      svgElement.appendChild(lineElement);
    }
    gdata.xmajorgridticks = xmajortickvalues;
  }

  gdata.ymajorgridcolor = gdata.ymajorgridcolor || 'hsla(190, 0%, 50%, 1)';
  gdata.ymajorgridthickness = gdata.ymajorgridthickness || 0.3;

  ticks = gdata.gridlinenumberY;

  if (gdata.ymajorgridlinesvisibility == 'yes') {
    ymajortickvalues = gridtickvalues(gdata.ymin, gdata.ymax, ticks);
    gdata.ymajorgridElements = [];
    for (m = 0; m < ymajortickvalues.length; m++) {
      ticklocation = ymajortickvalues[m];
      var lineElement = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'line'
      );
      xlength = gdata.xmax - gdata.xmin;
      if (gdata.ymajorgridlinesextension == 'yes') {
        lineElement.setAttribute(
          'x1',
          graphToScaledX(
            gdata.xmin - xlength / 2,
            gdata.xmin,
            gdata.xmax,
            aratio
          ) + '%'
        );
        lineElement.setAttribute(
          'y1',
          graphToScaledY(ticklocation, gdata.ymin, gdata.ymax, aratio) + '%'
        );
        lineElement.setAttribute('vector-effect', 'non-scaling-stroke');
        lineElement.setAttribute(
          'x2',
          graphToScaledX(
            gdata.xmax + xlength / 2,
            gdata.xmin,
            gdata.xmax,
            aratio
          ) + '%'
        );
        lineElement.setAttribute(
          'y2',
          graphToScaledY(ticklocation, gdata.ymin, gdata.ymax, aratio) + '%'
        );
      } else {
        lineElement.setAttribute(
          'x1',
          graphToScaledX(gdata.xmin, gdata.xmin, gdata.xmax, aratio) + '%'
        );
        lineElement.setAttribute(
          'y1',
          graphToScaledY(ticklocation, gdata.ymin, gdata.ymax, aratio) + '%'
        );
        lineElement.setAttribute('vector-effect', 'non-scaling-stroke');
        lineElement.setAttribute(
          'x2',
          graphToScaledX(gdata.xmax, gdata.xmin, gdata.xmax, aratio) + '%'
        );
        lineElement.setAttribute(
          'y2',
          graphToScaledY(ticklocation, gdata.ymin, gdata.ymax, aratio) + '%'
        );
      }
      lineElement.setAttribute('id', gdata.name + '-ymajorgridline-' + m);
      lineElement.style.stroke = gdata.ymajorgridcolor;
      lineElement.style.strokeWidth = gdata.ymajorgridthickness + '%';
      gdata.ymajorgridElements.push(lineElement);
      svgElement.appendChild(lineElement);
    }
    gdata.ymajorgridticks = ymajortickvalues;
  }

  gdata.ymajorgridlabelvisibility = gdata.ymajorgridlabelvisibility || 'yes';
  gdata.ymajorgridlabelcolor =
    gdata.ymajorgridlabelcolor || 'hsla(190, 0%, 50%, 1)';

  gdata.ymajorgridlabelshift = gdata.ymajorgridlabelshift || 0.1;
  gdata.xmajorgridlabelshift = gdata.xmajorgridlabelshift || 0.1;

  gdata.xmajorgridlabelvisibility = gdata.xmajorgridlabelvisibility || 'yes';
  gdata.xmajorgridlabelcolor =
    gdata.xmajorgridlabelcolor || 'hsla(190, 0%, 50%, 1)';

  if (darkmode) {
    gdata.ymajorgridlabelcolor =
      gdata.ymajorgridlabelcolor || 'hsla(190, 100%, 50%, 1)';
    gdata.xmajorgridlabelcolor =
      gdata.xmajorgridlabelcolor || 'hsla(190, 100%, 50%, 1)';
  } else {
    gdata.ymajorgridlabelcolor =
      gdata.ymajorgridlabelcolor || 'hsla(190, 0%, 50%, 1)';
    gdata.xmajorgridlabelcolor =
      gdata.xmajorgridlabelcolor || 'hsla(190, 0%, 50%, 1)';
  }

  gdata.xlabelexclusionsstart = gdata.xlabelexclusionsstart || 0;
  gdata.xlabelexclusionsend = gdata.xlabelexclusionsend || 0;

  gdata.ylabelexclusionsstart = gdata.ylabelexclusionsstart || 0;
  gdata.ylabelexclusionsend = gdata.ylabelexclusionsend || 0;

  gdata.isComplexPlane = gdata.isComplexPlane || 'no';

  gdata.ymajorgridlabelOnlyIf = gdata.ymajorgridlabelOnlyIf || 'true';

  if (gdata.ymajorgridlabelvisibility == 'yes') {
    gdata.ymajorlabelsElements = [];
    ymajortickvalues = gridtickvalues(gdata.ymin, gdata.ymax, ticks);
    labelylocationX = gdata.axislocationX;
    if (
      graphToScaledX(gdata.axislocationX, gdata.xmin, gdata.xmax, aratio) < 0
    ) {
      labelylocationX = gdata.xmin;
    }
    if (
      graphToScaledX(gdata.axislocationX, gdata.xmin, gdata.xmax, aratio) > 100
    ) {
      labelylocationX = gdata.xmax;
    }
    for (
      m = gdata.ylabelexclusionsstart;
      m < ymajortickvalues.length - gdata.ylabelexclusionsend;
      m++
    ) {
      ticklocation = ymajortickvalues[m];
      value = ticklocation;
      if (eval(gdata.ymajorgridlabelOnlyIf)) {
        var textElement = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'text'
        );

        if (isInt(ticklocation)) {
          if (gdata.isComplexPlane == 'yes') {
            textElement.innerHTML = ticklocation + 'i';
          }
        } else {
          expstring = ticklocation.toExponential().toString();
          order = expstring.slice(expstring.indexOf('e') + 1) * -1;
          if (parseFloat(order) < -1) {
            ticklocation = ticklocation.toExponential(0);
          } else {
            ticklocation = ticklocation.toFixed(2);
          }
          textElement.innerHTML = ticklocation;
          if (ticklocation == 0) {
            textElement.innerHTML = 0;
          }
          if (gdata.isComplexPlane == 'yes') {
            textElement.innerHTML = ticklocation + 'i';
          }
        }

        textElement.setAttribute(
          'x',
          graphToScaledX(labelylocationX, gdata.xmin, gdata.xmax, aratio) +
            0.5 +
            gdata.ymajorgridlabelshift +
            '%'
        );
        textElement.setAttribute(
          'y',
          graphToScaledY(ticklocation, gdata.ymin, gdata.ymax, aratio) +
            0.5 +
            '%'
        );
        textElement.setAttribute('id', gdata.name + '-yticklabel-' + m);
        textElement.style.fontSize = gdata.fontSize;
        textElement.style.userSelect = 'none';
        textElement.style.fontFamily = 'Source Sans Pro';
        textElement.style.fill = gdata.ymajorgridlabelcolor;
        svgElement.appendChild(textElement);
        gdata.ymajorlabelsElements.push(textElement);
      }
    }
  }

  ticks = gdata.gridlinenumberX;

  gdata.xmajorgridlabelOnlyIf = gdata.xmajorgridlabelOnlyIf || 'true';

  if (gdata.xmajorgridlabelvisibility == 'yes') {
    gdata.xmajorlabelsElements = [];
    xmajortickvalues = gridtickvalues(gdata.xmin, gdata.xmax, ticks);
    labelxlocationY = gdata.axislocationY;
    if (
      graphToScaledY(gdata.axislocationY, gdata.ymin, gdata.ymax, aratio) < 0
    ) {
      labelxlocationY = gdata.ymin;
    }
    if (
      graphToScaledY(gdata.axislocationY, gdata.ymin, gdata.ymax, aratio) > 100
    ) {
      labelxlocationY = gdata.ymax;
    }

    for (
      m = gdata.xlabelexclusionsstart;
      m < xmajortickvalues.length - gdata.xlabelexclusionsend;
      m++
    ) {
      ticklocation = xmajortickvalues[m];
      value = ticklocation;
      if (eval(gdata.xmajorgridlabelOnlyIf)) {
        var textElement = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'text'
        );

        if (isInt(ticklocation)) {
          textElement.innerHTML = ticklocation;
        } else {
          expstring = ticklocation.toExponential().toString();
          order = expstring.slice(expstring.indexOf('e') + 1) * -1;
          if (parseFloat(order) < -1) {
            ticklocation = ticklocation.toExponential(0);
          } else {
            ticklocation = ticklocation.toFixed(2);
          }
          textElement.innerHTML = ticklocation;
          if (ticklocation == 0) {
            textElement.innerHTML = 0;
          }
        }

        textElement.setAttribute(
          'x',
          graphToScaledX(ticklocation, gdata.xmin, gdata.xmax, aratio) - 1 + '%'
        );
        textElement.setAttribute(
          'y',
          graphToScaledY(labelxlocationY, gdata.ymin, gdata.ymax, aratio) +
            2 +
            gdata.xmajorgridlabelshift +
            '%'
        );
        textElement.setAttribute('id', gdata.name + '-xticklabel-' + m);
        textElement.style.fontSize = gdata.fontSize;
        textElement.style.fontFamily = 'Source Sans Pro';
        textElement.style.userSelect = 'none';
        textElement.style.fill = gdata.xmajorgridlabelcolor;

        svgElement.appendChild(textElement);

        gdata.xmajorlabelsElements.push(textElement);
      }
    }
  }

  gdata.xaxislabel = gdata.xaxislabel || 'x axis';
  gdata.yaxislabel = gdata.yaxislabel || 'y axis';

  gdata.xaxislabelshift = gdata.xaxislabelshift || 2;
  gdata.yaxislabelshift = gdata.yaxislabelshift || 2;

  if (darkmode) {
    gdata.yaxislabelcolor = gdata.yaxislabelcolor || 'hsla(190, 100%, 100%, 1)';
    gdata.xaxislabelcolor = gdata.xaxislabelcolor || 'hsla(190, 100%, 100%, 1)';
  } else {
    gdata.yaxislabelcolor = gdata.yaxislabelcolor || 'hsla(190, 0%, 0%, 1)';
    gdata.xaxislabelcolor = gdata.xaxislabelcolor || 'hsla(190, 0%, 0%, 1)';
  }

  if (gdata.xaxislabelvisibility == 'yes') {
    var textElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'text'
    );
    textElement.innerHTML = gdata.xaxislabel;
    textElement.setAttribute(
      'x',
      graphToScaledX(gdata.xmax, gdata.xmin, gdata.xmax, aratio) +
        gdata.xaxislabelshift +
        '%'
    );
    textElement.setAttribute(
      'y',
      graphToScaledY(gdata.axislocationY, gdata.ymin, gdata.ymax, aratio) +
        1 +
        '%'
    );
    textElement.setAttribute('id', name + '-xaxislabel');
    textElement.style.fontSize = gdata.fontSize;
    textElement.style.color = gdata.xaxislabelcolor;
    textElement.style.fontFamily = 'Source Sans Pro';

    svgElement.appendChild(textElement);
    gdata.xaxislabelElement = textElement;
  }

  if (gdata.yaxislabelvisibility == 'yes') {
    var textElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'text'
    );
    textElement.innerHTML = gdata.yaxislabel;
    textElement.setAttribute(
      'x',
      graphToScaledX(gdata.axislocationX, gdata.xmin, gdata.xmax, aratio) +
        0 +
        '%'
    );
    textElement.setAttribute(
      'y',
      graphToScaledY(gdata.ymax, gdata.ymin, gdata.ymax, aratio) -
        gdata.yaxislabelshift +
        '%'
    );
    textElement.setAttribute('id', name + '-yaxislabel');
    textElement.style.fontSize = gdata.fontSize;
    textElement.style.color = gdata.yaxislabelcolor;
    textElement.style.fontFamily = 'Source Sans Pro';

    svgElement.appendChild(textElement);
    gdata.yaxislabelElement = textElement;
  }

  gdata.scrollZoom = gdata.scrollZoom || 'yes';

  if (gdata.scrollZoom == 'yes') {
    svgElement.addEventListener('wheel', wheelHandle);
  }

  svgPTVariable[name] = svgElement.createSVGPoint();

  gdata.draggability = gdata.draggability || 'no';
  if (gdata.draggability == 'yes') {
    gdata.currentlyDraggableGraph = gdata.currentlyDraggableGraph || 'yes';
  } else {
    gdata.currentlyDraggableGraph = gdata.currentlyDraggableGraph || 'no';
  }
  gdata.runFunctionOnDragEnd = gdata.runFunctionOnDragEnd || '';
  gdata.runFunctionDuringDrag = gdata.runFunctionDuringDrag || '';

  if (gdata.draggability == 'yes') {
    svgElement.addEventListener('mousedown', graphDragHandle);
    svgElement.addEventListener('touchstart', graphDragHandle);
  } else {
    svgElement.addEventListener('touchmove', graphTouchDisable);
  }

  if (gdata.draggability != 'yes' && gdata.scrollZoom != 'yes') {
    svgElement.style.pointerEvents = 'none';
  }

  gdata.dragDirection = gdata.dragDirection || 'bothXY';
  gdata.dragIfCondition = gdata.dragIfCondition || 'true';

  gdata.lineData = {};
  gdata.circleData = {};
  gdata.pointData = {};
  gdata.ellipseData = {};
  gdata.rectData = {};
  gdata.textData = {};
  gdata.pathData = {};
  gdata.sliderData = {};

  gdata.aspectratio = aratio;

  graphData[name] = gdata;
  return JSON.parse(JSON.stringify(gdata));
}
