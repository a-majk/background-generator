var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomizer");
	
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
};

function randomizeColor() {
	color1.value = "#" + getRndInteger(0, 99) + getRndInteger(0, 99) + getRndInteger(0, 99);
	color2.value = "#" + getRndInteger(0, 99) + getRndInteger(0, 99) + getRndInteger(0, 99);
	setGradient();
	// body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value +")";
	// css.textContent = body.style.background;
};

function setGradient() {
	// css.innerHTML = "";
	// css.appendChild(document.createTextNode("Color: " + color1.value + " " + color2.value));
	// css.textContent = body.style.background;
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value +")";
	css.textContent = body.style.background;
}; 

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomizeColor);

setGradient();

