function removeCircle(graphname, circlename) {
  circleElement = document.getElementById(graphname + '-circle-' + circlename);
  circleElement.outerHTML = '';
  delete graphData[graphname].circleData[circlename];
}
