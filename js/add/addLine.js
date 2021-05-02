function addLine(graphname, linename, lineoptions) {
  gdata = graphData[graphname];
  lineoptions = lineoptions || {};

  aratio = gdata.aspectratio;

  lineoptions.x1 = parseFloat(lineoptions.x1.toString() || 0);
  lineoptions.y1 = parseFloat(lineoptions.y1.toString() || 0);
  lineoptions.x2 = parseFloat(lineoptions.x2.toString() || 0.5);
  lineoptions.y2 = parseFloat(lineoptions.y2.toString() || 0.5);
  lineoptions.name = linename || uid;

  lineoptions.strokedasharray = lineoptions.strokedasharray || '';
  lineoptions.strokewidth = lineoptions.strokewidth || 1;
  lineoptions.linecolor = lineoptions.linecolor || 'hsla(190, 100%, 50%, 1)';

  var lineElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'line'
  );
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

  lineElement.setAttribute('id', graphname + '-line-' + linename);
  uid = uid + 1;
  lineElement.setAttribute('vector-effect', 'non-scaling-stroke');
  lineElement.style.stroke = lineoptions.linecolor;
  lineElement.style.strokeWidth = lineoptions.strokewidth + '%';
  gdata.svgElement.appendChild(lineElement);

  graphData[graphname].lineData[linename] = [lineElement, lineoptions];
  return [lineElement, lineoptions];
}
