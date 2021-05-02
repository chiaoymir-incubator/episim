function updateCircle(graphname, circlename, circlenewvalues) {
  gdata = graphData[graphname];
  aratio = gdata.aspectratio;

  circleoptions = gdata.circleData[circlename][1];
  circleElement = gdata.circleData[circlename][0];

  if (circleoptions.x != 0) {
    circleoptions.x = circlenewvalues.x || circleoptions.x;
  } else {
    circleoptions.x = circlenewvalues.x;
  }

  if (circleoptions.y != 0) {
    circleoptions.y = circlenewvalues.y || circleoptions.y;
  } else {
    circleoptions.y = circlenewvalues.y;
  }

  if (circleoptions.radius != 0) {
    circleoptions.radius = circlenewvalues.radius || circleoptions.radius;
  } else {
    circleoptions.radius = circlenewvalues.radius;
  }

  circleoptions.name = circlename || uid;

  circleoptions.stroke = circlenewvalues.stroke || circleoptions.stroke;
  circleoptions.strokewidth =
    circlenewvalues.strokewidth || circleoptions.strokewidth;

  circleoptions.circlecolor =
    circlenewvalues.circlecolor || circleoptions.circlecolor;

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

  graphData[graphname].circleData[circlename] = [circleElement, circleoptions];
}
