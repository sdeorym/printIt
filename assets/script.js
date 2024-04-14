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

let bannerPoints = [];

//Creation of dots
for (i=0; i<slides.length; i++) {	
	let dotDiv = document.querySelector(".dots");
	let newSpan = document.createElement("span");	
	dotDiv.appendChild(newSpan);
	newSpan.classList.add("dot");
	bannerPoints.push(newSpan);
}

let currentImage = slides[0].image;
let currentTagline = slides[0].tagLine;

let k=0;
bannerPoints[k].classList.add("dot_selected")

let leftie=document.getElementById("leftie");
leftie.addEventListener("click", function(event) {
	bannerPoints[k].classList.remove("dot_selected")
	k--;
	if (k<0) {
		k=slides.length-1;
	}
	bannering(k); 
	
});

let rightey = document.getElementById("rightey");

rightey.addEventListener("click", function(event) {
	bannerPoints[k].classList.remove("dot_selected")
	k++;
	if (k>=slides.length) {
		k=0;
	}
	bannering(k);
});

//Function to change and charge the images and taglines.
function bannering(order) {
    let container = document.getElementById("banner");
	let imago = document.querySelector(".banner-img");
    let motto = container.querySelector("p");
    imago.src = slides[order].image; 
	motto.innerHTML = slides[order].tagLine;
	bannerPoints[order].classList.add("dot_selected")
}





