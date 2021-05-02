function getParticleVicinityN(particle_pos, forBoundary) {
  bdranges = boundaryData[forBoundary]['range'];
  xbreaks = boundaryData[forBoundary]['xbreaks'];
  ybreaks = boundaryData[forBoundary]['ybreaks'];
  i = parseInt(
    ((particle_pos[0] - bdranges[0]) * xbreaks) / (bdranges[1] - bdranges[0])
  );
  j = parseInt(
    ((particle_pos[1] - bdranges[2]) * ybreaks) / (bdranges[3] - bdranges[2])
  );

  return [i, j];
}
