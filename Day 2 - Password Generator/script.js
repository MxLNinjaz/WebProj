document.addEventListener("DOMContentLoaded", function () {
  var slider = document.getElementById("sliderRange");
  var output = document.getElementById("sliderNum");

  // Display the default value
  output.textContent = slider.value;

  // Update the displayed value as the slider is moved
  slider.addEventListener("input", function () {
    output.textContent = this.value;
  });
});
