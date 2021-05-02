function pointDrag(event) {
  gphname = reverseGraphElementMap[event.target.id][0];
  ptname = reverseGraphElementMap[event.target.id][1];
  if (graphData[gphname].pointData[ptname][1].currentlyDraggable == 'yes') {
    if (graphData[gphname].currentlyDraggableGraph == 'yes') {
      document
        .getElementById(gphname)
        .removeEventListener('mousedown', graphDragHandle);
      document
        .getElementById(gphname)
        .removeEventListener('touchstart', graphDragHandle);
    }
    event.target.removeEventListener('mousedown', pointDrag);
    event.target.removeEventListener('touchstart', pointDrag);
    window.addEventListener('mousemove', pointMoveEvent);
    window.addEventListener('mouseup', pointUpEvent);
    event.preventDefault();
    window.addEventListener('touchmove', pointMoveEvent, { passive: false });
    window.addEventListener('touchend', pointUpEvent);
    // window.addEventListener('mouseout', pointUpEvent)
    currentMovingPoint = event.target;
  }
}
