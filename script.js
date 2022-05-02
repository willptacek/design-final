const homePage = document.querySelector('.home-page-container');
const enterButton = document.querySelector('.enter-button');
const galleryPage = document.querySelector('.gallery-container')
const paintings = ['img/IMG_8002.jpg', 'img/IMG_7460.jpg', 'img/IMG_8012.jpg', 'img/IMG_8009.jpg', 'img/IMG_8006.jpg', 'img/asd copy.jpg']
const image = document.querySelector('.painting')
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const leaveButton = document.querySelector('.leave-button');
const title = document.querySelector('.title');
let paintingTracker = 0;

console.log(title.innerHTML);

function hideHomePage() {
    homePage.style.display= 'none';
    galleryPage.style.display= 'flex';
}

function showHomePage() {
    galleryPage.style.display = 'none';
    homePage.style.display = 'flex';
}

leftArrow.addEventListener('click', function() {
    if(paintingTracker != 0) {
        paintingTracker--;
    } else {
        paintingTracker = 5;
    }

    image.src = paintings[paintingTracker];
    title.innerHTML = paintings[paintingTracker];
});

rightArrow.addEventListener('click', function() {
    if(paintingTracker != 5) {
        paintingTracker++;
    } else {
        paintingTracker = 0;
    }

    image.src = paintings[paintingTracker];
    title.innerHTML = paintings[paintingTracker];

});

enterButton.addEventListener('click', hideHomePage);
leaveButton.addEventListener('click', showHomePage);