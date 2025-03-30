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
