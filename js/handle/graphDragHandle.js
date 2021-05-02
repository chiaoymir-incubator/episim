function graphDragHandle(event) {
  event.preventDefault();
  gphname = event.target.id.split('-')[0];
  if (graphData[gphname].currentlyDraggableGraph == 'yes') {
    graphData[gphname].svgElement.removeEventListener(
      'mousedown',
      graphDragHandle
    );
    graphData[gphname].svgElement.removeEventListener(
      'touchstart',
      graphDragHandle
    );
    window.addEventListener('mousemove', graphDragMoveEvent);
    window.addEventListener('mouseup', graphDragUpEvent);
    event.preventDefault();
    window.addEventListener('touchmove', graphDragMoveEvent, {
      passive: false,
    });
    window.addEventListener('touchend', graphDragUpEvent);
    // window.addEventListener('mouseout', pointUpEvent)
    currentMovingGraph = graphData[gphname].svgElement;

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

    tapX = svgToGraphX(
      cursorpt.x,
      graphData[gphname].xmin,
      graphData[gphname].xmax,
      graphData[gphname].aspectratio
    );
    tapY = svgToGraphY(
      cursorpt.y,
      graphData[gphname].ymin,
      graphData[gphname].ymax,
      graphData[gphname].aspectratio
    );

    currentMovingGraphStartLocation = [tapX, tapY];
    currentMovingGraphOriginalBounds = [
      graphData[gphname].xmin,
      graphData[gphname].xmax,
      graphData[gphname].ymin,
      graphData[gphname].ymax,
    ];

    currentMovingGraph.style.cursor = 'move';
  }
}
