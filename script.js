try{
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


	const prevBtn = document.getElementById('prev_btn1');
	const nextBtn = document.getElementById('next_btn');

	const activePhoto = document.getElementById('active_photo');

	let photosNum = 4;

	let photoInd = 0;
	let photo = 'photos/img' + photoInd + '.jpg';

	prevBtn.addEventListener('click', () => {
		photoInd = (photoInd-1 + photosNum) % photosNum;
		updatePhoto();
	})

	nextBtn.addEventListener('click', () => {
		photoInd = (photoInd++) % photosNum;
		updatePhoto();
	})

	function updatePhoto() {
		photo = 'photos/img' + photoInd + '.jpg';
		console.log(photo);
		activePhoto.src = photo;
	}


    // // Gallery setup
	// let slideIndex = 1;
    // showSlides(slideIndex);

    // function changeSlide(n) {
    //     showSlides(slideIndex += n);
    // }

    // function currentSlide(n) {
    //     showSlides(slideIndex = n);
    // }

    // function showSlides(n) {
    //     let slides = document.querySelectorAll(".main-photo img");
    //     let captions = [
    //         "Caption for Photo 1",
    //         "Caption for Photo 2",
    //         "Caption for Photo 3",
    //         "Caption for Photo 4"
    //     ];
    //     let thumbnails = document.querySelectorAll(".thumbnail-container img");
    //     if (n > slides.length) { slideIndex = 1 }
    //     if (n < 1) { slideIndex = slides.length }
    //     slides.forEach((slide, index) => {
    //         slide.style.display = (index + 1 === slideIndex) ? "block" : "none";
    //     });
    //     thumbnails.forEach((thumbnail, index) => {
    //         thumbnail.classList.toggle("active", index + 1 === slideIndex);
    //     });
    //     document.querySelector(".main-photo .caption").textContent = captions[slideIndex - 1];
    // }

    // window.changeSlide = changeSlide;
    // window.currentSlide = currentSlide;


	// // Gallery setup
    // const activePhoto = document.getElementById("active-photo");
    // const caption = document.getElementById("caption");
    // const previews = document.querySelectorAll(".previews img");
    // const prevButton = document.querySelector(".prev");
    // const nextButton = document.querySelector(".next");

    // let currentIndex = 0;

    // function showPhoto(index) {
    //     const photo = previews[index];
    //     activePhoto.src = photo.src;
    //     caption.textContent = photo.dataset.caption;
    //     currentIndex = index;
    // }

    // prevButton.addEventListener("click", function() {
    //     currentIndex = (currentIndex > 0) ? currentIndex - 1 : previews.length - 1;
    //     showPhoto(currentIndex);
    // });

    // nextButton.addEventListener("click", function() {
    //     currentIndex = (currentIndex < previews.length - 1) ? currentIndex + 1 : 0;
    //     showPhoto(currentIndex);
    // });

    // previews.forEach((preview, index) => {
    //     preview.addEventListener("click", function() {
    //         showPhoto(index);
    //     });
    // });

    // showPhoto(0); // Show the first photo initially


} catch (e) {
	console.log(e)
}