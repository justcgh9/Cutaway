const prevBtn = document.getElementById('prev_btn');
const nextBtn = document.getElementById('next_btn');
const photos = document.querySelectorAll('.thumbnail')

const activePhoto = document.getElementById('active_photo');

let photosNum = 4;

let photoInd = 1;
let photo = 'photos/img' + photoInd + '.jpg';

updatePhoto()

prevBtn.addEventListener('click', () => {
    photoInd = (photoInd - 1 + photosNum) % photosNum;
    updatePhoto();
})

nextBtn.addEventListener('click', () => {
    photoInd = (photoInd + 1) % photosNum;
    updatePhoto();
})

photos.forEach(photo => {
    photo.addEventListener('click', () => {
        photoInd = parseInt(photo.id);
        updatePhoto();
    })
})

function updatePhoto() {
    photo = 'photos/img' + photoInd + '.jpg';
    photos.forEach(ph => {
        ph.style.opacity = ph.id == photoInd ? 1 : 0.6;
    })
    console.log(photo);
    activePhoto.src = photo;
}

const scrollableDiv = document.querySelector('.portfolio_content');

// requestAnimationFrame(() => {
//     scrollableDiv.scrollTop = 0;
// });


scrollableDiv.addEventListener('wheel', (event) => {
            event.preventDefault();
            scrollableDiv.scrollTop += event.deltaY;
            // console.log(scrollableDiv.scrollTop)
});


const aboutLink = document.getElementById("about");
const photosLink = document.getElementById("photos");
const portfolioLink = document.getElementById("portfolio");
const contactLink = document.getElementById("contact");
const comicLink = document.getElementById("comic");

const infoAbout = document.getElementById("info-about");
const infoPhotos = document.getElementById("info-photo");
const infoPortfolio = document.getElementById("info-portfolio");
const infoContact = document.getElementById("info-contact");
const infoComic = document.getElementById("info-comic");

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
        scrollableDiv.scrollTop = 0 
        info.classList.remove("hide");
        info.classList.add("show");
        currentInfo = info;
    });
}

setParallaxEffect(aboutLink, 'center 45%', infoAbout);
setParallaxEffect(contactLink, 'center 52.5%', infoContact);
setParallaxEffect(portfolioLink, 'center 50%', infoPortfolio);
setParallaxEffect(photosLink, 'center 47.5%', infoPhotos);
setParallaxEffect(comicLink, 'center 55%', infoComic);

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

const comicBtn = document.getElementById('comic-btn')
comicBtn.addEventListener('click', () => {
    window.open('comic.html', '_blank')
});
