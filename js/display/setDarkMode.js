function setDarkMode() {
  if (darkmode) {
    darkmode = false;
    document.getElementById('darkmodeoption').style.backgroundColor =
      'hsla(190, 100%, 0%, 0.2)';
    document.getElementById('darkmodeoption').style.color =
      'hsla(190, 100%, 100%, 1)';
    document.getElementById('darkmodeoption').style.fontWeight = 'normal';

    document.body.style.background = 'white';

    document.getElementById('maintitle').style.color = 'hsla(190, 100%, 0%, 1)';
    document.getElementById('websitelink').style.color =
      'hsla(260, 100%, 60%, 1)';
    document.getElementById('asimulationtext').style.color =
      'hsla(190, 100%, 60%, 1)';

    document.getElementById('info').style.color = 'hsla(190, 100%, 0%, 1)';

    options = {};
    options.pointcolor = 'hsla(260, 100%, 50%, 1)';
    updatePoint('simulationgraph', 'cat', options);

    options = {};
    options.textcolor = 'hsla(260, 0%, 0%, 1)';
    updateText('simulationgraph', 'cattext', options);

    options = {};
    options.pointcolor = 'hsla(260, 0%, 0%, 1)';
    updatePoint('simulationgraph', 'mouse', options);

    options = {};
    options.textcolor = 'hsla(260, 0%, 0%, 1)';
    updateText('simulationgraph', 'mousetext', options);

    options = {};
    options.textcolor = 'hsla(260, 0%, 0%, 1)';
    document.getElementById('mousestatusdisplay').style.color =
      options.textcolor;

    document.getElementById('darkback').style.backgroundColor = 'transparent';

    document.getElementById('controltab').style.backgroundColor =
      'hsla(260, 100%, 50%, 0.4)';
    document.getElementById('strategytab').style.backgroundColor =
      'hsla(260, 100%, 50%, 0.4)';
    document.getElementById('settingtab').style.backgroundColor =
      'hsla(260, 100%, 50%, 0.4)';

    document.getElementById('controltab').style.color = 'black';
    document.getElementById('strategytab').style.color = 'black';
    document.getElementById('settingtab').style.color = 'black';

    if (currenttab == 'controltab') {
      document.getElementById('controltab').style.color = 'white';
      for (bn = 1; bn < 13; bn++) {
        document.getElementById('cbtn' + bn).style.color = 'black';
        document.getElementById('cbtn' + bn).style.backgroundColor =
          'transparent';
      }
    } else if (currenttab == 'strategytab') {
      document.getElementById('strategytab').style.color = 'white';
    } else if (currenttab == 'settingtab') {
      document.getElementById('settingtab').style.color = 'white';
    }

    for (m = 0; m < strategies.length; m++) {
      if (statname == strategies[m]) {
        document.getElementById(strategies[m]).style.color =
          'hsla(190, 100%, 50%, 1)';
        document.getElementById(strategies[m] + '-box').style.color = 'black';
      } else {
        document.getElementById(strategies[m]).style.color = 'black';
        document.getElementById(strategies[m] + '-box').style.color = 'black';
      }
    }

    document.getElementById('catspeedtext').style.color = 'black';
    document.getElementById('catspeedinput').style.color = 'black';
    document.getElementById('catspeedinput').style.backgroundColor =
      'transparent';
    document.getElementById('mousespeedtext').style.color = 'black';
    document.getElementById('mousespeedinput').style.color = 'black';
    document.getElementById('mousespeedinput').style.backgroundColor =
      'transparent';

    for (st = 0; st < 5; st++) {
      if (settingstatus[st]) {
        document.getElementById(settingslist[st]).style.color =
          'hsla(190, 100%, 50%, 1)';
        document.getElementById(settingslist[st] + '-box').style.color =
          'hsla(190, 100%, 0%, 1)';
      } else {
        document.getElementById(settingslist[st]).style.color =
          'hsla(190, 100%, 0%, 1)';
        document.getElementById(settingslist[st] + '-box').style.color =
          'hsla(190, 100%, 0%, 1)';
      }
    }

    options = {};
    options.circlecolor = 'hsla(190, 100%, 50%, 1)';
    updateCircle('simulationgraph', 'pond', options);

    options = {};
    options.pointcolor = 'hsla(200, 100%, 0%, 0.5)';
    updatePoint('simulationgraph', 'oppositePoint', options);

    if (mode != 'portrait') {
      for (stg = 0; stg < strategies.length; stg++) {
        document.getElementById(strategies[stg]).style.backgroundColor =
          'hsla(190, 100%, 0%, 0.1)';
      }
    }
  } else {
    darkmode = true;
    document.getElementById('darkmodeoption').style.backgroundColor =
      'hsla(190, 100%, 50%, 1)';
    document.getElementById('darkmodeoption').style.color =
      'hsla(190, 100%, 100%, 1)';
    document.getElementById('darkmodeoption').style.fontWeight = 'bold';

    document.body.style.background = 'black';

    document.getElementById('maintitle').style.color =
      'hsla(190, 100%, 100%, 1)';

    document.getElementById('maintitle').style.color =
      'hsla(190, 100%, 100%, 1)';
    document.getElementById('websitelink').style.color =
      'hsla(260, 100%, 80%, 1)';
    document.getElementById('asimulationtext').style.color =
      'hsla(190, 100%, 80%, 1)';

    document.getElementById('info').style.color = 'hsla(190, 0%, 90%, 1)';

    options = {};
    options.pointcolor = 'hsla(260, 100%, 100%, 1)';
    updatePoint('simulationgraph', 'cat', options);

    options = {};
    options.textcolor = 'hsla(260, 0%, 100%, 1)';
    updateText('simulationgraph', 'cattext', options);

    options = {};
    options.pointcolor = 'hsla(260, 0%, 100%, 1)';
    updatePoint('simulationgraph', 'mouse', options);

    options = {};
    options.textcolor = 'hsla(260, 0%, 100%, 1)';
    updateText('simulationgraph', 'mousetext', options);

    options = {};
    options.textcolor = 'hsla(260, 0%, 100%, 1)';
    document.getElementById('mousestatusdisplay').style.color =
      options.textcolor;

    document.getElementById('darkback').style.backgroundColor =
      'hsla(190, 0%, 10%, 1)';

    if (currenttab == 'controltab') {
      document.getElementById('controltab').style.backgroundColor =
        'hsla(260, 0%, 20%, 1)';
      document.getElementById('controltab').style.color = 'white';
      for (k = 1; k < 13; k++) {
        document.getElementById('cbtn' + k).style.backgroundColor =
          'hsla(190, 100%, 0%, 1)';
        document.getElementById('cbtn' + k).style.color =
          'hsla(190, 100%, 50%, 1)';
      }
    } else {
      document.getElementById('controltab').style.backgroundColor =
        'hsla(260, 0%, 0%, 1)';
      document.getElementById('controltab').style.color =
        'hsla(100, 0%, 55%, 1)';
    }

    if (currenttab == 'strategytab') {
      document.getElementById('strategytab').style.backgroundColor =
        'hsla(260, 0%, 20%, 1)';
      document.getElementById('strategytab').style.color = 'white';
    } else {
      document.getElementById('strategytab').style.backgroundColor =
        'hsla(260, 0%, 0%, 1)';
      document.getElementById('strategytab').style.color =
        'hsla(100, 0%, 55%, 1)';
    }

    if (currenttab == 'settingtab') {
      document.getElementById('settingtab').style.backgroundColor =
        'hsla(260, 0%, 20%, 1)';
      document.getElementById('settingtab').style.color = 'white';
    } else {
      document.getElementById('settingtab').style.backgroundColor =
        'hsla(260, 0%, 0%, 1)';
      document.getElementById('settingtab').style.color =
        'hsla(100, 0%, 55%, 1)';
    }

    statname = tactic;

    for (m = 0; m < strategies.length; m++) {
      if (statname == strategies[m]) {
        document.getElementById(strategies[m]).style.color =
          'hsla(190, 100%, 50%, 1)';
        document.getElementById(strategies[m] + '-box').style.color = 'white';
      } else {
        document.getElementById(strategies[m]).style.color = 'white';
        document.getElementById(strategies[m] + '-box').style.color = 'white';
      }
    }

    document.getElementById('catspeedtext').style.color = 'white';
    document.getElementById('catspeedinput').style.color = 'white';
    document.getElementById('catspeedinput').style.backgroundColor = 'black';
    document.getElementById('mousespeedtext').style.color = 'white';
    document.getElementById('mousespeedinput').style.color = 'white';
    document.getElementById('mousespeedinput').style.backgroundColor = 'black';

    for (st = 0; st < 5; st++) {
      if (settingstatus[st]) {
        document.getElementById(settingslist[st]).style.color =
          'hsla(190, 100%, 50%, 1)';
        document.getElementById(settingslist[st] + '-box').style.color =
          'hsla(190, 100%, 100%, 1)';
      } else {
        document.getElementById(settingslist[st]).style.color =
          'hsla(190, 100%, 100%, 1)';
        document.getElementById(settingslist[st] + '-box').style.color =
          'hsla(190, 100%, 100%, 1)';
      }
    }

    options = {};
    options.circlecolor = 'hsla(200, 100%, 50%, 1)';
    updateCircle('simulationgraph', 'pond', options);

    options = {};
    options.pointcolor = 'hsla(200, 100%, 100%, 0.5)';
    updatePoint('simulationgraph', 'oppositePoint', options);

    if (mode != 'portrait') {
      for (stg = 0; stg < strategies.length; stg++) {
        document.getElementById(strategies[stg]).style.backgroundColor =
          'black';
      }
    }
  }
}
