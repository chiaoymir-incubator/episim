function updatePointXY(graphname, pointname, xvalue, yvalue) {
  pointElement = document.getElementById(graphname + '-point-' + pointname);
  gdata = graphData[graphname];
  aratio = gdata.aspectratio;

  pointoptions = graphData[graphname].pointData[pointname][1];

  pointoptions.x = xvalue;
  pointoptions.y = yvalue;

  pointElement.setAttribute(
    'cx',
    graphToScaledX(pointoptions.x, gdata.xmin, gdata.xmax, aratio) + '%'
  );
  pointElement.setAttribute(
    'cy',
    graphToScaledY(pointoptions.y, gdata.ymin, gdata.ymax, aratio) + '%'
  );

  graphData[graphname].pointData[pointname] = [pointElement, pointoptions];
}
