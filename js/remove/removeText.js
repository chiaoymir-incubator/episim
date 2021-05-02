function removeText(graphname, textname) {
  textElement = document.getElementById(graphname + '-text-' + textname);
  textElement.outerHTML = '';
  delete graphData[graphname].textData[textname];
}
