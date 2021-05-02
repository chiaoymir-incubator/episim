function drawBoundary(graphN, boundaryN, boundaryRanges, boundaryProp) {
  boundaryData[boundaryN] = {};
  boundaryData[boundaryN]['range'] = boundaryRanges;
  boundaryData[boundaryN]['center'] = [
    (boundaryRanges[0] + boundaryRanges[1]) / 2,
    (boundaryRanges[2] + boundaryRanges[3]) / 2,
  ];
  boundaryData[boundaryN]['graph'] = graphN;

  particleData[boundaryN] = {};

  options = {};
  options.points = [
    [boundaryRanges[1], boundaryRanges[3]],
    [boundaryRanges[0], boundaryRanges[3]],
    [boundaryRanges[0], boundaryRanges[2]],
    [boundaryRanges[1], boundaryRanges[2]],
    [boundaryRanges[1], boundaryRanges[3]],
  ];
  options.pathcolor = boundaryProp.color;
  options.strokewidth = 0.4;
  addPath(graphN, boundaryN, options);

  createVicinityDB(boundaryN);
}
