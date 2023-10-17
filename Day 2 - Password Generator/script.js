document.addEventListener("DOMContentLoaded", function () {
  var slider = document.getElementById("sliderRange");
  var output = document.getElementById("sliderNum");

  output.textContent = slider.value;

  slider.addEventListener("input", function () {
    output.textContent = this.value;
  });
});
