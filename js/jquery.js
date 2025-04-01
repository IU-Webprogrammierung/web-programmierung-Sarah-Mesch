/* Header ausgelagert */

$(document).ready(function () {
    let currentPage = window.location.pathname;

    if (currentPage.endsWith("index.html")) {
        $("#header_index").load("components/header_index.html", function () {
            setMenuEvents();
        });
    } else if (currentPage.endsWith("ueber_mich.html")) {
        $("#header_uebermich").load("components/header_uebermich.html", function () {
            setMenuEvents();
        });
    } else if (currentPage.endsWith("mein_weg_als_sportlerin.html")) {
        $("#header_sportlerin").load("components/header_sportlerin.html", function () {
            setMenuEvents();
        });
    } else if (currentPage.endsWith("fanclub.html")) {
        $("#header_fanclub").load("components/header_fanclub.html", function () {
            setMenuEvents();
        });
    } else if (currentPage.endsWith("datenschutz.html")) {
        $("#header_datenschutz").load("components/header_datenschutz.html", function () {
            setMenuEvents();
    });

    } else if (currentPage.endsWith("impressum.html")) {
        $("#header_impressum").load("components/header_impressum.html", function () {
            setMenuEvents();
    });
}
});

function setMenuEvents() {
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
}