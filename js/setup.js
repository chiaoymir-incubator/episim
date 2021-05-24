darkmode = true;

if (darkmode) {
  document.body.style.background = 'black';
}

sliderDivData = {};

currentMovingPoint = '';

svgPTVariable = {};

currentMovingGraph = '';
currentMovingGraphStartLocation = [];

pinchZoom = false;
pinchStartData = [];

dmode = 'square';
if (
  1.25 * window.innerWidth < window.innerHeight &&
  window.innerWidth < window.innerHeight
) {
  dmode = 'portrait';
} else if (
  window.innerWidth > 1.3 * window.innerHeight &&
  window.innerWidth > window.innerHeight
) {
  dmode = 'landscape';
}

handleLayout1();

uid = 0;
graphData = {};

reverseGraphElementMap = {};

simulationParameters = {};

parameterData = {};

simulationParameters.reproductiveNumber = 0;

parameterData[0] = {
  name: 'infectionRadius',
  div: 'Infection Radius &nbsp&nbsp @@@',
  initValue: 0.1,
  max: 0.4,
  min: 0.01,
  step: 0.001,
  color: '10, 100%, 63%',
  transform: 'parseFloat(#paraValue#)',
  requiresReset: false,
  runFAtEnd: '',
};
parameterData[1] = {
  name: 'probabilityofInfection',
  div: 'Chance of Infection on a given day is @@@%',
  initValue: 6,
  max: 100,
  min: 0,
  step: 0.01,
  color: '10, 100%, 63%',
  transform: 'parseFloat(#paraValue#)/100',
  requiresReset: false,
  runFAtEnd: '',
};
divAdjust =
  '@@@% population/community infected initially<br/><font style="color:grey; font-size: 1.2vmax;"> (In community case, @@@% of the community is infected initially, not the population.)</font>';
if (dmode == 'landscape') {
  divAdjust =
    '@@@% population/community infected initially<br/><font style="color:grey; font-size: 0.8vmax;">(In community case, @@@% of the community is infected initially, not the population.)</font>';
}
parameterData[2] = {
  name: 'fractionInfectedInitially',
  div: divAdjust,
  initValue: 1,
  max: 100,
  min: 0,
  step: 0.1,
  color: '10, 100%, 63%',
  transform: 'parseFloat(#paraValue#)/100',
  requiresReset: true,
  runFAtEnd: '',
};
parameterData[3] = {
  name: 'infectionTime',
  div: 'Infection duration is @@@ days',
  initValue: 25,
  max: 100,
  min: 1,
  step: 1,
  color: '10, 100%, 63%',
  transform: 'parseInt(#paraValue#)',
  requiresReset: false,
  runFAtEnd: '',
};
parameterData[4] = {
  name: 'socialDistancingFactorA',
  div: 'Social Distancing Factor &nbsp&nbsp @@@',
  initValue: 0,
  max: 1,
  min: 0,
  step: 0.01,
  color: '40, 100%, 50%',
  transform: 'parseFloat(#paraValue#)',
  requiresReset: false,
  runFAtEnd:
    'boundaryForceC = linearValue(0, 1, 0.1, 2,simulationParameters.socialDistancingFactorA)',
};
parameterData[5] = {
  name: 'socialDistanceObedientPop',
  div: '@@@% of the population obeys Social Distancing',
  initValue: 100,
  max: 100,
  min: 0,
  step: 0.1,
  color: '40, 100%, 50%',
  transform: 'parseFloat(#paraValue#)/100',
  requiresReset: false,
  runFAtEnd: 'handleSDObedience()',
};

divAdjust =
  'Observe Social Distancing within @@@ times the infection radius.<br/><font style="color:grey; font-size: 1.2vmax;"> (This quantity reduces many computations. Smaller the value, better. But, larger values may mimic the simulation in the video)</font>';
if (dmode == 'landscape') {
  divAdjust =
    'Observe Social Distancing within @@@ times the infection radius.<br/><font style="color:grey; font-size: 0.8vmax;">(This quantity reduces many computations. Smaller the value, better. But, larger values may mimic the simulation in the video)</font>';
}

parameterData[6] = {
  name: 'boxesToConsider',
  div: divAdjust,
  initValue: 2,
  max: 20,
  min: 1,
  step: 1,
  color: '40, 100%, 50%',
  transform: 'parseInt(#paraValue#)',
  requiresReset: false,
  runFAtEnd: '',
};

