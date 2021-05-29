function updatePlotGraph() {
  graphForParticle = currentSimG;
  totalP =
    particleCounts[graphForParticle]['infected'] +
    particleCounts[graphForParticle]['susceptible'] +
    particleCounts[graphForParticle]['removed'];

  // ========= log record ==========
  particleDataArr.infected.push(particleCounts[graphForParticle]['infected']);
  particleDataArr.susceptible.push(
    particleCounts[graphForParticle]['susceptible']
  );
  particleDataArr.removed.push(particleCounts[graphForParticle]['removed']);

  console.log(particleDataArr);
  // ===============================

  // === parameter change on time ====
  day = dayCount.toString();
  if (day in eventArr) {
    console.log(eventArr[day]);

    for (let key in eventArr[day]) {
      parameterNumber = parametersMapping[key];
      value = eventArr[day][key];
      parData = parameterData[parameterNumber];
      simulationParameters[parData.name] = eval(
        parData.transform.replace(/#paraValue#/g, value)
      );
      pName = parameterData[parameterNumber].name + 'div';
      document.getElementById('parameter' + pName + 'Text').innerHTML =
        parData.div.replace(
          /@@@/g,
          '<font style="font-weight: bold; color:hsla(' +
            parData.color +
            ', 1);">' +
            value +
            '</font>'
        );
      eval(parData.runFAtEnd);
    }
  }

  // ==================================

  removedV = (particleCounts[graphForParticle]['removed'] * 100) / totalP;
  infectedV = (particleCounts[graphForParticle]['infected'] * 100) / totalP;
  susceptibleV =
    (particleCounts[graphForParticle]['susceptible'] * 100) / totalP;

  if (particleCountTimeLine[graphForParticle]['removed'].length > 0) {
    particleCountTimeLine[graphForParticle]['removed'].pop();
    particleCountTimeLine[graphForParticle]['infected'].pop();
    particleCountTimeLine[graphForParticle]['susceptible'].pop();

    particleCountTimeLine[graphForParticle]['removed'].pop();
    particleCountTimeLine[graphForParticle]['infected'].pop();
    particleCountTimeLine[graphForParticle]['susceptible'].pop();
  }
  particleCountTimeLine[graphForParticle]['removed'].push([dayCount, 100]);
  particleCountTimeLine[graphForParticle]['susceptible'].push([
    dayCount,
    susceptibleV + infectedV,
  ]);
  particleCountTimeLine[graphForParticle]['infected'].push([
    dayCount,
    infectedV,
  ]);

  if (dayCount > 10) {
    graphData['plotG'].xmajorgridlabelOnlyIf =
      'value >= 0 && value <= ' + dayCount;
    updateGraphZoom('plotG', { xmax: dayCount + dayCount * 0.3 });
  }

  particleCountTimeLine[graphForParticle]['removed'].push([dayCount, 0]);
  particleCountTimeLine[graphForParticle]['infected'].push([dayCount, 0]);
  particleCountTimeLine[graphForParticle]['susceptible'].push([dayCount, 0]);

  particleCountTimeLine[graphForParticle]['removed'].push([0, 0]);
  particleCountTimeLine[graphForParticle]['infected'].push([0, 0]);
  particleCountTimeLine[graphForParticle]['susceptible'].push([0, 0]);

  updatePathPoints(
    'plotG',
    'removedLine',
    particleCountTimeLine[graphForParticle]['removed']
  );
  updatePathPoints(
    'plotG',
    'infectedLine',
    particleCountTimeLine[graphForParticle]['infected']
  );
  updatePathPoints(
    'plotG',
    'susceptibleLine',
    particleCountTimeLine[graphForParticle]['susceptible']
  );

  options = {};
  options.text = removedV.toFixed(1) + '% removed';
  options.y = (100 + infectedV + susceptibleV) / 2;
  yremovedTextLoc = (100 + infectedV + susceptibleV) / 2;
  if (dayCount >= 10) {
    options.x = dayCount * 1.03;
  }
  updateText('plotG', 'removedText', options);

  options = {};
  options.text = susceptibleV.toFixed(1) + '% susceptible';
  options.y = (susceptibleV + infectedV + infectedV) / 2;
  ysusceptibleTextLoc = (susceptibleV + infectedV + infectedV) / 2;
  if ((100 - infectedV) / 2 < 15) {
    options.y = (100 + infectedV + susceptibleV) / 2 - 15;
    ysusceptibleTextLoc = (100 + infectedV + susceptibleV) / 2 - 15;
  }
  if (dayCount >= 10) {
    options.x = dayCount * 1.03;
  }
  updateText('plotG', 'susceptibleText', options);

  options = {};
  options.text = infectedV.toFixed(1) + '% infected';
  options.y = infectedV / 2;
  if (ysusceptibleTextLoc - infectedV / 2 < 15) {
    options.y = ysusceptibleTextLoc - 15;
  }
  if (dayCount >= 10) {
    options.x = dayCount * 1.03;
  }
  updateText('plotG', 'infectedText', options);

  casesSoFar = 0;
  totalInfections = 0;
  for (var infectedParticle in particleInfectionCount[graphForParticle]) {
    if (
      particleInfectionCount[graphForParticle][infectedParticle].infectionC > 0
    ) {
      casesSoFar = casesSoFar + 1;
      totalInfections =
        totalInfections +
        particleInfectionCount[graphForParticle][infectedParticle].infectionC;
    }
  }

  // document.getElementById('R_0').innerHTML = 'R : ' + (totalInfections/casesSoFar).toFixed(2)
  // console.log(totalInfections/casesSoFar, casesSoFar*100/totalP)
}
