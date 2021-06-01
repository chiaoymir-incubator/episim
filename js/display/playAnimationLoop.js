function playAnimationLoop(event) {
  
  // console.log(parameterData)
  loopinterval = setInterval(frame, frameInterval);
  function frame() {
    // console.log(simulationParameters)
    loopcount = loopcount + 1;
    if (playing) {
      handleAnimationPlaying();
    }
  }
}
