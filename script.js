// Slider For Home Page //
const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider img');

//Buttons For Slider On Home Page //
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter //
let counter = 1;
const size = sliderImages[0].clientWidth;

slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button Listeners //
nextBtn.addEventListener('click',()=>{
    slider.style.transition = "transform 0.4s ease-in-out";
    counter ++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    slider.style.transition = "transform 0.4s ease-in-out";
    counter --;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});