const sliderImage = document.getElementById("sliderImage");
const nextImageImage = document.getElementById("nextImage");
const prevImage = document.getElementById("prevImage");


let currentPicIndex = 0;


const images = [
    "img/image1.jpg",
    "img/image2.jpg",
    "img/image3.jpg"
]





nextImage.addEventListener("click", function () {
    currentPicIndex += 1;
    if (currentPicIndex >= images.length) {
        currentPicIndex = 0;
    }
    // sliderImage.style.backgroundImage = "URL(" + images[currentPicIndex] + ")";
    sliderImage.src = images[currentPicIndex];
});

prevImage.addEventListener("click", function () {
    currentPicIndex -= 1;
    if (currentPicIndex < 0) {
        currentPicIndex = images.length - 1;
    }
    // sliderImage.style.backgroundImage = "URL(" + images[currentPicIndex] + ")";
    sliderImage.src = images[currentPicIndex];
});