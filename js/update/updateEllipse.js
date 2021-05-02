function updateEllipse(graphname, ellipsename, ellipsenewvalues) {
  gdata = graphData[graphname];
  aratio = gdata.aspectratio;

  ellipseoptions = gdata.ellipseData[ellipsename][1];
  ellipseElement = gdata.ellipseData[ellipsename][0];

  if (ellipseoptions.x != 0) {
    ellipseoptions.x = ellipsenewvalues.x || ellipseoptions.x;
  } else {
    ellipseoptions.x = 0;
  }

  if (ellipseoptions.y != 0) {
    ellipseoptions.y = ellipsenewvalues.y || ellipseoptions.y;
  } else {
    ellipseoptions.y = 0;
  }

  if (ellipseoptions.rx != 0) {
    ellipseoptions.rx = ellipsenewvalues.rx || ellipseoptions.rx;
  } else {
    ellipseoptions.rx = 0;
  }
  if (ellipseoptions.ry != 0) {
    ellipseoptions.ry = ellipsenewvalues.ry || ellipseoptions.ry;
  } else {
    ellipseoptions.ry = 0;
  }

  ellipseoptions.name = ellipsename || uid;

  ellipseoptions.stroke = ellipsenewvalues.stroke || ellipseoptions.stroke;
  ellipseoptions.strokewidth =
    ellipsenewvalues.strokewidth || ellipseoptions.strokewidth;

  ellipseoptions.ellipsecolor =
    ellipsenewvalues.ellipsecolor || ellipseoptions.ellipsecolor;

  rx = distanceBTWgraphToSvg(
    [0, 0],
    [ellipseoptions.rx, 0],
    gdata.xmin,
    gdata.xmax,
    gdata.ymin,
    gdata.ymax,
    aratio
  );
  ry = distanceBTWgraphToSvg(
    [0, 0],
    [0, ellipseoptions.ry],
    gdata.xmin,
    gdata.xmax,
    gdata.ymin,
    gdata.ymax,
    aratio
  );

  ellipseElement.setAttribute(
    'cx',
    graphToScaledX(ellipseoptions.x, gdata.xmin, gdata.xmax, aratio) + '%'
  );
  ellipseElement.setAttribute(
    'cy',
    graphToScaledY(ellipseoptions.y, gdata.ymin, gdata.ymax, aratio) + '%'
  );
  ellipseElement.setAttribute('rx', rx + '%');
  ellipseElement.setAttribute('ry', ry + '%');
  ellipseElement.setAttribute('id', graphname + '-ellipse-' + ellipsename);
  uid = uid + 1;
  ellipseElement.setAttribute('vector-effect', 'non-scaling-stroke');
  ellipseElement.style.fill = ellipseoptions.ellipsecolor;
  ellipseElement.style.strokeWidth = ellipseoptions.strokewidth + '%';
  ellipseElement.style.stroke = ellipseoptions.stroke;
  gdata.svgElement.appendChild(ellipseElement);

  graphData[graphname].ellipseData[ellipsename] = [
    ellipseElement,
    ellipseoptions,
  ];
}
