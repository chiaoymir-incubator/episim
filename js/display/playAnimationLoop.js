function playAnimationLoop(event) {
  loopinterval = setInterval(frame, frameInterval);
  function frame() {
    loopcount = loopcount + 1;
    if (playing) {
      handleAnimationPlaying();
    }
  }
}
