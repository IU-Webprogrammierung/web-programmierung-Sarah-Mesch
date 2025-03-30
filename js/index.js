// Seite Homepage

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
                <img src="img/Hoffenheim_logo.png" alt="Logo vom Verein TSG 1899 Hoffenheim">
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