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

// Menü schließen, wenn auf "Über mich", "Mein Weg als Sportlerin" oder "Fanclub" geklickt wird
document.querySelectorAll('.ueber_mich, .sportlerin, .fanclub').forEach(item => {
    item.addEventListener('click', function() {
        document.getElementById('menu').style.display = 'none';
    });
});

// Button "Mehr anzeigen" für die nächsten Spiele
document.addEventListener("DOMContentLoaded", function () {
    // Button-Element abrufen
    const button = document.querySelector(".mehr-anzeigen");
    
    // Container für die Spiele abrufen
    const spielplanContainer = document.querySelector(".spielplan-container");

    // Spiel, das hinzugefügt werden soll
    const neuesSpiel = `
        <li class="spiel">
            <div class="team">
                <img src="img/Hoffenheim.png" alt="Logo vom Verein TSG 1899 Hoffenheim">
                <p class="team-name">TSG 1899 Hoffenheim</p>
            </div>
            <div class="info">
                <p class="versus">vs.</p>
                <p class="datum">11.05.2025</p>
                <p class="uhrzeit">12:00 Uhr</p>
            </div>
            <div class="team">
                <img src="img/Jena_logo.png" alt="Logo vom Verein FC Carl Zeiss Jena">
                <p class="team-name">FC Carl Zeiss Jena</p>
            </div>
        </li>
    `;

    // Event-Listener für den Button
    button.addEventListener("click", function () {
        // Neues Spiel am Ende der Liste vor dem Button einfügen
        button.parentElement.insertAdjacentHTML("beforebegin", neuesSpiel);

        // Button ausblenden, wenn nur ein weiteres Spiel hinzugefügt werden soll
        button.style.display = "none";
    });
});

// Button "Mehr Bilder anzeigen" für die Fotogalerie
document.addEventListener("DOMContentLoaded", function () {
    // Button-Element abrufen
    const button = document.querySelector(".mehr-bilder");
    
    // Container für die Bilder abrufen
    const galleryContainer = document.querySelector(".gallery-container");

    // Bilder, die hinzugefügt werden sollen
    const extraBilder = `
        <li class="gallery-column column-3">
                    <img class="small" src="img/galerie8.svg" alt="Hannah jubelt nach einem Tor">
                    <img class="tall" src="img/galerie9.svg" alt="Hannah im Zweikampf">
        </li>
        <li class="gallery-column column-1">
                    <img src="img/galerie10.svg" alt="Hannah auf dem Spielfeld">
                    <img src="img/galerie11.svg" alt="Hannah lächelt nach einem Sieg">
                    <img src="img/galerie12.svg" alt="Hannah beim Aufwärmen auf dem Platz">
        </li>
        <li class="gallery-column column-2">
                    <img class="tall" src="img/galerie13.svg" alt="Hannah mit der Rückennummer 11">
                    <img class="small" src="img/galerie14.svg" alt="Hannah klatschend nach einem Spiel">
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

