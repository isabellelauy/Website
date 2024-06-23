const hamMenu = document.getElementById('ham-menu');
const offScreenMenu = document.getElementById('off-screen-menu');
const images = document.querySelectorAll('.main-image');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
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