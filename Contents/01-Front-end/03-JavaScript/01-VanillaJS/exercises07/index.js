

/////////////////////exercise 01


let spanishHead = {
    "header-h1": "Hola,mundo!",
    "header-body": "Esta es una plantilla para un sitio web simple de marketing o informativo. Incluye una gran llamada llamada jumbotron y tres piezas de contenido de apoyo. Úselo como punto de partida para crear algo más único.",
    "header-button": "leer mas",
    "heading-one": "titulo",
    "heading-one-body": "Donec id elit non mi porta gravida en eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
    "heading-one-body-btn": "ver detalles"
}

function translate(es) {

    let title = document.querySelector("body > main > div.jumbotron > div > h1");
    let body = document.querySelector("body > main > div.jumbotron > div > p:nth-child(2)");
    let button = document.querySelector("body > main > div.jumbotron > div > p:nth-child(3) > a");
    let headingOne = document.querySelector("#titulo");
    let headingOneBody = document.querySelector("#text");
    let headingOneBodyBtn = document.querySelector("#btn");


    title.textContent = spanishHead["header-h1"];
    body.textContent = spanishHead["header-body"];
    button.textContent = spanishHead["header-button"];
    headingOne.textContent = spanishHead["heading-one"];
    headingOneBody.textContent = spanishHead["heading-one-body"];
    headingOneBodyBtn.textContent = spanishHead["heading-one-body-btn"];
}

document.querySelector("body > nav > button:nth-child(2)").addEventListener("click", translate)


