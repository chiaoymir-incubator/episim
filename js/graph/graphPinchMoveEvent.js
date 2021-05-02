function graphPinchMoveEvent(event) {
  if (event.changedTouches.length == 2) {
    gphname = event.target.id.split('-')[0];
    touch1 = [event.changedTouches[0].clientX, event.changedTouches[0].clientY];
    touch2 = [event.changedTouches[1].clientX, event.changedTouches[1].clientY];

    touch1 = clientToGraph(touch1, gphname);
    touch2 = clientToGraph(touch2, gphname);

    oldtouch1 = clientToGraph(pinchStartData[0], gphname);
    oldtouch2 = clientToGraph(pinchStartData[1], gphname);

    pinchScale = distF(oldtouch1, oldtouch2) / distF(touch1, touch2);
    pinchStartMidpoint = [
      (oldtouch1[0] + oldtouch2[0]) / 2,
      (oldtouch1[1] + oldtouch2[1]) / 2,
    ];

    zoomlocationX = pinchStartMidpoint[0];
    zoomlocationY = pinchStartMidpoint[1];

    gdata = graphData[gphname];

    scale = gdata.ymax - gdata.ymin;
    expstring = scale.toExponential().toString();
    ordery = expstring.slice(expstring.indexOf('e') + 1) * -1;
    // console.log(ordery)

    scale = gdata.xmax - gdata.xmin;
    expstring = scale.toExponential().toString();
    orderx = expstring.slice(expstring.indexOf('e') + 1) * -1;
    // console.log(orderx)

    currentvalues = graphData[gphname];

    scaleFactorForTouch = 1;
    if (pinchScale <= 1) {
      scaleFactorForTouch = linearValue(0, 1, 0.9, 1, pinchScale);
    } else {
      scaleFactorForTouch = linearValue(1, 5, 1, 1.1, pinchScale);
    }

    leftX = (zoomlocationX - currentvalues.xmin) * scaleFactorForTouch;
    newZXmin = zoomlocationX - leftX;
    rightX = (currentvalues.xmax - zoomlocationX) * scaleFactorForTouch;
    newZXmax = zoomlocationX + rightX;
    leftY = (zoomlocationY - currentvalues.ymin) * scaleFactorForTouch;
    newZYmin = zoomlocationY - leftY;
    rightY = (currentvalues.ymax - zoomlocationY) * scaleFactorForTouch;
    newZYmax = zoomlocationY + rightY;

    options = {};
    options.xmin = newZXmin;
    options.xmax = newZXmax;
    options.ymin = newZYmin;
    options.ymax = newZYmax;

    updateGraphZoom(gphname, options);

    // console.log(pinchStartMidpoint)
  }
}
