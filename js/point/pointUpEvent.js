function pointUpEvent(event) {
  gphname = reverseGraphElementMap[currentMovingPoint.id][0];
  ptname = reverseGraphElementMap[currentMovingPoint.id][1];
  if (graphData[gphname].currentlyDraggableGraph == 'yes') {
    document
      .getElementById(gphname)
      .addEventListener('mousedown', graphDragHandle);
    document
      .getElementById(gphname)
      .addEventListener('touchstart', graphDragHandle);
  }
  currentMovingPoint.addEventListener('mousedown', pointDrag);
  currentMovingPoint.addEventListener('touchstart', pointDrag);
  window.removeEventListener('mousemove', pointMoveEvent);
  window.removeEventListener('mouseup', pointUpEvent);
  window.removeEventListener('touchmove', pointMoveEvent);
  window.removeEventListener('touchend', pointUpEvent);

  // window.removeEventListener('mouseout', pointUpEvent)
  eval(graphData[gphname].pointData[ptname][1].runFunctionOnDragEnd);
}
