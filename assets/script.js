// Render the nav-links after everything has loaded in order to avoid layout shift
function onReady() {
	document.querySelectorAll(".flex-hidden-before-load").forEach(ele => {
		ele.style.display = "flex";
	});
	document.querySelectorAll(".block-hidden-before-load").forEach(ele => {
		ele.style.display = "block";
	});
}

if (document.readyState === "complete") {
    onReady(); // Or setTimeout(onReady, 0); if you want it consistently async
} else {
    document.addEventListener("DOMContentLoaded", onReady);
}

function copyKey() {
	let text = document.getElementById('apiKey').innerHTML;
	navigator.clipboard.writeText(text);
	console.log('Content copied to clipboard');
	let buttonText = document.getElementById('copyKeyButton').innerHTML 
	buttonText = buttonText.replace("API Key", "Copied!")
	document.getElementById('copyKeyButton').innerHTML = buttonText;
}

function nextTestimonial() {
	const slidesContainer = document.getElementById("testimonialSlideContainer");
	const nextTestimonialButton = document.getElementById("nextTestimonial");
	const slide = document.querySelector(".slide");

	let slideWidth = slide.clientWidth;
	slidesContainer.scrollLeft += slideWidth;
}


function previousTestimonial() {
	const slidesContainer = document.getElementById("testimonialSlideContainer");
	const nextTestimonialButton = document.getElementById("nextTestimonial");
	const slide = document.querySelector(".slide");

	let slideWidth = slide.clientWidth;
	slidesContainer.scrollLeft -= slideWidth;
};

document.getElementById("nextTestimonial").addEventListener("click", nextTestimonial);
document.getElementById("previousTestimonial").addEventListener("click", previousTestimonial);
