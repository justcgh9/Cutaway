const prevBtn = document.getElementById('prev_btn') as HTMLElement;
const nextBtn = document.getElementById('next_btn') as HTMLElement;
const photos = document.querySelectorAll('.thumbnail');

const activePhoto = document.getElementById('active_photo') as HTMLImageElement;

let photosNum = 4;

let photoInd = 1;
let photo = '/photos/img' + photoInd + '.jpg';

updatePhoto();

prevBtn.addEventListener('click', () => {
    photoInd = (photoInd - 1 + photosNum) % photosNum;
    updatePhoto();
});

nextBtn.addEventListener('click', () => {
    photoInd = (photoInd + 1) % photosNum;
    updatePhoto();
});

photos.forEach(photo => {
    photo.addEventListener('click', () => {
        photoInd = parseInt(photo.id);
        updatePhoto();
    });
});

function updatePhoto(): void {
    photo = '/photos/img' + photoInd + '.jpg';
    photos.forEach(ph => {
        (ph as HTMLElement).style.opacity = ph.id == photoInd.toString() ? '1' : '0.6';
    });
    console.log(photo);
    activePhoto.src = photo;
}

const scrollableDiv = document.querySelector('.portfolio_content') as HTMLElement;

scrollableDiv.addEventListener('wheel', (event) => {
    event.preventDefault();
    scrollableDiv.scrollTop += event.deltaY;
});

const aboutLink = document.getElementById("about") as HTMLElement;
const photosLink = document.getElementById("photos") as HTMLElement;
const portfolioLink = document.getElementById("portfolio") as HTMLElement;
const contactLink = document.getElementById("contact") as HTMLElement;
const comicLink = document.getElementById("comic") as HTMLElement;

const infoAbout = document.getElementById("info-about") as HTMLElement;
const infoPhotos = document.getElementById("info-photo") as HTMLElement;
const infoPortfolio = document.getElementById("info-portfolio") as HTMLElement;
const infoContact = document.getElementById("info-contact") as HTMLElement;
const infoComic = document.getElementById("info-comic") as HTMLElement;

let currentInfo: HTMLElement | null = null;

function setParallaxEffect(link: HTMLElement, position: string, info: HTMLElement): void {
    link.addEventListener("mouseenter", function(): void {
        document.body.style.backgroundPosition = position;
        if (currentInfo && currentInfo !== info) {
            currentInfo.classList.remove("show");
            currentInfo.classList.add("hide");
            currentInfo.addEventListener('animationend', () => {
                currentInfo?.classList.remove("hide");
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
    a.addEventListener('mouseenter', function(this: HTMLElement): void {
        document.querySelectorAll('.menu a').forEach(el => {
            (el as HTMLElement).style.transform = "scale(.95)";
            (el as HTMLElement).style.opacity = ".5";
        });
        this.style.transform = "scale(1)";
        this.style.opacity = "1";
    });
});

const comicBtn = document.getElementById('comic-btn') as HTMLElement;
comicBtn.addEventListener('click', () => {
    window.open('comic.html', '_blank');
});
