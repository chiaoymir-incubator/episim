function addPoint(graphname, pointname, pointoptions) {
  gdata = graphData[graphname];
  aratio = gdata.aspectratio;

  pointoptions = pointoptions || {};

  if (pointoptions.x != 0) {
    pointoptions.x = pointoptions.x || 0.3;
  }
  if (pointoptions.y != 0) {
    pointoptions.y = pointoptions.y || 0.3;
  }
  // pointoptions.y = pointoptions.y || 0.3
  pointoptions.pointsize = pointoptions.pointsize || 0.7;
  pointoptions.name = pointname || uid;

  pointoptions.pointcolor =
    pointoptions.pointcolor || 'hsla(190, 100%, 50%, 1)';

  var pointElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'ellipse'
  );
  pointElement.setAttribute(
    'cx',
    graphToScaledX(pointoptions.x, gdata.xmin, gdata.xmax, aratio) + '%'
  );
  pointElement.setAttribute(
    'cy',
    graphToScaledY(pointoptions.y, gdata.ymin, gdata.ymax, aratio) + '%'
  );
  pointElement.setAttribute('rx', pointoptions.pointsize + '%');
  pointElement.setAttribute('ry', pointoptions.pointsize + '%');
  pointElement.setAttribute('id', graphname + '-point-' + pointname);
  uid = uid + 1;
  pointElement.setAttribute('vector-effect', 'non-scaling-stroke');
  pointElement.style.fill = pointoptions.pointcolor;
  gdata.svgElement.appendChild(pointElement);

  pointoptions.draggability = pointoptions.draggability || 'no';
  if (pointoptions.draggability == 'yes') {
    pointoptions.currentlyDraggable = pointoptions.currentlyDraggable || 'yes';
  } else {
    pointoptions.currentlyDraggable = pointoptions.currentlyDraggable || 'no';
  }
  pointoptions.runFunctionOnDragEnd = pointoptions.runFunctionOnDragEnd || '';
  pointoptions.runFunctionDuringDrag = pointoptions.runFunctionDuringDrag || '';

  if (pointoptions.draggability == 'yes') {
    pointElement.addEventListener('mousedown', pointDrag);
    pointElement.addEventListener('touchstart', pointDrag);
    gdata.svgElement.addEventListener('touchmove', graphTouchDisable);
  } else {
    pointElement.style.pointerEvents = 'none';
  }

  pointoptions.dragDirection = pointoptions.dragDirection || 'bothXY';
  pointoptions.dragIfCondition = pointoptions.dragIfCondition || 'true';

  graphData[graphname].pointData[pointname] = [pointElement, pointoptions];
  reverseGraphElementMap[pointElement.id] = [graphname, pointname];
  return [pointElement, pointoptions];
}
