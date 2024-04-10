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

//Creation of dots

for (i=0; i<slides.length; i++) {
	let dotDiv = document.querySelector(".dots");
	let newSpan = document.createElement("span");
	dotDiv.appendChild(newSpan);
	newSpan.classList.add("dot");	
}

//Function to change and charge the images and taglines.
function bannering(order) {
	console.log("Este es el parámetro "+ order);
    let container = document.getElementById("banner");
	let imago = document.querySelector(".banner-img");
    let motto = container.querySelector("p");

    imago.src = slides[order].image; // Cambiar por la ruta de tu nueva imagen
	motto.innerHTML = slides[order].tagLine;
}

let currentImage = slides[0].image;
let currentTagline = slides[0].tagLine;

let k=0;

let leftie=document.getElementById("leftie");
leftie.addEventListener("click", function(event) {
	k--;
	if (k<0) {
		k=slides.length-1;
	}
	bannering(k); 
	
});

let rightey = document.getElementById("rightey");

rightey.addEventListener("click", function(event) {
	k++;
	if (k>=slides.length) {
		k=0;
	}
	bannering(k);
});







