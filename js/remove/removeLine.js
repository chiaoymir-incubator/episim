function removeLine(graphname, linename) {
  lineElement = document.getElementById(graphname + '-line-' + linename);
  lineElement.outerHTML = '';
  delete graphData[graphname].lineData[linename];
}
