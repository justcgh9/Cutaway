const prevBtn = document.getElementById('prev_btn');
const nextBtn = document.getElementById('next_btn');

const activePhoto = document.getElementById('active_photo');

let photosNum = 4;

let photoInd = 0;
let photo = 'photos/img' + photoInd + '.jpg';

prevBtn.addEventListener('click', () => {
    photoInd = (photoInd - 1 + photosNum) % photosNum;
    updatePhoto();
})

nextBtn.addEventListener('click', () => {
    photoInd = (photoInd + 1) % photosNum;
    updatePhoto();
})

function updatePhoto() {
    photo = 'photos/img' + photoInd + '.jpg';
    console.log(photo);
    activePhoto.src = photo;
}


    const aboutLink = document.getElementById("about");
    const photosLink = document.getElementById("photos");
    const portfolioLink = document.getElementById("portfolio");
    const contactLink = document.getElementById("contact");

    const infoAbout = document.getElementById("info-about");
    const infoPhotos = document.getElementById("info-photo");
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


    //TODO change me ahahahahha
    let slideIndex = 1;
    showSlides(slideIndex);

    function changeSlide(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let slides = document.querySelectorAll(".main-photo img");
        let captions = [
            "Caption for Photo 1",
            "Caption for Photo 2",
            "Caption for Photo 3",
            "Caption for Photo 4"
        ];
        let thumbnails = document.querySelectorAll(".thumbnail-container img");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        slides.forEach((slide, index) => {
            slide.style.display = (index + 1 === slideIndex) ? "block" : "none";
        });
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.classList.toggle("active", index + 1 === slideIndex);
        });
        document.querySelector(".main-photo .caption").textContent = captions[slideIndex - 1];
    }

    window.changeSlide = changeSlide;
    window.currentSlide = currentSlide;