parameterData[7] = {
  name: 'quarantineAfter',
  div: 'Quarantine after @@@ days of Infection',
  initValue: 10,
  max: 100,
  min: 1,
  step: 1,
  color: '10, 100%, 63%',
  transform: 'parseInt(#paraValue#)',
  requiresReset: false,
  runFAtEnd: '',
};
parameterData[8] = {
  name: 'startQ',
  div: 'Begin quarantine zone @@@ days after the beginning of the epidemic',
  initValue: 2,
  max: 100,
  min: 0,
  step: 1,
  color: '10, 100%, 63%',
  transform: 'parseInt(#paraValue#)',
  requiresReset: false,
  runFAtEnd: '',
};
parameterData[9] = {
  name: 'probabilityOfNoSymptoms',
  div: "@@@% of the infected, don't show symptoms, hence, won't be quarantined.",
  initValue: 2,
  max: 100,
  min: 0,
  step: 0.1,
  color: '58, 100%, 50%',
  transform: 'parseFloat(#paraValue#)/100',
  requiresReset: false,
  runFAtEnd: '',
};
parameterData[10] = {
  name: 'probabilityCLVisit',
  div: 'There is @@@% chance that an individual visits the central location in any given hour.',
  initValue: 0.4,
  max: 2,
  min: 0,
  step: 0.001,
  color: '280, 100%, 80%',
  transform: 'parseFloat(#paraValue#)/100',
  requiresReset: false,
  runFAtEnd: '',
};
parameterData[11] = {
  name: 'travelProbability',
  div: 'There is a @@@% chance of travel by an individual on a given day to another community',
  initValue: 2,
  max: 10,
  min: 0,
  step: 0.01,
  color: '76, 100%, 50%',
  transform: 'parseFloat(#paraValue#)/100',
  requiresReset: false,
  runFAtEnd: '',
};
parameterData[12] = {
  name: 'nPerCommunity',
  div: '@@@ individuals per community',
  initValue: 60,
  max: 500,
  min: 3,
  step: 1,
  color: '76, 100%, 50%',
  transform: 'parseInt(#paraValue#)',
  requiresReset: true,
  runFAtEnd: '',
};
parameterData[13] = {
  name: 'infectNCommunitiesInitially',
  div: 'Infect only @@@ communities initially',
  initValue: 2,
  max: 9,
  min: 1,
  step: 1,
  color: '76, 100%, 50%',
  transform: 'parseInt(#paraValue#)',
  requiresReset: true,
  runFAtEnd: '',
};

parameterData[14] = {
  name: 'numberOfParticles',
  div: 'Number of Particles &nbsp&nbsp @@@',
  initValue: 200,
  max: 2000,
  min: 10,
  step: 1,
  color: '198, 100%, 50%',
  transform: 'parseInt(#paraValue#)',
  requiresReset: true,
  runFAtEnd: '',
};
parameterData[15] = {
  name: 'particleSize',
  div: 'Particle Size &nbsp&nbsp @@@',
  initValue: 0.7,
  max: 1,
  min: 0.1,
  step: 0.001,
  color: '198, 100%, 50%',
  transform: 'parseFloat(#paraValue#)',
  requiresReset: true,
  runFAtEnd: '',
};
parameterData[16] = {
  name: 'frameRate',
  div: 'Frame Rate &nbsp&nbsp @@@',
  initValue: 40,
  max: 100,
  min: 10,
  step: 1,
  color: '198, 100%, 50%',
  transform: 'parseInt(#paraValue#)',
  requiresReset: true,
  runFAtEnd: 'setAnimationDetails()',
};

divAdjust =
  '@@@ days simulated every second <br/><font style="color:grey; font-size: 1.2vmax;"> (Might vary depending on your device clock speed.)</font>';
if (dmode == 'landscape') {
  divAdjust =
    '@@@ days simulated every second <br/><font style="color:grey; font-size: 0.8vmax;"> (Might vary depending on your device clock speed.)</font>';
}
parameterData[17] = {
  name: 'daysEverySecond',
  div: divAdjust,
  initValue: 3,
  max: 20,
  min: 1,
  step: 1,
  color: '198, 100%, 50%',
  transform: 'parseInt(#paraValue#)',
  requiresReset: true,
  runFAtEnd: 'setAnimationDetails()',
};

