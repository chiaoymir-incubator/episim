function handleConfigChange(event) {
  document.getElementById('simpleCaseGraphH').style.visibility = 'hidden';
  document.getElementById('simpleCaseGraph&QH').style.visibility = 'hidden';
  document.getElementById('centralLocationCaseGraphH').style.visibility =
    'hidden';
  document.getElementById(
    'centralLocationQuarantineCaseGraphH'
  ).style.visibility = 'hidden';
  document.getElementById('communitiesCaseGraphH').style.visibility = 'hidden';
  document.getElementById('communitiesQuarantineCaseGraphH').style.visibility =
    'hidden';

  document.getElementById(
    handleCases[event.target.id][quarantineOn][0]
  ).style.visibility = 'visible';
  document.getElementById(
    handleCases[event.target.id][quarantineOn][0]
  ).style.zIndex = 100;
  currentSimG = handleCases[event.target.id][quarantineOn][2];
  currentSim = handleCases[event.target.id][quarantineOn][1];

  particleDataArr = {
    infected: [],
    susceptible: [],
    removed: [],
  };

  dummye = {};
  resetSimHard(dummye);

  document.getElementById('simpleCaseoption').style.border =
    '1px solid hsla(0, 0%, 60%, 1)';
  document.getElementById('centralLocationoption').style.border =
    '1px solid hsla(0, 0%, 60%, 1)';
  document.getElementById('communitiesoption').style.border =
    '1px solid hsla(0, 0%, 60%, 1)';
  document.getElementById('simpleCaseoption').style.background = 'none';
  document.getElementById('centralLocationoption').style.background = 'none';
  document.getElementById('communitiesoption').style.background = 'none';
  document.getElementById('simpleCaseoption').style.color =
    'hsla(1, 0%, 60%, 1)';
  document.getElementById('centralLocationoption').style.color =
    'hsla(1, 0%, 60%, 1)';
  document.getElementById('communitiesoption').style.color =
    'hsla(1, 0%, 60%, 1)';

  event.target.style.color = 'hsla(2, 0%, 0%, 1)';
  event.target.style.border = '1px solid hsla(40, 100%, 50%, 1)';
  event.target.style.background = 'hsla(40, 100%, 50%, 1)';

  document.getElementById('caseTypeName').innerHTML =
    graphToQMap[currentSim][4];
}
