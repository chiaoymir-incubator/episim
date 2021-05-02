function clientToGraph(clientValues, graphNameInput) {
  svgPTVariable[graphNameInput].x = clientValues[0];
  svgPTVariable[graphNameInput].y = clientValues[1];

  var cursorpt = svgPTVariable[gphname].matrixTransform(
    document.getElementById(gphname).getScreenCTM().inverse()
  );

  return [
    svgToGraphX(
      cursorpt.x,
      graphData[gphname].xmin,
      graphData[gphname].xmax,
      graphData[gphname].aspectratio
    ),
    svgToGraphY(
      cursorpt.y,
      graphData[gphname].ymin,
      graphData[gphname].ymax,
      graphData[gphname].aspectratio
    ),
  ];
}
