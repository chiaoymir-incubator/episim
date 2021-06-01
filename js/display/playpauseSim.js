function playpauseSim(event) {
  if (playing) {
    playing = false;
    document.getElementById('playbutton').value = 'PLAY';
    setting_key_mode = true
  } else {
    switchToKeyFrame(0)
    playing = true;
    document.getElementById('playbutton').value = 'PAUSE';
    setting_key_mode = false
  }
}
