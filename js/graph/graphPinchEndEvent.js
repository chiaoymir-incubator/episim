function graphPinchEndEvent(event) {
  pinchZoom = false;
  window.removeEventListener('touchmove', graphPinchMoveEvent);
  window.removeEventListener('touchend', graphPinchEndEvent);
}
