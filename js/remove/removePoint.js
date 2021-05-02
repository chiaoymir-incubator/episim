function removePoint(graphname, pointname) {
  pointElement = document.getElementById(graphname + '-point-' + pointname);

  pointElement.outerHTML = '';
  delete graphData[graphname].pointData[pointname];
}
