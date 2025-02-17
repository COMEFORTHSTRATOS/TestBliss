// This file contains the JavaScript code for the homepage. 
// You can add functionality such as event listeners, DOM manipulation, and interactive features below.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Homepage loaded successfully!');
    // Add your JavaScript code here
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}

document.getElementById('nextSlide').addEventListener('click', () => {
    showNextSlide();
});

document.getElementById('prevSlide').addEventListener('click', () => {
    showPrevSlide();
});

function showNextSlide() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
}

function showPrevSlide() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex--;
    if (slideIndex < 1) {slideIndex = slides.length}    
    slides[slideIndex-1].style.display = "block";  
}