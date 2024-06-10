document.addEventListener("DOMContentLoaded", function() {

	const aboutLink = document.getElementById("about");
	const photosLink = document.getElementById("photos");
	const portfolioLink = document.getElementById("portfolio");
	const contactLink = document.getElementById("contact");

	const infoAbout = document.getElementById("info-about");
	const infoPhotos = document.getElementById("info-photos");
	const infoPortfolio = document.getElementById("info-portfolio");
	const infoContact = document.getElementById("info-contact");

	let currentInfo = null;

	function setParallaxEffect(link, position, info) {
		link.addEventListener("mouseenter", function() {
			document.body.style.backgroundPosition = position;
			if (currentInfo && currentInfo !== info) {
				currentInfo.classList.remove("show");
				currentInfo.classList.add("hide");
				currentInfo.addEventListener('animationend', () => {
					currentInfo.classList.remove("hide");
				}, { once: true });
			}
			info.classList.remove("hide");
			info.classList.add("show");
			currentInfo = info;
		});
	}


	setParallaxEffect(aboutLink, 'center 45%', infoAbout);
	setParallaxEffect(contactLink, 'center 52.5%', infoContact);
	setParallaxEffect(portfolioLink, 'center 50%', infoPortfolio);
	setParallaxEffect(photosLink, 'center 47.5%', infoPhotos);



	document.querySelectorAll('.menu a').forEach(a => {
		a.addEventListener('mouseenter', function() {
			document.querySelectorAll('.menu a').forEach(el => {
				el.style.transform = "scale(.95)";
				el.style.opacity = ".5";
			});
			this.style.transform = "scale(1)";
			this.style.opacity = "1";
		});
	});


	let slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	function showSlides(n) {
		console.log("Display slide " + n)
		let i;
		let slides = document.getElementsByClassName("mySlides");
		let dots = document.getElementsByClassName("demo");
		let captionText = document.getElementById("caption");
		if (n > slides.length) {slideIndex = 1}
		if (n < 1) {slideIndex = slides.length}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex-1].style.display = "block";
		dots[slideIndex-1].className += " active";
		captionText.innerHTML = dots[slideIndex-1].alt;
	} 

});


