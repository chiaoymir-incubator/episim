function playCalculationLoop(event) {
  loopinterval2 = setInterval(frame, calculationFrameInterval);
  function frame() {
    timecount = timecount + 1;
    if (playing) {
      handleCalculationPlaying();
    }
  }
}
