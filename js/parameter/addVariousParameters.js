var paramName_DOM_mapping = {}
function addVariousParameters() {
  if (dmode == 'landscape') {
    for (var parameterIndex in parameterData) {
      pName = parameterData[parameterIndex].name + 'div';
      parameterSliderRMap[pName + 'Slider'] = parameterIndex;
      parameterDivData =
        '<div id="parameter' +
        pName +
        'Box" style="margin:0px;width:100%; position: relative; z-index: 1;display: flex;"><div id="parameter' +
        pName +
        'Text" style="margin:0px;width:45%; position: relative; z-index: 1;display: inline-block; text-align: left;">' +
        parameterData[parameterIndex].div.replace(
          /@@@/g,
          '<font style="font-weight:bold; color:hsla(' +
            parameterData[parameterIndex].color +
            ', 1);">' +
            parameterData[parameterIndex].initValue +
            '</font>'
        ) +
        '</div><div id="parameter' +
        pName +
        'SliderH" style="margin:0px;width:55%; position: relative; z-index: 1; display: flex; align-items: center;"></div></div><div style="width: 100%; height: 7%"></div>';
      $(parameterDivData).appendTo('#parametersListH');

      // create a DOM element mapping
      paramName_DOM_mapping[parameterData[parameterIndex].name] = pName + 'Slider'

      divSlider(
        'parameter' + pName + 'SliderH',
        pName + 'Slider',
        parameterData[parameterIndex].min,
        parameterData[parameterIndex].max,
        parameterData[parameterIndex].initValue,
        parameterData[parameterIndex].step,
        'parameterEvent(event)',
        '80%',
        '3px',
        'hsla(190, 100%, 100%, 1)',
        '14px',
        'hsla(' + parameterData[parameterIndex].color + ', 1)',
        ''
      );

      evalString = parameterData[parameterIndex].transform.replace(
        /#paraValue#/g,
        parameterData[parameterIndex].initValue
      );
      simulationParameters[parameterData[parameterIndex].name] = eval(
        evalString
      );
    }
  } else {
    for (var parameterIndex in parameterData) {
      pName = parameterData[parameterIndex].name + 'div';
      parameterSliderRMap[pName + 'Slider'] = parameterIndex;
      parameterDivData =
        '<div id="parameter' +
        pName +
        'Box" style="margin:0px;width:100%; position: relative; z-index: 1;display: inline-block"><div id="parameter' +
        pName +
        'Text" style="margin:0px;width:92%; position: relative; z-index: 1;display: inline-block; text-align: left;">' +
        parameterData[parameterIndex].div.replace(
          /@@@/g,
          '<font style="font-weight: bold; color:hsla(' +
            parameterData[parameterIndex].color +
            ', 1);">' +
            parameterData[parameterIndex].initValue +
            '</font>'
        ) +
        '</div><div style="width: 100%; height: 8%"></div><div id="parameter' +
        pName +
        'SliderH" style="margin:0px;width:100%; position: relative; z-index: 1;display: inline-block;"></div><div style="width: 100%; height: 15%"></div></div>';
      $(parameterDivData).appendTo('#parametersListH');
      divSlider(
        'parameter' + pName + 'SliderH',
        pName + 'Slider',
        parameterData[parameterIndex].min,
        parameterData[parameterIndex].max,
        parameterData[parameterIndex].initValue,
        parameterData[parameterIndex].step,
        'parameterEvent(event)',
        '70%',
        '4px',
        'hsla(190, 100%, 100%, 1)',
        '17px',
        'hsla(' + parameterData[parameterIndex].color + ', 1)',
        ''
      );

      evalString = parameterData[parameterIndex].transform.replace(
        /#paraValue#/g,
        parameterData[parameterIndex].initValue
      );
      simulationParameters[parameterData[parameterIndex].name] = eval(
        evalString
      );
    }
  }
}
