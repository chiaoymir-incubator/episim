function addRectangle(graphname, rectname, rectoptions) {
  gdata = graphData[graphname];
  aratio = gdata.aspectratio;
  rectoptions = rectoptions || {};

  rectoptions.x = parseFloat(rectoptions.x.toString() || 0);
  rectoptions.y = parseFloat(rectoptions.y.toString() || 0);
  rectoptions.w = parseFloat(rectoptions.w.toString() || 1);
  rectoptions.h = parseFloat(rectoptions.h.toString() || 1);
  rectoptions.name = rectname || uid;

  rectoptions.stroke = rectoptions.stroke || 'hsla(190, 100%, 50%, 0.5)';
  rectoptions.strokewidth = rectoptions.strokewidth || 0.1;
  rectoptions.strokedasharray = rectoptions.strokedasharray || '';

  rectoptions.rectcolor = rectoptions.rectcolor || 'hsla(190, 100%, 50%, 1)';

  rx = distanceBTWgraphToSvg(
    [0, 0],
    [rectoptions.w, 0],
    gdata.xmin,
    gdata.xmax,
    gdata.ymin,
    gdata.ymax,
    aratio
  );
  ry = distanceBTWgraphToSvg(
    [0, 0],
    [0, rectoptions.h],
    gdata.xmin,
    gdata.xmax,
    gdata.ymin,
    gdata.ymax,
    aratio
  );

  var rectElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'rect'
  );
  rectElement.setAttribute(
    'x',
    graphToScaledX(rectoptions.x, gdata.xmin, gdata.xmax, aratio) + '%'
  );
  rectElement.setAttribute(
    'y',
    graphToScaledY(rectoptions.y, gdata.ymin, gdata.ymax, aratio) + '%'
  );
  rectElement.setAttribute('width', rx + '%');
  rectElement.setAttribute('height', ry + '%');
  rectElement.setAttribute('id', graphname + '-rect-' + rectname);
  uid = uid + 1;
  rectElement.setAttribute('vector-effect', 'non-scaling-stroke');
  rectElement.style.fill = rectoptions.rectcolor;
  rectElement.style.strokeWidth = rectoptions.strokewidth + '%';
  rectElement.style.stroke = rectoptions.stroke;
  rectElement.setAttribute('stroke-dasharray', rectoptions.strokedasharray);

  gdata.svgElement.appendChild(rectElement);

  graphData[graphname].rectData[rectname] = [rectElement, rectoptions];

  return [rectElement, rectoptions];
}
