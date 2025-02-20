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


