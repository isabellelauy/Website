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
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth*index + 'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

prevButton.addEventListener('click', e=> {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
});

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
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