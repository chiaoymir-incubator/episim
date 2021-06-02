const timeline_obj = document.getElementById('mytineline');

function getSimParams() {
  var simParams = simulationParameters;
  console.log(simParams);

  // ========= recover parameter original value ===========
  simParams.probabilityCLVisit *= 100;
  simParams.probabilityOfNoSymptoms *= 100;
  simParams.probabilityofInfection *= 100;
  simParams.socialDistanceObedientPop *= 100;
  simParams.travelProbability *= 100;
  // ======================================================

  return simParams;
}

var param_list = [
  {
    start_day: 0,
    params: JSON.parse(JSON.stringify(getSimParams(simulationParameters))),
  },
];
var current_selected_idx = 0;
var setting_key_mode = true;
function updateAllKeyFramesUI() {
  console.log(param_list);
  timeline_obj.innerHTML = '';
  param_list = param_list.sort((x, y) => {
    return x.start_day - y.start_day;
  });
  param_list.map((currElement, i) => {
    k_obj = document.createElement('div');
    k_obj.classList.add('keyframe');
    if (i == current_selected_idx) {
      k_obj.classList.add('selected_keyframe');
    } else {
      k_obj.addEventListener('click', function () {
        switchToKeyFrame(i);
        updateParametersUI();
      });
    }
    k_obj.innerHTML = currElement.start_day;
    timeline_obj.appendChild(k_obj);
  });
}

function updateParametersUI() {
  for (const param_title in paramName_DOM_mapping) {
    if (
      Object.values(parameterData).filter((x) => x.name === param_title)[0]
        .requiresReset == false
    ) {
      console.log(paramName_DOM_mapping[param_title]);
      let slider_controlUI = document.getElementById(
        paramName_DOM_mapping[param_title]
      );
      slider_controlUI.value =
        param_list[current_selected_idx].params[param_title];
      let devent = new Event('input', {
        bubbles: true,
        cancelable: true,
      });
      slider_controlUI.dispatchEvent(devent);
    }

    // slider_controlUI.oninput()
    // $('#'+paramName_DOM_mapping[param_title]).trigger('input');
  }
}

function handleAddKeyframe(day) {
  let keyframe_day = prompt('Please enter keyframe day', 'Harry Potter');

  if (keyframe_day != null) {
    if (keyframe_day in param_list.map((x) => x.start_day)) {
      alert('keyframe exists');
    } else {
      param_list.push({
        start_day: keyframe_day,
        params: JSON.parse(JSON.stringify(getSimParams(simulationParameters))),
      });
      updateAllKeyFramesUI();
    }
  }
}

function uploadAddKeyFrame() {
  for (let day in eventArr) {
    var simParams = getSimParams(simulationParameters);
    for (let prop in eventArr[day]) {
      simParams[prop] = eventArr[day][prop];
    }
    param_list.push({
      start_day: day,
      params: JSON.parse(JSON.stringify(simParams)),
    });
    updateParametersUI();
    updateAllKeyFramesUI();
  }
}

function handlePlayingKeyframe() {
  if (current_selected_idx == param_list.length - 1) {
  } else {
    if (dayCount >= param_list[current_selected_idx + 1].start_day) {
      switchToKeyFrame(++current_selected_idx);
    }
  }
}

function deleteAllKeyFramesUI() {
  var init_params = param_list[0];
  param_list = [init_params];
}

function switchToKeyFrame(idx) {
  current_selected_idx = idx;
  // set simulator parameters to ketframe value
  simulationParameters = JSON.parse(
    JSON.stringify(param_list[current_selected_idx].params)
  );
  updateParametersUI();
  updateAllKeyFramesUI();
}
updateAllKeyFramesUI();
