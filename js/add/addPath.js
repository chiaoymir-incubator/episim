function addPath(graphname, pathname, pathoptions) {
  gdata = graphData[graphname];
  pathoptions = pathoptions || {};

  aratio = gdata.aspectratio;

  pathoptions.points = pathoptions.points || [
    [0, 1],
    [1, 0],
  ];

  pathstring = 'M';

  for (pth = 0; pth < pathoptions.points.length; pth++) {
    if (pth == 0) {
      pathstring =
        pathstring +
        graphToScaledX(
          pathoptions.points[pth][0],
          gdata.xmin,
          gdata.xmax,
          aratio
        ) +
        ' ' +
        graphToScaledY(
          pathoptions.points[pth][1],
          gdata.ymin,
          gdata.ymax,
          aratio
        ) +
        ' ';
    } else {
      pathstring =
        pathstring +
        'L' +
        graphToScaledX(
          pathoptions.points[pth][0],
          gdata.xmin,
          gdata.xmax,
          aratio
        ) +
        ' ' +
        graphToScaledY(
          pathoptions.points[pth][1],
          gdata.ymin,
          gdata.ymax,
          aratio
        ) +
        ' ';
    }
  }

  pathoptions.name = pathname || uid;
  // console.log((0).toString() || 0.5)

  pathoptions.strokewidth = pathoptions.strokewidth || 1;
  pathoptions.pathcolor = pathoptions.pathcolor || 'hsla(190, 100%, 50%, 1)';

  var pathElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  try {
    pathElement.setAttribute('d', pathstring);
    pathElement.setAttribute('id', graphname + '-path-' + pathname);
    uid = uid + 1;
    pathElement.style.stroke = pathoptions.pathcolor;
    pathElement.style.fill = 'none';
    pathElement.style.strokeWidth = pathoptions.strokewidth + '%';
    gdata.svgElement.appendChild(pathElement);

    graphData[graphname].pathData[pathname] = [pathElement, pathoptions];
    return [pathElement, pathoptions];
  } catch (err) {
    console.log(pathoptions.points);
  }
}
