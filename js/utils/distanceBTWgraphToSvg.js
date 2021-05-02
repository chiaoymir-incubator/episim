function distanceBTWgraphToSvg(p1, p2, xmin, xmax, ymin, ymax, aspectratio) {
  pt1 = [
    graphToScaledX(p1[0], xmin, xmax, aspectratio),
    graphToScaledY(p1[1], ymin, ymax, aspectratio),
  ];
  pt2 = [
    graphToScaledX(p2[0], xmin, xmax, aspectratio),
    graphToScaledY(p2[1], ymin, ymax, aspectratio),
  ];

  return Math.pow(
    Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2),
    0.5
  );
}

function addCircle(graphname, circlename, circleoptions) {
  gdata = graphData[graphname];
  circleoptions = circleoptions || {};
  aratio = gdata.aspectratio;

  if (circleoptions.x != 0) {
    circleoptions.x = circleoptions.x || 0.3;
  } else {
    circleoptions.x = 0;
  }

  if (circleoptions.y != 0) {
    circleoptions.y = circleoptions.y || 0.3;
  } else {
    circleoptions.y = 0;
  }

  if (circleoptions.radius != 0) {
    circleoptions.radius = circleoptions.radius || 0.3;
  } else {
    circleoptions.radius = 0;
  }

  circleoptions.name = circlename || uid;

  circleoptions.stroke = circleoptions.stroke || 'hsla(190, 100%, 50%, 0.5)';
  circleoptions.strokewidth = circleoptions.strokewidth || 0.1;

  circleoptions.circlecolor =
    circleoptions.circlecolor || 'hsla(190, 100%, 50%, 1)';

  rx = distanceBTWgraphToSvg(
    [0, 0],
    [circleoptions.radius, 0],
    gdata.xmin,
    gdata.xmax,
    gdata.ymin,
    gdata.ymax,
    aratio
  );
  ry = distanceBTWgraphToSvg(
    [0, 0],
    [0, circleoptions.radius],
    gdata.xmin,
    gdata.xmax,
    gdata.ymin,
    gdata.ymax,
    aratio
  );

  var circleElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'ellipse'
  );
  circleElement.setAttribute(
    'cx',
    graphToScaledX(circleoptions.x, gdata.xmin, gdata.xmax, aratio) + '%'
  );
  circleElement.setAttribute(
    'cy',
    graphToScaledY(circleoptions.y, gdata.ymin, gdata.ymax, aratio) + '%'
  );
  circleElement.setAttribute('rx', rx + '%');
  circleElement.setAttribute('ry', ry + '%');
  circleElement.setAttribute('id', graphname + '-circle-' + circlename);
  uid = uid + 1;
  circleElement.setAttribute('vector-effect', 'non-scaling-stroke');
  circleElement.style.fill = circleoptions.circlecolor;
  circleElement.style.strokeWidth = circleoptions.strokewidth + '%';
  circleElement.style.stroke = circleoptions.stroke;
  circleElement.setAttribute('stroke-dasharray', circleoptions.strokedasharray);
  gdata.svgElement.appendChild(circleElement);

  graphData[graphname].circleData[circlename] = [circleElement, circleoptions];
  return [circleElement, circleoptions];
}
