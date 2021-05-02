function addEllipse(graphname, ellipsename, ellipseoptions) {
  gdata = graphData[graphname];

  aratio = gdata.aspectratio;

  ellipseoptions = ellipseoptions || {};

  ellipseoptions.x = parseFloat(ellipseoptions.x.toString() || 0);
  ellipseoptions.y = parseFloat(ellipseoptions.y.toString() || 0);
  ellipseoptions.rx = parseFloat(ellipseoptions.rx.toString() || 0.3);
  ellipseoptions.ry = parseFloat(ellipseoptions.ry.toString() || 8);
  ellipseoptions.name = ellipsename || uid;

  ellipseoptions.stroke = ellipseoptions.stroke || 'hsla(190, 100%, 50%, 0.5)';
  ellipseoptions.strokewidth = ellipseoptions.strokewidth || 0.1;

  ellipseoptions.ellipsecolor =
    ellipseoptions.ellipsecolor || 'hsla(190, 100%, 50%, 1)';

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

  var ellipseElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'ellipse'
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
  return [ellipseElement, ellipseoptions];
}
