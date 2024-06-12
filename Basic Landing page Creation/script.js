const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery img');
const totalImages = images.length;
const imagesPerView = 4;
let currentIndex = 0;

function moveGallery() {
    currentIndex = (currentIndex +1) % totalImages;
    const moveBy = (currentIndex * 150) / imagesPerView;
    gallery.style.transform = `translateX(-${moveBy}%)`;
}

setInterval(moveGallery, 3000);
