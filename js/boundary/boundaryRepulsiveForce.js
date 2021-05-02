function boundaryRepulsiveForce(
  particle_location,
  boundaryN,
  forceConstant,
  minimumDistanceForForce
) {
  boundaryRanges = boundaryData[boundaryN]['range'];
  xBoundaryForce = 0;
  yBoundaryForce = 0;
  if (
    Math.abs(particle_location[0] - boundaryRanges[0]) < minimumDistanceForForce
  ) {
    xBoundaryForce =
      (forceConstant * (particle_location[0] - boundaryRanges[0])) /
      Math.abs(particle_location[0] - boundaryRanges[0]);
  } else if (
    Math.abs(particle_location[0] - boundaryRanges[1]) < minimumDistanceForForce
  ) {
    xBoundaryForce =
      (forceConstant * (particle_location[0] - boundaryRanges[1])) /
      Math.abs(boundaryRanges[1] - particle_location[0]);
  }
  if (
    Math.abs(particle_location[1] - boundaryRanges[2]) < minimumDistanceForForce
  ) {
    yBoundaryForce =
      (forceConstant * (particle_location[1] - boundaryRanges[2])) /
      Math.abs(particle_location[1] - boundaryRanges[2]);
  } else if (
    Math.abs(particle_location[1] - boundaryRanges[3]) < minimumDistanceForForce
  ) {
    yBoundaryForce =
      (forceConstant * (particle_location[1] - boundaryRanges[3])) /
      Math.abs(boundaryRanges[3] - particle_location[1]);
  }

  return [xBoundaryForce, yBoundaryForce];
}
