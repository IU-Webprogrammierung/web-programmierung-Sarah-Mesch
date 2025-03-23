$(document).ready(function () {
    let currentPage = window.location.pathname;

    if (currentPage.endsWith("index.html")) {
        $("#header_index").load("components/header_index.html", function () {
            $.getScript("script.js");
        });
    } else if (currentPage.endsWith("ueber_mich.html")) {
        $("#header_uebermich").load("components/header_uebermich.html", function () {
            $.getScript("script.js");
        });
    } else if (currentPage.endsWith("mein_weg_als_sportlerin.html")) {
        $("#header_sportlerin").load("components/header_sportlerin.html", function () {
            $.getScript("script.js");
        });
    } else if (currentPage.endsWith("fanclub.html")) {
        $("#header_fanclub").load("components/header_fanclub.html", function () {
            $.getScript("script.js");
        });
    }
});