parameterSliderRMap = {};

parameterHScroll();

addVariousParameters();

infectionStates = ['infected', 'susceptible', 'removed'];
stateColors = {
  infected: '10, 100%,70%',
  susceptible: '195, 100%, 50%',
  removed: '190, 0%, 40%',
  noSymptoms: '58, 100%, 50%',
};

loopcount = 0;
timecount = 0;
playing = true;

frameInterval = 0;
calculationFrameInterval = 0;

timeStepsPerDay = 24;
timeStep = 1 / timeStepsPerDay;

particleVicinityDB = {};
allParticleVicinityDB = {};
vicinityDelta = 0.1;

particleCounts = {};
particleDataArr = {
  infected: [],
  susceptible: [],
  removed: [],
};

particleCountTimeLine = {};

particleInfectionCount = {};

setUpPlotGraph();

simpleCaseBoundaryRanges = [-1, 1, -1, 1];
boundaryData = {};

particleData = {};
particleID = 1;

initialParticleV = 0.2;
speedLimit = 0.1;
accLimit = 0.01;

boundaryForceC = 0.1;
randomSmallJerk = 0.001;

toInfectCommunities = {};
communitiesNames = [];

toInfectCommunitiesQuarantine = {};
communitiesQuarantineNames = [];

setUpSimpleCaseGraph();

setUpCommunitiesCaseGraph();

setUpCommunitiesQuarantineCaseGraph();

currentSim = 'simpleCase';
currentSimG = 'simpleCaseGraphG';

visitCLAndReturnDuration = timeStepsPerDay * 2;
fractionOfDurationToReachCL = 0.3;
returnToCLFactor = 1 - fractionOfDurationToReachCL;

interactionAnimation = true;

setAnimationDetails();

dayCount = 0;

playCalculationLoop();
playAnimationLoop();

handleCases = {
  simpleCaseoption: {
    false: ['simpleCaseGraphH', 'simpleCase', 'simpleCaseGraphG'],
    true: ['simpleCaseGraph&QH', 'simpleCase&Q', 'simpleCaseGraph&QG'],
  },
  centralLocationoption: {
    false: [
      'centralLocationCaseGraphH',
      'centralLocationCase',
      'centralLocationCaseG',
    ],
    true: [
      'centralLocationQuarantineCaseGraphH',
      'centralLocationQuarantineCase',
      'centralLocationQuarantineCaseGraph',
    ],
  },
  communitiesoption: {
    false: ['communitiesCaseGraphH', 'communitiesCase', 'communitiesCaseGraph'],
    true: [
      'communitiesQuarantineCaseGraphH',
      'communitiesQuarantineCase',
      'communitiesQuarantineCaseGraph',
    ],
  },
};

graphToQMap = {};
graphToQMap['simpleCase'] = [
  'simpleCase&Q',
  'simpleCaseGraph&QG',
  'simpleCaseGraph&QH',
  'simpleCaseGraphH',
  'Simple Case',
];
graphToQMap['simpleCase&Q'] = [
  'simpleCase',
  'simpleCaseGraphG',
  'simpleCaseGraphH',
  'simpleCaseGraph&QH',
  'Simple Case with Quarantine',
];

graphToQMap['centralLocationQuarantineCase'] = [
  'centralLocationCase',
  'centralLocationCaseG',
  'centralLocationCaseGraphH',
  'centralLocationQuarantineCaseGraphH',
  'Central Location Case with Quarantine',
];
graphToQMap['centralLocationCase'] = [
  'centralLocationQuarantineCase',
  'centralLocationQuarantineCaseGraph',
  'centralLocationQuarantineCaseGraphH',
  'centralLocationCaseGraphH',
  'Central Location Case',
];

graphToQMap['communitiesQuarantineCase'] = [
  'communitiesCase',
  'communitiesCaseGraph',
  'communitiesCaseGraphH',
  'communitiesQuarantineCaseGraphH',
  'Community Travel Case with Quarantine',
];
graphToQMap['communitiesCase'] = [
  'communitiesQuarantineCase',
  'communitiesQuarantineCaseGraph',
  'communitiesQuarantineCaseGraphH',
  'communitiesCaseGraphH',
  'Community Travel Case',
];

quarantineOn = false;
