let cl = console.log;

function enleverLiens() {
    $("a").each(function () {
        var value = $(this).text();
        $(this).replaceWith(value);
    });
}

function enleverGras() {
    $("b").each(function () {
        var value = $(this).html();
        $(this).replaceWith(value);
    });
}

function enleverItalique() {
    $("i").each(function () {
        var value = $(this).html();
        $(this).replaceWith(value);
    });
}

function enleverDecor() {
    enleverGras();
    enleverItalique();
    $("u").each(function () {
        var value = $(this).html();
        $(this).replaceWith(value);
    });
    $("h1").each(function () {
        var value = $(this).html();
        $(this).replaceWith(value);
    });
    $("h2").each(function () {
        var value = $(this).html();
        $(this).replaceWith(value);
    });
    $("span").removeAttr("style");
}

function viderBoutons() {
    $("#contenu button").empty();
}

function voirCode() {
    var contentHTML = $("#contenu").html();
    alert(contentHTML);
}

function liensEnBoutons() {
    $("a").each(function () {
        var lien = $(this).attr("href");
        $(this).replaceWith("<button>" + lien + "</button");
    });
}

function dupliquerTexte() {
    var contentHTML = $("#contenu").html();
    cl(contentHTML);
    $("#contenu").append(contentHTML);
}

function regrouperLiens() {
    var liens = "";
    $("a").each(function () {
        var lien = $(this).attr("href");
        liens += lien + '\n';
    });
    alert(liens);
}

function mettreTitres() {
    $(".titre1").wrap("<h1></h1>" );
    $(".titre2").wrap("<h2></h2>" );
}

function regrouperTitres() {
    var titres = "";
    $(".titre1").each(function () {
        var titre = $(this).text();
        titres += titre + '\n';
    });
    $(".titre2").each(function () {
        var titre = $(this).text();
        titres += titre + '\n';
    });
    alert(titres);
}

function colorer() {
    $(".vert").css("color", "green");
    $(".rouge").css("color", "red");
    $(".bleu").css("color", "blue");
}

function semantique() {
    $(".gras").wrap("<b></b>" );
    $(".italique").wrap("<i></i>" );
    $(".souligne").wrap("<u></u>" );
}