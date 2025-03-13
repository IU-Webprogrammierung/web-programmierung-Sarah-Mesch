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
