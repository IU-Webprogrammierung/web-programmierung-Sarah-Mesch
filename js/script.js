// auf allen Seiten

// Toggle Schwarz-Weiß-Modus
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Prüfen, ob der Modus gespeichert ist
    if (localStorage.getItem("grayscaleMode") === "enabled") {
        body.classList.add("grayscale");
        toggle.checked = true;
    }

    // Event-Listener für den Toggle-Schalter
    toggle.addEventListener("change", function () {
        if (this.checked) {
            body.classList.add("grayscale");
            localStorage.setItem("grayscaleMode", "enabled");
        } else {
            body.classList.remove("grayscale");
            localStorage.setItem("grayscaleMode", "disabled");
        }
    });
});

// Menü öffnen
document.getElementById('menuButton').addEventListener('click', function () {
    document.getElementById('menu').style.display = 'flex';
});

// Menü schließen
document.getElementById('closeButton').addEventListener('click', function () {
    document.getElementById('menu').style.display = 'none';
});

// Menü ausblenden, wenn die Seite geladen wird
document.getElementById("menu").style.display = "none";

// Menü schließen, wenn auf das Logo oder "Home" geklickt wird
document.querySelectorAll('.home').forEach(item => {
    item.addEventListener('click', function () {
        document.getElementById('menu').style.display = 'none';
    });
});

// Menü schließen, wenn auf "Über mich", "Mein Weg als Sportlerin" oder "Fanclub" geklickt wird
document.querySelectorAll('.ueber_mich, .sportlerin, .fanclub').forEach(item => {
    item.addEventListener('click', function () {
        document.getElementById('menu').style.display = 'none';
    });
});

