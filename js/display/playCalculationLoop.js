function playCalculationLoop(event) {

  loopinterval2 = setInterval(frame, calculationFrameInterval);
  function frame() {
    timecount = timecount + 1;
    if (playing) {
      // simulationParameters
      if (particleDataArr.infected.length > 10){
        // simulationParameters.infectionRadius = 0.5
      }
      // console.log(particleDataArr.infected.length)
      handleCalculationPlaying();
    }
  }
}
