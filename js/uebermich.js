// Seite Über mich

// Button "Mehr Bilder anzeigen" für die Fotogalerie
document.addEventListener("DOMContentLoaded", function () {
    // Button-Element abrufen
    const button = document.querySelector(".mehr-bilder");
    // Container für die Bilder abrufen
    const galleryContainer = document.querySelector(".gallery-container");
    // Bilder, die hinzugefügt werden sollen
    const extraBilder = `
        <li class="gallery-column column-3">
                    <img class="small" src="img/galerie8.webp" alt="Hannah jubelt nach einem Tor">
                    <img class="tall" src="img/galerie9.webp" alt="Hannah im Zweikampf">
        </li>
        <li class="gallery-column column-1">
                    <img src="img/galerie10.webp" alt="Hannah auf dem Spielfeld">
                    <img src="img/galerie11.webp" alt="Hannah lächelt nach einem Sieg">
                    <img src="img/galerie12.webp" alt="Hannah beim Aufwärmen auf dem Platz">
        </li>
        <li class="gallery-column column-2">
                    <img class="tall" src="img/galerie13.webp" alt="Hannah mit der Rückennummer 11">
                    <img class="small" src="img/galerie14.webp" alt="Hannah klatschend nach einem Spiel">
        </li>
    `;
    // Event-Listener für den Button
    button.addEventListener("click", function () {
        // Neues Bilder am Ende der Galerie vor dem Button einfügen
        button.parentElement.insertAdjacentHTML("beforebegin", extraBilder);
        // Button ausblenden
        button.style.display = "none";
    });
});

// Event Listener für Download-Button 23/24
document.querySelectorAll('.download-button23').forEach(button => {
    button.addEventListener('click', function () {
        // Holen des PDF-Dateipfads aus den data-Attributen
        const pdfUrl = button.getAttribute('data-pdf');
        // Öffnen des PDFs in einem neuen Tab
        window.open(pdfUrl, '_blank');
    });
});

// Event Listener für Download-Button 24/25
document.querySelectorAll('.download-button24').forEach(button => {
    button.addEventListener('click', function () {
        // Holen des PDF-Dateipfads aus den data-Attributen
        const pdfUrl = button.getAttribute('data-pdf');
        // Öffnen des PDFs in einem neuen Tab
        window.open(pdfUrl, '_blank');
    });
});