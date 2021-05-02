function changeParameterWithoutReload(paraN, paraValueToSet) {
  parData = parameterData[paraN];
  simulationParameters[parData.name] = eval(
    parData.transform.replace(/#paraValue#/g, paraValueToSet)
  );
  pName = parData.name + 'div';
  document.getElementById(
    'parameter' + pName + 'Text'
  ).innerHTML = parData.div.replace(
    /@@@/g,
    '<font style="font-weight: bold; color:hsla(' +
      parData.color +
      ', 1);">' +
      paraValueToSet +
      '</font>'
  );

  $('#' + pName + 'Slider').val(paraValueToSet);
  // $("#" + pName + 'Slider').trigger('input');

  eval(parData.runFAtEnd);
}
