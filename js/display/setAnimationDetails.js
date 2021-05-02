function setAnimationDetails() {
  frameInterval = 1000 / simulationParameters.frameRate;

  calculationFrameInterval =
    (simulationParameters.frameRate /
      (timeStepsPerDay * simulationParameters.daysEverySecond)) *
    frameInterval;
}
