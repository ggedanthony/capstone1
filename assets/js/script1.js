var slider4 = document.getElementById("customRange4");
var output4 = document.getElementById("demo4");
output4.innerHTML = slider4.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider4.oninput = function() {
  output4.innerHTML = this.value;
}