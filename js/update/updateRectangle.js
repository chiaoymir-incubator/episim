function updateRectangle(graphname, rectname, rectvalueupdate) {
  gdata = graphData[graphname];
  rectoptions = gdata.rectData[rectname][1];
  rectElement = gdata.rectData[rectname][0];
  aratio = gdata.aspectratio;

  if (rectvalueupdate.x != 0) {
    rectoptions.x = rectvalueupdate.x || rectoptions.x;
  } else {
    rectoptions.x = rectvalueupdate.x;
  }

  if (rectvalueupdate.y != 0) {
    rectoptions.y = rectvalueupdate.y || rectoptions.y;
  } else {
    rectoptions.y = rectvalueupdate.y;
  }

  if (rectvalueupdate.w != 0) {
    rectoptions.w = rectvalueupdate.w || rectoptions.w;
  } else {
    rectoptions.w = rectvalueupdate.w;
  }

  if (rectvalueupdate.h != 0) {
    rectoptions.h = rectvalueupdate.h || rectoptions.h;
  } else {
    rectoptions.h = rectvalueupdate.h;
  }

  rectoptions.stroke = rectvalueupdate.stroke || rectoptions.stroke;
  rectoptions.strokewidth =
    rectvalueupdate.strokewidth || rectoptions.strokewidth;

  rectoptions.rectcolor = rectvalueupdate.rectcolor || rectoptions.rectcolor;

  rx = distanceBTWgraphToSvg(
    [0, 0],
    [rectoptions.w, 0],
    gdata.xmin,
    gdata.xmax,
    gdata.ymin,
    gdata.ymax,
    aratio
  );
  ry = distanceBTWgraphToSvg(
    [0, 0],
    [0, rectoptions.h],
    gdata.xmin,
    gdata.xmax,
    gdata.ymin,
    gdata.ymax,
    aratio
  );

  rectElement.setAttribute(
    'x',
    graphToScaledX(rectoptions.x, gdata.xmin, gdata.xmax, aratio) + '%'
  );
  rectElement.setAttribute(
    'y',
    graphToScaledY(rectoptions.y, gdata.ymin, gdata.ymax, aratio) + '%'
  );
  rectElement.setAttribute('width', rx + '%');
  rectElement.setAttribute('height', ry + '%');
  rectElement.style.fill = rectoptions.rectcolor;
  rectElement.style.strokeWidth = rectoptions.strokewidth + '%';
  rectElement.style.stroke = rectoptions.stroke;

  graphData[graphname].rectData[rectname] = [rectElement, rectoptions];
}
