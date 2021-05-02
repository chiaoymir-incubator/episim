function setFont(divCollection, fontval) {
  for (divN = 0; divN < divCollection.length; divN++) {
    document.getElementById(divCollection[divN]).style.fontSize = fontval;
  }
}
