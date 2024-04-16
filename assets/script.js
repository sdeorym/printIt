//Content of the banner
const slides = [
	{
		image: "./assets/images/slideshow/slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: "./assets/images/slideshow/slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: "./assets/images/slideshow/slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image: "./assets/images/slideshow/slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

//Variable initialisation -besides initial array
let index = 0;
let bannerPoints = [];
let dotDiv = "";
let newSpan = "";
let currentImage = "";
let currentTagline = "";
let leftArrow = document.getElementById("leftArrow");
let rightArrow = document.getElementById("rightArrow");
let container = "";
let imago = "";
let motto = "";

//Creation of dots
for (i = 0; i<slides.length; i++) {
	dotDiv = document.querySelector(".dots");
	newSpan = document.createElement("span");	
	dotDiv.appendChild(newSpan);
	newSpan.classList.add("dot");
	bannerPoints.push(newSpan);
}


// Images and arrows
currentImage = slides[index].image;
currentTagline = slides[index].tagLine;
bannerPoints[index].classList.add("dot_selected")


// Event Listeners
leftArrow.addEventListener("click", function(event) {
	bannerPoints[index].classList.remove("dot_selected")
	index--;	
	if (index < 0) {
		index = slides.length-1;
	}
	bannering(index); 	
});

rightArrow.addEventListener("click", function(event) {	
	bannerPoints[index].classList.remove("dot_selected")
	index++;
	if (index >= slides.length) {
		index = 0;
	}
	bannering(index);
});

//Function to change and charge the images and taglines.
function bannering(index) {
    container = document.getElementById("banner");
	imago = document.querySelector(".banner-img");
    motto = container.querySelector("p");
    imago.src = slides[index].image; 
	motto.innerHTML = slides[index].tagLine;
	bannerPoints[index].classList.add("dot_selected")
}





