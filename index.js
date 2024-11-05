const carousel = document.querySelector('.carousel');
const totalItems = carousel.children.length;
const itemWidth = 15; // Širina svakog sponzora u procentima
let index = 0;

setInterval(() => {
    index = (index + 1) % totalItems; // Povećaj indeks
    carousel.style.transform = `translateX(-${itemWidth * index}%)`; // Pomeri karusel
}, 3000); // Pomeranje svake 3 sekunde
