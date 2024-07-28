const hamMenu = document.getElementById('ham-menu');
const offScreenMenu = document.getElementById('off-screen-menu');
const images = document.querySelectorAll('.main-image');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

//anything to do with the main-carousel

const track = document.querySelector('.main-carousel__track');
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = (slideWidth * index) + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    if (!targetSlide) return; // Check if targetSlide exists
    track.style.transition = 'transform 400ms ease-in'; // Ensure transition is applied
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// Function to initialize controls for each slide
const initializeSlideControls = (slide) => {
    const prevButton = slide.querySelector('.prev');
    const nextButton = slide.querySelector('.next');
    
    prevButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        if (prevSlide) { // Check if prevSlide exists
            moveToSlide(track, currentSlide, prevSlide);
        }
    });

    nextButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        if (nextSlide) { // Check if nextSlide exists
            moveToSlide(track, currentSlide, nextSlide);
        }
    });
};

// Initialize controls for each slide
slides.forEach(initializeSlideControls);

// Optional: Reset transition after moving
track.addEventListener('transitionend', () => {
    track.style.transition = '';
});

function scrollToSection() {
    const section = document.getElementById('done-section');
    const offset = 80;

    window.scrollTo({
        top: section.offsetTop - offset,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('playButton').addEventListener('click', scrollToSection);
});

//The switch-image function

images.forEach(image=> {
    const originalSrc = image.src;
    const hoverSrc = image.dataset.hover;

    image.addEventListener('mouseover', () => {
        image.src=hoverSrc;
    });

    image.addEventListener('mouseout', () => {
        image.src=originalSrc;
    });
});