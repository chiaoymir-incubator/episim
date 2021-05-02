function removePath(graphname, pathname) {
  pathElement = document.getElementById(graphname + '-path-' + pathname);
  pathElement.outerHTML = '';
  delete graphData[graphname].pathData[pathname];
}
