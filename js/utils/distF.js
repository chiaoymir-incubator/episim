function distF(pt1, pt2) {
  return Math.pow(
    Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2),
    0.5
  );
}
