function updatePathPoints(graphname, pathname, npathpoints) {
  gdata = graphData[graphname];
  aratio = gdata.aspectratio;

  pathoptions = gdata.pathData[pathname][1];
  pathElement = gdata.pathData[pathname][0];

  pathoptions.points = npathpoints || pathoptions.points;

  if (pathoptions.points.length > 0) {
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
      graphData[graphname].pathData[pathname] = [pathElement, pathoptions];
      return [pathElement, pathoptions];
    } catch (err) {
      console.log(npathpoints);
    }
  }
}
