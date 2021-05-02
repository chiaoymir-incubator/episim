function addText(graphname, textname, textoptions) {
  gdata = graphData[graphname];
  textoptions = textoptions || {};

  aratio = gdata.aspectratio;

  textoptions.x = parseFloat(textoptions.x.toString() || 0);
  textoptions.y = parseFloat(textoptions.y.toString() || 0);
  textoptions.text = textoptions.text || '';
  textoptions.name = textname || uid;

  textoptions.textAlign = textoptions.textAlign || 'left';
  textoptions.fontSize = textoptions.fontSize || 12;
  textoptions.fontFamily = textoptions.fontFamily || 'Source Sans Pro';

  textoptions.textcolor = textoptions.textcolor || 'hsla(190, 100%, 0%, 1)';

  var textElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'text'
  );
  textElement.setAttribute(
    'x',
    graphToScaledX(textoptions.x, gdata.xmin, gdata.xmax, aratio) + '%'
  );
  textElement.setAttribute(
    'y',
    graphToScaledY(textoptions.y, gdata.ymin, gdata.ymax, aratio) + '%'
  );
  textElement.setAttribute('id', graphname + '-text-' + textname);
  uid = uid + 1;
  textElement.setAttribute('vector-effect', 'non-scaling-stroke');
  textElement.style.fill = textoptions.textcolor;
  textElement.innerHTML = textoptions.text;
  textElement.style.fontFamily = textoptions.fontFamily;
  textElement.style.fontSize = textoptions.fontSize;
  if (textoptions.textAlign == 'center') {
    textElement.setAttribute('text-anchor', 'middle');
  }
  gdata.svgElement.appendChild(textElement);

  graphData[graphname].textData[textname] = [textElement, textoptions];
  return [textElement, textoptions];
}
