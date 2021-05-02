function graphToSvgY(value, graphymin, graphymax) {
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
  return y;
}

function graphToSvgX(value, graphxmin, graphxmax) {
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
  return x;
}
