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

// Menü öffnen
document.getElementById('menuButton').addEventListener('click', function() {
    document.getElementById('menu').style.display = 'flex';
});

// Menü schließen
document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('menu').style.display = 'none';
});

// Menü ausblenden, wenn die Seite geladen wird
document.getElementById("menu").style.display = "none";

// Menü schließen, wenn auf das Logo oder "Home" geklickt wird
document.querySelectorAll('.home').forEach(item => {
    item.addEventListener('click', function() {
        document.getElementById('menu').style.display = 'none';
    });
});

// Menü schließen, wenn auf "Über mich" geklickt wird
document.getElementById('.ueber_mich').addEventListener('click', function() {
    document.getElementById('menu').style.display = 'none';
});

// Menü schließen, wenn auf "Mein Weg als Sportlerin" geklickt wird
document.getElementById('.sportlerin').addEventListener('click', function() {
    document.getElementById('menu').style.display = 'none';
});

// Menü schließen, wenn auf "Fanclub Meschi#11" geklickt wird
document.getElementById('.fanclub').addEventListener('click', function() {
    document.getElementById('menu').style.display = 'none';
});