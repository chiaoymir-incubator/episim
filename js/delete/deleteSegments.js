function deleteSegments(collection) {
  if (typeof collection != 'undefined') {
    for (f = 0; f < collection.length; f++) {
      collection[f].outerHTML = '';
    }
  }
}
