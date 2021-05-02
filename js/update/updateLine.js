function updateLine(graphname, linename, linevalues) {
  gdata = graphData[graphname];
  aratio = gdata.aspectratio;

  lineoptions = gdata.lineData[linename][1];
  lineElement = gdata.lineData[linename][0];

  if (linevalues.x1 != 0) {
    lineoptions.x1 = linevalues.x1 || lineoptions.x1;
  } else {
    lineoptions.x1 = linevalues.x1;
  }

  if (linevalues.y1 != 0) {
    lineoptions.y1 = linevalues.y1 || lineoptions.y1;
  } else {
    lineoptions.y1 = linevalues.y1;
  }

  if (linevalues.x2 != 0) {
    lineoptions.x2 = linevalues.x2 || lineoptions.x2;
  } else {
    lineoptions.x2 = linevalues.x2;
  }

  if (linevalues.y2 != 0) {
    lineoptions.y2 = linevalues.y2 || lineoptions.y2;
  } else {
    lineoptions.y2 = linevalues.y2;
  }

  lineoptions.strokedasharray =
    linevalues.strokedasharray || lineoptions.strokedasharray;
  lineoptions.strokewidth = linevalues.strokewidth || lineoptions.strokewidth;
  lineoptions.linecolor = linevalues.linecolor || lineoptions.linecolor;

  lineElement.setAttribute(
    'x1',
    graphToScaledX(lineoptions.x1, gdata.xmin, gdata.xmax, aratio) + '%'
  );
  lineElement.setAttribute(
    'y1',
    graphToScaledY(lineoptions.y1, gdata.ymin, gdata.ymax, aratio) + '%'
  );
  lineElement.setAttribute(
    'x2',
    graphToScaledX(lineoptions.x2, gdata.xmin, gdata.xmax, aratio) + '%'
  );
  lineElement.setAttribute(
    'y2',
    graphToScaledY(lineoptions.y2, gdata.ymin, gdata.ymax, aratio) + '%'
  );

  lineElement.setAttribute('stroke-dasharray', lineoptions.strokedasharray);
  lineElement.style.stroke = lineoptions.linecolor;
  lineElement.style.strokeWidth = lineoptions.strokewidth + '%';

  graphData[graphname].lineData[linename] = [lineElement, lineoptions];
}
