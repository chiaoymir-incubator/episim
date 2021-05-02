function linearValue(xv1, xv2, yv1, yv2, inputvl) {
  return yv1 + ((inputvl - xv1) / (xv2 - xv1)) * (yv2 - yv1);
}
