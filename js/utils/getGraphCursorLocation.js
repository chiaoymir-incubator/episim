function getGraphCursorLocation(cursorpercent, graphname) {
  gdata = graphData[graphname];

  graphEl = document.getElementById(gdata.name);

  valx = svgToGraphX(
    cursorpercent[0],
    gdata.xmin,
    gdata.xmax,
    gdata.aspectratio
  );
  valy = svgToGraphY(
    cursorpercent[1],
    gdata.ymin,
    gdata.ymax,
    gdata.aspectratio
  );

  return [valx, valy];
}
