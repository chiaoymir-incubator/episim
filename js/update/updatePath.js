function updatePath(graphname, pathname, newpathoptions) {
  gdata = graphData[graphname];
  aratio = gdata.aspectratio;

  pathoptions = gdata.pathData[pathname][1];
  pathElement = gdata.pathData[pathname][0];

  pathoptions.points = newpathoptions.points || pathoptions.points;

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

  try {
    pathElement.setAttribute('d', pathstring);
    pathoptions.strokewidth =
      newpathoptions.strokewidth || pathoptions.strokewidth;
    pathoptions.pathcolor = newpathoptions.pathcolor || pathoptions.pathcolor;

    pathElement.style.stroke = pathoptions.pathcolor;
    pathElement.style.fill = 'none';
    pathElement.style.strokeWidth = pathoptions.strokewidth + '%';

    graphData[graphname].pathData[pathname] = [pathElement, pathoptions];
  } catch (err) {
    console.log(newpathoptions.points);
  }
}
