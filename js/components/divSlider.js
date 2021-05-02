function divSlider(
  holder,
  divslidername,
  minval,
  maxval,
  currvalue,
  stepval,
  eventfunc,
  widthval,
  heightval,
  sliderTrackColor,
  thumbSize,
  thumbColor
) {
  options = {};
  options.min = minval;
  options.max = maxval;
  options.value = currvalue;
  options.step = stepval;
  options.eventFunction = eventfunc;
  options.w = widthval;
  options.h = heightval;
  options.sliderbasecolor = sliderTrackColor;
  // options.classname = sliderClass

  $(
    '<style>#' +
      divslidername +
      '::-webkit-slider-thumb {-webkit-appearance: none; appearance: none;width: ' +
      thumbSize +
      ';height: ' +
      thumbSize +
      ';border-radius: 50%; background: ' +
      thumbColor +
      ';cursor: pointer; }  #' +
      divslidername +
      '::-moz-slider-thumb {appearance: none;width: ' +
      thumbSize +
      ';height: ' +
      thumbSize +
      ';border-radius: 50%; background: ' +
      thumbColor +
      ';cursor: pointer; }</style>'
  ).appendTo('head');

  addSliderToDiv(holder, divslidername, options);
}
