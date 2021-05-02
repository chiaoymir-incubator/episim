function graphDragUpEvent(event) {
  gphname = currentMovingGraph.id;

  currentMovingGraph.addEventListener('mousedown', graphDragHandle);
  currentMovingGraph.addEventListener('touchstart', graphDragHandle);
  window.removeEventListener('mousemove', graphDragMoveEvent);
  window.removeEventListener('mouseup', graphDragUpEvent);
  window.removeEventListener('touchmove', graphDragMoveEvent);
  window.removeEventListener('touchend', graphDragUpEvent);

  // window.removeEventListener('mouseout', pointUpEvent)
  eval(graphData[gphname].runFunctionOnDragEnd);

  currentMovingGraph.style.cursor = 'auto';
}
