// Wartet darauf, dass das HTML-Dokument vollständig geladen ist, bevor das Skript ausgeführt wird
document.addEventListener("DOMContentLoaded", function () {

    // Definiert das Zieldatum
    const zielDatum = new Date("2025-04-12T12:00:00").getTime();

    // Funktion zur Aktualisierung des Countdowns
    function updateCountdown() {
        // Aktuelles Datum und Uhrzeit in Millisekunden abrufen
        const jetzt = new Date().getTime();

        // Berechnet die verbleibende Zeit bis zum Zieldatum in Millisekunden
        const verbleibendeZeit = zielDatum - jetzt;

        // Falls das Zieldatum erreicht oder überschritten wurde
        if (verbleibendeZeit <= 0) {
            // Ersetzt den Countdown-Bereich mit der Nachricht "Spiel läuft!"
            document.querySelector(".grid-container-countdown").innerHTML = "<h3>Spiel läuft!</h3>";
            return; // Beendet die Funktion, um weitere Berechnungen zu verhindern
        }

        // Berechnung der verbleibenden Tage, Stunden, Minuten und Sekunden
        const tage = Math.floor(verbleibendeZeit / (1000 * 60 * 60 * 24)); // Tage berechnen
        const stunden = Math.floor((verbleibendeZeit % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Stunden berechnen
        const minuten = Math.floor((verbleibendeZeit % (1000 * 60 * 60)) / (1000 * 60)); // Minuten berechnen
        const sekunden = Math.floor((verbleibendeZeit % (1000 * 60)) / 1000); // Sekunden berechnen

        // Aktualisiert die HTML-Elemente mit den berechneten Werten
        document.querySelector(".box-countdown:nth-child(1) h3").textContent = tage; // Tage einfügen
        document.querySelector(".box-countdown:nth-child(1) time").setAttribute("datetime", `P${tage}D`);
        document.querySelector(".box-countdown:nth-child(2) h3").textContent = stunden; // Stunden einfügen
        document.querySelector(".box-countdown:nth-child(2) time").setAttribute("datetime", `PT${stunden}H`);
        document.querySelector(".box-countdown:nth-child(3) h3").textContent = minuten; // Minuten einfügen
        document.querySelector(".box-countdown:nth-child(3) time").setAttribute("datetime", `PT${minuten}M`);
        document.querySelector(".box-countdown:nth-child(4) h3").textContent = sekunden; // Sekunden einfügen
        document.querySelector(".box-countdown:nth-child(4) time").setAttribute("datetime", `PT${sekunden}S`);
    }

    // Führt die Funktion einmal beim Laden der Seite aus, damit sofort der aktuelle Wert angezeigt wird
    updateCountdown(); 

    // Aktualisiert den Countdown jede Sekunde (1000 Millisekunden)
    setInterval(updateCountdown, 1000);
});
