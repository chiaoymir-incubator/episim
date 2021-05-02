function randomWeightedChoice(choicearray, weightArray) {
  if (choicearray.length == weightArray.length) {
    weightSumA = weightArray.reduce(function (a, b) {
      return a + b;
    }, 0);
    weightvalueChosen = Math.random() * weightSumA;
    weightSumZ = 0;
    for (weightIndex = 0; weightIndex < weightArray.length; weightIndex++) {
      weightSumZ = weightSumZ + weightArray[weightIndex];
      if (weightSumZ >= weightvalueChosen) {
        indexchosenW = weightIndex;
        break;
      }
    }
    return choicearray[indexchosenW];
  }
}
