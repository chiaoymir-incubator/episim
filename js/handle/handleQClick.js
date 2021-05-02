function handleQClick(event) {
  if (quarantineOn && event.target.checked == false) {
    document.getElementById(graphToQMap[currentSim][3]).style.visibility =
      'hidden';
    document.getElementById(graphToQMap[currentSim][2]).style.visibility =
      'visible';
    document.getElementById(graphToQMap[currentSim][2]).style.zIndex = 100;
    currentSimG = graphToQMap[currentSim][1];

    currentSim = graphToQMap[currentSim][0];

    dummye = {};
    resetSimHard(dummye);

    document.getElementById('caseTypeName').innerHTML =
      graphToQMap[currentSim][4];

    quarantineOn = false;
  } else if (event.target.checked) {
    document.getElementById(graphToQMap[currentSim][3]).style.visibility =
      'hidden';
    document.getElementById(graphToQMap[currentSim][2]).style.visibility =
      'visible';
    document.getElementById(graphToQMap[currentSim][2]).style.zIndex = 100;
    currentSimG = graphToQMap[currentSim][1];

    currentSim = graphToQMap[currentSim][0];

    dummye = {};
    resetSimHard(dummye);

    document.getElementById('caseTypeName').innerHTML =
      graphToQMap[currentSim][4];

    quarantineOn = true;
  }
}
