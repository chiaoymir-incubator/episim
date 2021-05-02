function removeGraph(graphname) {
  graphElement = document.getElementById(graphname);
  graphElement.outerHTML = '';
  delete graphData[graphname];
}
