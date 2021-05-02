function gridtickvalues(valmin, valmax, ticksexpected) {
  expstring = ((valmax - valmin) / ticksexpected).toExponential();
  majorgridorder = parseFloat(
    Math.pow(10, expstring.slice(expstring.indexOf('e') + 1))
  );

  if (expstring.indexOf('.') != -1) {
    majorgriddivision = parseFloat(
      expstring.slice(0, expstring.indexOf('.')) * majorgridorder
    );
  } else {
    majorgriddivision = parseFloat(
      expstring.slice(0, expstring.indexOf('e')) * majorgridorder
    );
  }

  integerchoices = [1, 2, 5, 10];
  for (choice = 0; choice < integerchoices.length - 1; choice++) {
    if (majorgriddivision < integerchoices[choice + 1] * majorgridorder) {
      majorgriddivisionchoice = majorgridorder * integerchoices[choice];
      break;
    }
  }

  if (valmin > 0) {
    majorgridstart =
      Math.ceil(valmin / majorgriddivisionchoice) * majorgriddivisionchoice;
    majorgridstart = majorgridstart - majorgriddivisionchoice;
  } else if (valmin < 0) {
    majorgridstart =
      Math.floor(valmin / majorgriddivisionchoice) * majorgriddivisionchoice;
  } else {
    majorgridstart = majorgriddivisionchoice;
  }

  // majorgridstart = majorgridstart - majorgriddivisionchoice
  // console.log(majorgridstart, (valmax + majorgriddivisionchoice), majorgriddivisionchoice)

  majortickvalues = [];
  for (
    majoraxispoint = majorgridstart;
    majoraxispoint < valmax + majorgriddivisionchoice;
    majoraxispoint = majoraxispoint + majorgriddivisionchoice
  ) {
    majortickvalues.push(majoraxispoint);
  }

  return majortickvalues;
}
