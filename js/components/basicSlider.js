function basicSlider(
  graphname2,
  slidernamebasic,
  maxv,
  minv,
  currentv,
  thickness,
  coordinates
) {
  options = {};
  options.maxvalue = maxv;
  options.minvalue = minv;
  options.currentvalue = currentv;
  options.x1 = coordinates[0][0];
  options.y1 = coordinates[0][1];
  options.x2 = coordinates[1][0];
  options.y2 = coordinates[1][1];
  options.strokewidth = thickness;
  options.automaticallySetKnobRadius = 'yes';
  addSlider(graphname2, slidernamebasic, options);
}
