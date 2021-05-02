function graphToScaledY(value, graphymin, graphymax, aspectratio) {
  if (aspectratio > 1) {
    if (graphymin == graphymax) {
      graphymin = graphymin - 1;
      graphymax = graphymax + 1;
      console.log(
        'Conversion error, maximum value is equal to minimum value. Max value was raised by 1 and Min value was reduced by 1. Max value : ' +
          graphymax +
          ' and Min value : ' +
          graphymin
      );
    }
    if (graphymin > graphymax) {
      temp = graphymin;
      graphymin = graphymax;
      graphymax = temp;
      console.log(
        'Conversion error, maximum value less than minimum value. Values were swapped. Max value : ' +
          graphymax +
          ' and Min value : ' +
          graphymin
      );
    }
    y = (-80 / (graphymax - graphymin)) * (value - graphymin) + 90;
  } else {
    if (graphymin == graphymax) {
      graphymin = graphymin - 1;
      graphymax = graphymax + 1;
      console.log(
        'Conversion error, maximum value is equal to minimum value. Max value was raised by 1 and Min value was reduced by 1. Max value : ' +
          graphymax +
          ' and Min value : ' +
          graphymin
      );
    }
    if (graphymin > graphymax) {
      temp = graphymin;
      graphymin = graphymax;
      graphymax = temp;
      console.log(
        'Conversion error, maximum value less than minimum value. Values were swapped. Max value : ' +
          graphymax +
          ' and Min value : ' +
          graphymin
      );
    }
    aspectratio = 1 / aspectratio;
    vl = (100 * (1 - aspectratio)) / 2 + 10 * aspectratio;
    vh = (100 * (aspectratio + 1)) / 2 - 10 * aspectratio;
    y = ((vl - vh) / (graphymax - graphymin)) * (value - graphymin) + vh;
    // console.log(x)
    // console.log(v1, v2)
    // y = (((v2 - v1)/(100))*(y)) + v1
  }

  return y;
}

function graphToScaledX(value, graphxmin, graphxmax, aspectratio) {
  if (aspectratio <= 1) {
    if (graphxmin == graphxmax) {
      graphxmin = graphxmin - 1;
      graphxmax = graphxmax + 1;
      console.log(
        'Conversion error, maximum value is equal to minimum value. Max value was raised by 1 and Min value was reduced by 1. Max value : ' +
          graphxmax +
          ' and Min value : ' +
          graphxmin
      );
    }
    if (graphxmin > graphxmax) {
      temp = graphxmin;
      graphxmin = graphxmax;
      graphxmax = temp;
      console.log(
        'Conversion error, maximum value less than minimum value. Values were swapped. Max value : ' +
          graphxmax +
          ' and Min value : ' +
          graphxmin
      );
    }
    x = (80 / (graphxmax - graphxmin)) * (value - graphxmin) + 10;
  } else {
    if (graphxmin == graphxmax) {
      graphxmin = graphxmin - 1;
      graphxmax = graphxmax + 1;
      console.log(
        'Conversion error, maximum value is equal to minimum value. Max value was raised by 1 and Min value was reduced by 1. Max value : ' +
          graphxmax +
          ' and Min value : ' +
          graphxmin
      );
    }
    if (graphxmin > graphxmax) {
      temp = graphxmin;
      graphxmin = graphxmax;
      graphxmax = temp;
      console.log(
        'Conversion error, maximum value less than minimum value. Values were swapped. Max value : ' +
          graphxmax +
          ' and Min value : ' +
          graphxmin
      );
    }
    vl = (100 * (1 - aspectratio)) / 2 + 10 * aspectratio;
    vh = (100 * (aspectratio + 1)) / 2 - 10 * aspectratio;
    x = ((vh - vl) / (graphxmax - graphxmin)) * (value - graphxmin) + vl;
    // console.log(x)
    // console.log(v1, v2)
    // y - y1 = (y2 - y1)/(x2 - x1) * (x - x1)
    // x = (((v2 - v1)/(90))*(x - 10)) + v1
    // console.log(x)
    // console.log('_')
  }
  return x;
}
