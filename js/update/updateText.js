function updateText(graphname, textname, textvalues) {
  gdata = graphData[graphname];

  aratio = gdata.aspectratio;

  textoptions = gdata.textData[textname][1];
  textElement = gdata.textData[textname][0];

  textoptions.text = textvalues.text || textoptions.text;
  textoptions.x = textvalues.x || textoptions.x;
  textoptions.y = textvalues.y || textoptions.y;
  textoptions.textcolor = textvalues.textcolor || textoptions.textcolor;
  textoptions.fontSize = textvalues.fontSize || textoptions.fontSize;

  textElement.innerHTML = textoptions.text;
  textElement.setAttribute(
    'x',
    graphToScaledX(textoptions.x, gdata.xmin, gdata.xmax, aratio) + '%'
  );
  textElement.setAttribute(
    'y',
    graphToScaledY(textoptions.y, gdata.ymin, gdata.ymax, aratio) + '%'
  );
  textElement.style.fill = textoptions.textcolor;
  textElement.style.fontSize = textoptions.fontSize;

  graphData[graphname].textData[textname] = [textElement, textoptions];
  return [textElement, textoptions];
}
