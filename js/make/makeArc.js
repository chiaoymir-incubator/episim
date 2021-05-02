function makeArc(
  arcradius,
  arcthickness,
  arccolor,
  startanglepercent,
  endanglepercent,
  ringname
) {
  resolution = 100;
  arcpoints = [];
  for (
    p = startanglepercent * resolution;
    p < endanglepercent * (resolution + 1);
    p++
  ) {
    quanta = (2 * Math.PI) / resolution;
    arcpoints.push([
      arcradius * Math.cos(quanta * p),
      arcradius * Math.sin(quanta * p),
    ]);
  }
  options = {};
  options.points = arcpoints;
  options.pathcolor = arccolor;
  options.strokewidth = arcthickness;
  addPath('ringvisualgraph', ringname, options);
  // console.log(options.points)

  return arcpoints;
}
