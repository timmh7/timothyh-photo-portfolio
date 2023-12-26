// Code for portfolio photos fullscreen 
document.addEventListener('DOMContentLoaded', function () {
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
        container.addEventListener('click', function () {
            const image = this.querySelector('img');

            // Toggle fullscreen mode
            if (!document.fullscreenElement) {
                // Enter fullscreen
                image.requestFullscreen();
                // Remove hover effect class
                image.style.opacity = 1;
            } else {
                // Exit fullscreen
                document.exitFullscreen();
                image.style.opacity = '';
            }
        });
    });
});
/* -------------------------------------------------------------------------------- */
// Code for sliding cards LightRoom Presets
const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
const navButtons = document.querySelectorAll('.slider-nav a');

let currentIndex = 0; // Initialize with the first slide

function updateNavButtons() {
    navButtons.forEach((button, index) => {
        button.classList.toggle('active', index === currentIndex);
    });
}

function slideRight() {
    const totalWidth = slider.scrollWidth;
    const slideWidth = slider.clientWidth;
    slider.scrollLeft = slider.scrollLeft + slider.clientWidth;

    if (slider.scrollLeft + slideWidth >= totalWidth) {
        slider.scrollLeft = 0;
    }
}

function slideLeft() {
    const totalWidth = slider.scrollWidth;
    const slideWidth = slider.clientWidth;
    slider.scrollLeft = slider.scrollLeft - slider.clientWidth;

    if (slider.scrollLeft <= 0) {
        slider.scrollLeft = totalWidth;
    }
}

function handleScrollEnd() {
    currentIndex = Math.round(slider.scrollLeft / slider.clientWidth);
    updateNavButtons();
}

rightArrow.addEventListener('click', () => {
    slideRight();
    slider.scrollTo({
        left: slider.scrollLeft + slider.clientWidth,
        behavior: 'smooth'
    });
});

leftArrow.addEventListener('click', () => {
    slideLeft();
    slider.scrollTo({
        left: slider.scrollLeft - slider.clientWidth,
        behavior: 'smooth'
    });
});

slider.addEventListener('scroll', () => {
    clearTimeout(slider.scrollTimeout);
    slider.scrollTimeout = setTimeout(() => {
        handleScrollEnd();
    }, 5); // Adjust the delay (in milliseconds) based on your smooth scrolling duration
});

updateNavButtons(); // Initialize the navigation buttons

navButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const targetSlide = document.getElementById(`slide-${index + 1}`);
        const targetScrollLeft = targetSlide.offsetLeft;
        slider.scrollTo({
            left: targetScrollLeft,
            behavior: 'smooth'
        });
    });
});
/* -------------------------------------------------------------------------------- */


  