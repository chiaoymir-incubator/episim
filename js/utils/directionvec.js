function directionvec(pt1, pt2) {
  diff = [pt2[0] - pt1[0], pt2[1] - pt1[1]];
  difflen = distF(diff, [0, 0]);
  return [diff[0] / difflen, diff[1] / difflen];
}
