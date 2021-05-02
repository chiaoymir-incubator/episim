function graphDragMoveEvent(event) {
  event.preventDefault();
  gphname = currentMovingGraph.id;
  var rect = document.getElementById(gphname).getBoundingClientRect();
  posx = event.clientX - rect.left;
  posy = event.clientY - rect.top;
  svgPTVariable[gphname].x = event.clientX;
  svgPTVariable[gphname].y = event.clientY;

  touchEventDetect = 0;

  if (event.clientX == undefined) {
    posx = event.changedTouches[0].clientX - rect.left;
    posy = event.changedTouches[0].clientY - rect.top;
    svgPTVariable[gphname].x = event.changedTouches[0].clientX;
    svgPTVariable[gphname].y = event.changedTouches[0].clientY;

    if (event.changedTouches.length == 2) {
      oldtouch1 = [
        event.changedTouches[0].clientX,
        event.changedTouches[0].clientY,
      ];
      oldtouch2 = [
        event.changedTouches[1].clientX,
        event.changedTouches[1].clientY,
      ];
      pinchStartData = [oldtouch1, oldtouch2];
      dummyEve = {};
      pinchZoom = true;
      graphDragUpEvent(dummyEve);
      window.addEventListener('touchmove', graphPinchMoveEvent);
      window.addEventListener('touchend', graphPinchEndEvent);
    }

    touchEventDetect = event.changedTouches[0].identifier;
  }

  if (pinchZoom == false && touchEventDetect == 0) {
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

    deltaVecX = moveX - currentMovingGraphStartLocation[0];
    deltaVecY = moveY - currentMovingGraphStartLocation[1];
    currentvalues = graphData[gphname];

    newZXmin = currentvalues.xmin - deltaVecX;
    newZXmax = currentvalues.xmax - deltaVecX;
    newZYmin = currentvalues.ymin - deltaVecY;
    newZYmax = currentvalues.ymax - deltaVecY;

    if (typeof eval(graphData[gphname].dragIfCondition) != undefined) {
      if (eval(graphData[gphname].dragIfCondition) == true) {
        if (graphData[gphname].dragDirection == 'bothXY') {
          options = {};
          options.xmin = newZXmin;
          options.xmax = newZXmax;
          options.ymin = newZYmin;
          options.ymax = newZYmax;
          updateGraphZoom(gphname, options);
          eval(graphData[gphname].runFunctionDuringDrag);
        } else if (graphData[gphname].dragDirection == 'onlyY') {
          options = {};
          options.ymin = newZYmin;
          options.ymax = newZYmax;
          updateGraphZoom(gphname, options);
          eval(graphData[gphname].runFunctionDuringDrag);
        } else if (graphData[gphname].dragDirection == 'onlyX') {
          options = {};
          options.xmin = newZXmin;
          options.xmax = newZXmax;
          updateGraphZoom(gphname, options);
          eval(graphData[gphname].runFunctionDuringDrag);
        }
      }
    }
  }
}
