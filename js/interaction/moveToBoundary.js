function moveToBoundary(toBoundary, fromBoundary, particleIndexDetail, moveIn) {
  particleData[toBoundary][particleIndexDetail] = JSON.parse(
    JSON.stringify(particleData[fromBoundary][particleIndexDetail])
  );

  delete particleData[fromBoundary][particleIndexDetail];

  particleData[toBoundary][particleIndexDetail].moveAnimation = true;
  particleData[toBoundary][particleIndexDetail].moveAnimationFrom = [
    particleData[toBoundary][particleIndexDetail].x,
    particleData[toBoundary][particleIndexDetail].y,
  ];
  particleData[toBoundary][particleIndexDetail].moveAnimationTo =
    boundaryData[toBoundary]['center'];
  particleData[toBoundary][particleIndexDetail].moveAnimationFrame = 0;
  particleData[toBoundary][particleIndexDetail].moveAnimationTime = moveIn;

  prepInteractionData(toBoundary);
  prepInteractionData(fromBoundary);
}
