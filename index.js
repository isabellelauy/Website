const hamMenu = document.getElementById('ham-menu');
const offScreenMenu = document.getElementById('off-screen-menu');

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