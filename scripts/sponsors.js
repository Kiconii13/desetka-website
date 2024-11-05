const carousel = document.querySelector('.carousel');
let offset = 0;

function slideCarousel() {
    const itemWidth = carousel.querySelector('.carousel-item').offsetWidth;
    offset -= itemWidth + 10; // Pomeri za širinu jedne stavke plus marginu

    if (Math.abs(offset) >= carousel.scrollWidth / 2) {
        offset = 0; // Resetuje carousel na početak kada dođe do polovine
    }

    carousel.style.transform = `translateX(${offset}px)`;
}

// Automatsko pomeranje svakih 3 sekunde
setInterval(slideCarousel, 3000);