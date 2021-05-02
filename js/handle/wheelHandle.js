function wheelHandle(event) {
  event.preventDefault();
  whlvalue = event.wheelDeltaY / Math.abs(event.wheelDeltaY);
  if (event.wheelDeltaY == undefined) {
    whlvalue = event.deltaY / Math.abs(event.deltaY);
    // For FireFox
  }
  scalefactorup = 1.1;
  scalefactordown = 0.9;

  if (graphData[event.target.id.split('-')[0]] == undefined) {
  } else {
    gdata = graphData[event.target.id.split('-')[0]];

    scale = gdata.ymax - gdata.ymin;
    expstring = scale.toExponential().toString();
    ordery = expstring.slice(expstring.indexOf('e') + 1) * -1;
    // console.log(ordery)

    scale = gdata.xmax - gdata.xmin;
    expstring = scale.toExponential().toString();
    orderx = expstring.slice(expstring.indexOf('e') + 1) * -1;
    // console.log(orderx)

    gphname = gdata.name;

    var rect = document.getElementById(gphname).getBoundingClientRect();
    posx = event.clientX - rect.left;
    posy = event.clientY - rect.top;
    svgPTVariable[gphname].x = event.clientX;
    svgPTVariable[gphname].y = event.clientY;

    if (event.clientX == undefined) {
      posx = event.changedTouches[0].clientX - rect.left;
      posy = event.changedTouches[0].clientY - rect.top;
      svgPTVariable[gphname].x = event.changedTouches[0].clientX;
      svgPTVariable[gphname].y = event.changedTouches[0].clientY;
    }

    var cursorpt = svgPTVariable[gphname].matrixTransform(
      document.getElementById(gphname).getScreenCTM().inverse()
    );

    zoomlocationX = svgToGraphX(
      cursorpt.x,
      graphData[gphname].xmin,
      graphData[gphname].xmax,
      graphData[gphname].aspectratio
    );
    zoomlocationY = svgToGraphY(
      cursorpt.y,
      graphData[gphname].ymin,
      graphData[gphname].ymax,
      graphData[gphname].aspectratio
    );

    currentvalues = graphData[gphname];

    posx = posx / rect.width;
    posy = posy / rect.height;

    if (posx > 0.11 && posx < 0.89 && posy > 0.11 && posy < 0.89) {
      if (whlvalue < 0) {
        scaleupdownFactor = scalefactorup;
        leftX = (zoomlocationX - currentvalues.xmin) * scaleupdownFactor;
        newZXmin = zoomlocationX - leftX;
        rightX = (currentvalues.xmax - zoomlocationX) * scaleupdownFactor;
        newZXmax = zoomlocationX + rightX;
        leftY = (zoomlocationY - currentvalues.ymin) * scaleupdownFactor;
        newZYmin = zoomlocationY - leftY;
        rightY = (currentvalues.ymax - zoomlocationY) * scaleupdownFactor;
        newZYmax = zoomlocationY + rightY;

        options = {};
        options.xmin = newZXmin;
        options.xmax = newZXmax;
        options.ymin = newZYmin;
        options.ymax = newZYmax;

        updateGraphZoom(gphname, options);
      } else if (whlvalue >= 0 && orderx < 14 && ordery < 14) {
        scaleupdownFactor = scalefactordown;
        leftX = (zoomlocationX - currentvalues.xmin) * scaleupdownFactor;
        newZXmin = zoomlocationX - leftX;
        rightX = (currentvalues.xmax - zoomlocationX) * scaleupdownFactor;
        newZXmax = zoomlocationX + rightX;
        leftY = (zoomlocationY - currentvalues.ymin) * scaleupdownFactor;
        newZYmin = zoomlocationY - leftY;
        rightY = (currentvalues.ymax - zoomlocationY) * scaleupdownFactor;
        newZYmax = zoomlocationY + rightY;

        options = {};
        options.xmin = newZXmin;
        options.xmax = newZXmax;
        options.ymin = newZYmin;
        options.ymax = newZYmax;
        updateGraphZoom(gphname, options);
      }
    }
  }
}
