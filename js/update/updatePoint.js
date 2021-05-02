function updatePoint(graphname, pointname, newpointoptions) {
  gdata = graphData[graphname];
  pointoptions = gdata.pointData[pointname][1];
  pointElement = gdata.pointData[pointname][0];
  aratio = gdata.aspectratio;

  if (pointoptions.x != 0) {
    pointoptions.x = newpointoptions.x || pointoptions.x;
  }
  if (pointoptions.y != 0) {
    pointoptions.y = newpointoptions.x || pointoptions.y;
  }
  // pointoptions.y = pointoptions.y || 0.3
  pointoptions.pointsize = newpointoptions.pointsize || pointoptions.pointsize;

  pointoptions.pointcolor =
    newpointoptions.pointcolor || pointoptions.pointcolor;

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
  pointElement.setAttribute('vector-effect', 'non-scaling-stroke');
  pointElement.style.fill = pointoptions.pointcolor;

  pointoptions.draggability = newpointoptions.draggability || 'no';
  if (pointoptions.draggability == 'yes') {
    pointoptions.currentlyDraggable =
      newpointoptions.currentlyDraggable || 'yes';
  } else {
    pointoptions.currentlyDraggable =
      newpointoptions.currentlyDraggable || 'no';
  }
  pointoptions.runFunctionOnDragEnd =
    newpointoptions.runFunctionOnDragEnd || '';
  pointoptions.runFunctionDuringDrag =
    newpointoptions.runFunctionDuringDrag || '';
  pointoptions.dragDirection = newpointoptions.dragDirection || 'bothXY';
  pointoptions.dragIfCondition = newpointoptions.dragIfCondition || '';

  if (pointoptions.draggability == 'yes') {
    pointElement.addEventListener('mousedown', pointDrag);
    pointElement.addEventListener('touchstart', pointDrag);
  } else {
    pointElement.removeEventListener('mousedown', pointDrag);
    pointElement.removeEventListener('touchstart', pointDrag);
  }

  graphData[graphname].pointData[pointname] = [pointElement, pointoptions];
}
