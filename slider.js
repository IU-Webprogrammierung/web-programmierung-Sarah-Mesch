// Werdegang Slider
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active")); 
    slides[index].classList.add("active"); 
}
document.querySelector(".left-arrow").onclick = () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
};
document.querySelector(".right-arrow").onclick = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
};
showSlide(currentSlide);