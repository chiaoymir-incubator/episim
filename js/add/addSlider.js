function addSlider(graphname, slidername, slideroptions) {
  gdata = graphData[graphname];
  slideroptions = slideroptions || {};

  aratio = gdata.aspectratio;

  slideroptions.x1 = parseFloat(slideroptions.x1.toString() || 0);
  slideroptions.y1 = parseFloat(slideroptions.y1.toString() || 0);
  slideroptions.x2 = parseFloat(slideroptions.x2.toString() || 0.5);
  slideroptions.y2 = parseFloat(slideroptions.y2.toString() || 0.5);
  slideroptions.name = slidername || uid;

  slideroptions.automaticallySetKnobRadius;

  slideroptions.currentvalue = parseFloat(
    slideroptions.currentvalue.toString() || 0.5
  );
  slideroptions.maxvalue = parseFloat(slideroptions.maxvalue.toString() || 0.5);
  slideroptions.minvalue = parseFloat(slideroptions.minvalue.toString() || 0.5);

  slideroptions.strokewidth = slideroptions.strokewidth || 1;
  slideroptions.sliderfillcolor =
    slideroptions.sliderfillcolor || 'hsla(190, 100%, 50%, 1)';
  slideroptions.sliderbasecolor =
    slideroptions.sliderbasecolor || 'hsla(190, 0%, 70%, 1)';
  slideroptions.sliderknobcolor =
    slideroptions.sliderknobcolor || 'hsla(190, 100%, 50%, 1)';

  slideroptions.knobradius = parseFloat(slideroptions.knobradius || 0.5);

  kfactor =
    (slideroptions.currentvalue - slideroptions.minvalue) /
    (slideroptions.maxvalue - slideroptions.minvalue);

  slideroptions.cx =
    (slideroptions.x2 * kfactor + slideroptions.x1) / (kfactor + 1);
  slideroptions.cy =
    (slideroptions.y2 * kfactor + slideroptions.y1) / (kfactor + 1);

  slideroptions.cx = parseFloat(slideroptions.cx.toString() || 0);
  slideroptions.cy = parseFloat(slideroptions.cy.toString() || 0);

  var sliderbaseElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'line'
  );
  sliderbaseElement.setAttribute(
    'x1',
    graphToScaledX(slideroptions.x1, gdata.xmin, gdata.xmax, aratio) + '%'
  );
  sliderbaseElement.setAttribute(
    'y1',
    graphToScaledY(slideroptions.y1, gdata.ymin, gdata.ymax, aratio) + '%'
  );
  sliderbaseElement.setAttribute(
    'x2',
    graphToScaledX(slideroptions.x2, gdata.xmin, gdata.xmax, aratio) + '%'
  );
  sliderbaseElement.setAttribute(
    'y2',
    graphToScaledY(slideroptions.y2, gdata.ymin, gdata.ymax, aratio) + '%'
  );

  sliderbaseElement.setAttribute(
    'id',
    graphname + '-slider-base-' + slidername
  );
  sliderbaseElement.setAttribute('vector-effect', 'non-scaling-stroke');
  sliderbaseElement.style.stroke = slideroptions.sliderbasecolor;
  sliderbaseElement.style.strokeWidth = slideroptions.strokewidth + '%';
  gdata.svgElement.appendChild(sliderbaseElement);

  var sliderfillElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'line'
  );
  sliderfillElement.setAttribute(
    'x1',
    graphToScaledX(slideroptions.x1, gdata.xmin, gdata.xmax, aratio) + '%'
  );
  sliderfillElement.setAttribute(
    'y1',
    graphToScaledY(slideroptions.y1, gdata.ymin, gdata.ymax, aratio) + '%'
  );
  sliderfillElement.setAttribute(
    'x2',
    graphToScaledX(slideroptions.cx, gdata.xmin, gdata.xmax, aratio) + '%'
  );
  sliderfillElement.setAttribute(
    'y2',
    graphToScaledY(slideroptions.cy, gdata.ymin, gdata.ymax, aratio) + '%'
  );

  sliderfillElement.setAttribute(
    'id',
    graphname + '-slider-fill-' + slidername
  );
  sliderfillElement.setAttribute('vector-effect', 'non-scaling-stroke');
  sliderfillElement.style.stroke = slideroptions.sliderfillcolor;
  sliderfillElement.style.strokeWidth = slideroptions.strokewidth + '%';
  gdata.svgElement.appendChild(sliderfillElement);

  rx = distanceBTWgraphToSvg(
    [0, 0],
    [slideroptions.knobradius, 0],
    gdata.xmin,
    gdata.xmax,
    gdata.ymin,
    gdata.ymax,
    aratio
  );
  ry = distanceBTWgraphToSvg(
    [0, 0],
    [0, slideroptions.knobradius],
    gdata.xmin,
    gdata.xmax,
    gdata.ymin,
    gdata.ymax,
    aratio
  );

  slideroptions.automaticallySetKnobRadius =
    slideroptions.automaticallySetKnobRadius || 'yes';

  if (slideroptions.automaticallySetKnobRadius == 'yes') {
    // Adjusted based on certain calculations at https://www.desmos.com/calculator/wocvdzcn1p
    aRegress = -1.2979 * Math.pow(10, -9);
    bRegress = -9.8036;
    cRegress = -0.0337978;
    fRegress = 10.1808;

    strokeW = options.strokewidth;
    if (strokeW < 25) {
      rx =
        (aRegress * strokeW + bRegress) * Math.exp(cRegress * strokeW) +
        fRegress;
      ry = rx;
    } else {
      rx = 0.2217 * strokeW + 0.736503;
      ry = rx;
    }
  }

  var circleElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'ellipse'
  );
  circleElement.setAttribute(
    'cx',
    graphToScaledX(slideroptions.cx, gdata.xmin, gdata.xmax, aratio) + '%'
  );
  circleElement.setAttribute(
    'cy',
    graphToScaledY(slideroptions.cy, gdata.ymin, gdata.ymax, aratio) + '%'
  );
  circleElement.setAttribute('rx', rx + '%');
  circleElement.setAttribute('ry', ry + '%');
  circleElement.setAttribute('id', graphname + '-slider-knob-' + slidername);
  uid = uid + 1;
  circleElement.setAttribute('vector-effect', 'non-scaling-stroke');
  circleElement.style.fill = slideroptions.sliderknobcolor;
  circleElement.style.strokeWidth = '0%';
  gdata.svgElement.appendChild(circleElement);

  graphData[graphname].sliderData[slidername] = [
    sliderbaseElement,
    sliderfillElement,
    circleElement,
    slideroptions,
  ];
  return [sliderbaseElement, sliderfillElement, circleElement, slideroptions];
}
