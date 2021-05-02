function playpauseSim(event) {
  if (playing) {
    playing = false;
    document.getElementById('playbutton').value = 'PLAY';
  } else {
    playing = true;
    document.getElementById('playbutton').value = 'PAUSE';
  }
}
