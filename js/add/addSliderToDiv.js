function addSliderToDiv(holderName, slidername, slideroptions) {
  slideroptions = slideroptions || {};

  slideroptions.classname = slideroptions.classname || 'standardSlider';

  var sliderinputElement = document.createElement('input');
  sliderinputElement.type = 'range';
  sliderinputElement.setAttribute('min', slideroptions.min);
  sliderinputElement.setAttribute('max', slideroptions.max);
  sliderinputElement.setAttribute('step', slideroptions.step);
  sliderinputElement.setAttribute('value', slideroptions.value);
  sliderinputElement.setAttribute('id', slidername);
  sliderinputElement.setAttribute('class', slideroptions.classname);
  sliderinputElement.setAttribute('oninput', slideroptions.eventFunction);

  holderDiv = document.getElementById(holderName);

  holderDiv.appendChild(sliderinputElement);

  sliderinputElement.style.width = slideroptions.w;
  sliderinputElement.style.height = slideroptions.h;
  sliderinputElement.style.backgroundColor = slideroptions.sliderbasecolor;

  sliderDivData[slidername] = [holderDiv, slidername, slideroptions];
  return [slidername, holderDiv];
}
