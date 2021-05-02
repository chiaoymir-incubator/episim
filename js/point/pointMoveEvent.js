function pointMoveEvent(event) {
  event.preventDefault();
  gphname = reverseGraphElementMap[currentMovingPoint.id][0];
  ptname = reverseGraphElementMap[currentMovingPoint.id][1];
  var rect = document.getElementById(gphname).getBoundingClientRect();
  posx = event.clientX - rect.left;
  posy = event.clientY - rect.top;
  svgPTVariable[gphname].x = event.clientX;
  svgPTVariable[gphname].y = event.clientY;

  if (event.clientX == undefined) {
    posx = event.changedTouches[0].clientX - rect.left;
    posy = event.changedTouches[0].clientY - rect.top;
    svgPTVariable[gphname].x = event.changedTouches[0].clientX;
    svgPTVariable[gphname].y = event.changedTouches[0].clientY;
  }

  var cursorpt = svgPTVariable[gphname].matrixTransform(
    document.getElementById(gphname).getScreenCTM().inverse()
  );

  moveX = svgToGraphX(
    cursorpt.x,
    graphData[gphname].xmin,
    graphData[gphname].xmax,
    graphData[gphname].aspectratio
  );
  moveY = svgToGraphY(
    cursorpt.y,
    graphData[gphname].ymin,
    graphData[gphname].ymax,
    graphData[gphname].aspectratio
  );

  if (
    typeof eval(graphData[gphname].pointData[ptname][1].dragIfCondition) !=
    undefined
  ) {
    if (eval(graphData[gphname].pointData[ptname][1].dragIfCondition) == true) {
      if (graphData[gphname].pointData[ptname][1].dragDirection == 'bothXY') {
        updatePointXY(gphname, ptname, moveX, moveY);
        eval(graphData[gphname].pointData[ptname][1].runFunctionDuringDrag);
      } else if (
        graphData[gphname].pointData[ptname][1].dragDirection == 'onlyY'
      ) {
        updatePointXY(
          gphname,
          ptname,
          graphData[gphname].pointData[ptname][1].x,
          moveY
        );
        eval(graphData[gphname].pointData[ptname][1].runFunctionDuringDrag);
      } else if (
        graphData[gphname].pointData[ptname][1].dragDirection == 'onlyX'
      ) {
        updatePointXY(
          gphname,
          ptname,
          moveX,
          graphData[gphname].pointData[ptname][1].y
        );
        eval(graphData[gphname].pointData[ptname][1].runFunctionDuringDrag);
      }
    }
  }
}
