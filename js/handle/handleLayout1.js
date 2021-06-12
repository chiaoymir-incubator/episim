function handleLayout1() {
  if (dmode == 'landscape') {
    document.getElementById('mainVSpacer1').style.width = '2%';
    document.getElementById('MainBlock1').style.width = '48%';
    document.getElementById('mainVSpacer2').style.width = '5%';
    document.getElementById('MainBlock2').style.width = '43%';
    document.getElementById('mainVSpacer3').style.width = '2%';

    $('#plotGraphH').appendTo('#MainBlock1');
    $('#myChart').appendTo('#MainBlock1');
    $('#mainB2HSpacer5').appendTo('#MainBlock1');
    $('#data_panel').appendTo('#MainBlock1');
    
    $('#mytineline_div').appendTo('#MainBlock1');
    $('#parametersH').appendTo('#MainBlock1');
    $('#mainB2HSpacer6').appendTo('#MainBlock1');

    document.getElementById('mainB2HSpacer1').style.height = '3%';
    document.getElementById('maintitle').style.textAlign = 'right';
    // document.getElementById('titleH').style.height = '15%'
    document.getElementById('maintitle').style.fontSize = '2vmax';

    document.getElementById('maintitle').innerHTML =
      "<font style='font-weight: bold;'>Epidemic Simulation System</font><br/><font style='font-family: Source Sans Pro; font-size: 1.1vmax; vertical-align: bottom;'>生醫工程概論 Final Project<a href='https://www.youtube.com/watch?v=gxAaO2rsdIs' style='text-decoration: none; cursor: pointer;' target='_blank'><font style='color: hsla(197, 100%, 50%, 1);'></font></a><br/><font style='font-size: 0.9vmax'></font></font>";

    document.getElementById('mainB2HSpacer2').style.height = '3%';
    document.getElementById('caseTypeNameH').style.height = '4%';
    document.getElementById('caseTypeNameH').style.fontSize = '1vmax';

    document.getElementById('upperLayer').style.height = '65%';
    document.getElementById('simpleCaseGraphH').style.height = '65%';
    document.getElementById('centralLocationCaseGraphH').style.height = '65%';
    document.getElementById('communitiesCaseGraphH').style.height = '65%';
    document.getElementById('simpleCaseGraph&QH').style.height = '65%';
    document.getElementById(
      'centralLocationQuarantineCaseGraphH'
    ).style.height = '65%';
    document.getElementById('communitiesQuarantineCaseGraphH').style.height =
      '65%';

    document.getElementById('play-Info-QuarantineH').style.height = '4%';

    document.getElementById('playbutton').style.fontSize = '0.8vmax';
    document.getElementById('resetbutton').style.fontSize = '0.8vmax';

    document.getElementById('playButtonH').style.width = '12%';
    document.getElementById('resetButtonH').style.width = '12%';

    document.getElementById('play-Info-QuarantineHSpacer1').style.width = '4%';

    document.getElementById('infoH').style.fontSize = '0.8vmax';
    document.getElementById('infoH').style.width = '100%';

    document.getElementById('quarantineH').style.fontSize = '0.9vmax';
    document.getElementById('quarantineH').style.float = 'right';
    document.getElementById('quarantineH').style.width = '25%';
    document.getElementById('quarantineH').style.fontFamily = 'Source Sans Pro';
    document.getElementById('quarantinecheckLabel').style.fontSize = '0.9vmax';

    document.getElementById('mainB2HSpacer3').style.height = '3%';
    document.getElementById('caseTypeChooseH').style.height = '4%';

    document.getElementById('simpleCaseoption').style.fontSize = '0.86vmax';
    document.getElementById('centralLocationoption').style.fontSize =
      '0.86vmax';
    document.getElementById('communitiesoption').style.fontSize = '0.86vmax';

    document.getElementById('simpleCaseoptionH').style.width = '14%';
    document.getElementById('centralLocationoptionH').style.width = '27%';
    document.getElementById('communitiesoptionH').style.width = '23%';

    // $('#CommunitiesoptionH').insertBefore('#simpleCaseoptionH')
    // $('#centralLocationoptionH').insertBefore('#simpleCaseoptionH')

    $('#quarantineH').insertAfter('#communitiesoptionH');

    // document.getElementById('simpleCaseoptionH').style.float = 'right'
    // document.getElementById('centralLocationoptionH').style.float = 'right'
    // document.getElementById('CommunitiesoptionH').style.float = 'right'

    // document.getElementById('plotGraphH').style.height = '40%';
    document.getElementById('myChart').style.height = '40%';
    
    document.getElementById('parametersH').style.height = '45%';
    document.getElementById('mytineline_div').style.height = '10%';
    

    document.getElementById('parametersTitleText').style.fontSize = '1.1vmax';
    document.getElementById('parametersTitleText').style.height = '10%';

    document.getElementById('additionalPText').style.fontSize = '0.7vmax';

    document.getElementById('parametersListH').style.fontSize = '0.96vmax';

    document.getElementById('mainB2HSpacer6').style.height = '1%';

    $('#infoH').insertAfter('#mainB2HSpacer6');

    document.getElementById('gradfillParameters').style.background =
      'linear-gradient(to bottom,hsla(0, 0%, 0%, 0), hsla(0, 100%, 100%, 0) 8%, hsla(0, 100%, 0%, 1) 10%, hsla(0, 100%, 100%, 0) 14%, hsla(0, 0%, 0%, 0) 88%,hsla(0, 100%, 0%, 1) 100%,hsla(0, 100%, 100%, 0) 100%,hsla(0, 100%, 100%, 0))';
  }
}
