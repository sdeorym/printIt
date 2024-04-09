//Content of the banner
const slides = [
	{
		image: "./images/slideshow/slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: "./images/slideshow/slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: "./images/slideshow/slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image: "./images/slideshow/slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

let dottie = slides.length;
	console.log("Tu as besoin de "+dottie+" bullet points.");
	
for (i=0; i<dottie; i++) {	
	let dotDiv = document.querySelector(".dots");
	let newSpan = document.createElement("span");
	newSpan.innerHTML = "  ●  ";
	dotDiv.appendChild(newSpan);	
}

let leftie=document.getElementById("leftie");

leftie.addEventListener("click", function(event) {
	console.log("Tu as pressé la flèche à gauche.");
});

let rightey = document.getElementById("rightey");

rightey.addEventListener("click", function(event) {
	console.log("Tu as pressé la flèche à droite.");
});





