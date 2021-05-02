function parameterHScroll() {
  if (dmode == 'landscape') {
    stringToAddAsStyle =
      '<style>#parametersListH::-webkit-scrollbar { width: 0.4%;} #parametersListH::-webkit-scrollbar-track {-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1); border-radius: 30px;} #parametersListH::-webkit-scrollbar-thumb { background-color: hsla(190, 100%, 50%, 1); border-radius: 50px;}</style>';
  } else {
    stringToAddAsStyle =
      '<style>#parametersListH::-webkit-scrollbar { width: 1%;} #parametersListH::-webkit-scrollbar-track {-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1); border-radius: 30px;} #parametersListH::-webkit-scrollbar-thumb { background-color: hsla(190, 100%, 50%, 1); border-radius: 50px;}</style>';
  }

  $(stringToAddAsStyle).appendTo('head');
}
