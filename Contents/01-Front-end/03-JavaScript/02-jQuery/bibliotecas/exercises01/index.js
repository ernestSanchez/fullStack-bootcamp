




// Vamos a utilizar nuevos superpoderes de jquery para hacer una app que ayudará a la gente a llevar un registro 
//de las distintas cervezas que va probando en su vida.La web app tendrá:
// Un input donde se escribirá el link de la imagen de la cerveza
// Un input donde se escribirá el nombre de la cerveza
// Un input donde se escribirá el fabricante de la cerveza
// Un input(tipo date) donde se escribirá la fecha en la que se probó
// Un input donde se escribirá el lugar(nombre del bar)
// Un input(tipo number) donde se escribirá el precio
// Un input(tipo number) donde se escribirá la nota(del 0 al 10)
// Debajo de estos inputs habrá un botón de "guardar cerveza".Al hacer click en dicho botón, se llamará a una 
//función que cogerá todos los datos de la cerveza y creará un objeto con ellos.Dicho objeto se pusheará a un array global, 
//donde estarán todas las cervezas.
// Debajo de los inputs se mostrará el listado de todas las cervezas que haya en el array.
// (Opcionalmente se puede hacer con un listado de películas, de juegos o de zumitos si no os gusta la cerveza)
// Extra: probad a llevaros los inputs y el botón de "guardar cerveza" a un modal de bootstrap.De esa forma, al entrar en la web se 
//verán solamente el listado de las cervezas guardadas.Y la sección de "añadir una nueva cerveza" estará a parte en ese modal.

let globalBeer = []


function imprimir () {

   $(`body > div > ul`).append(`<div class ="table"><td><image src="${globalBeer[0].image}"></td>
                                            <li>${globalBeer[0].name}</li>
                                            <li>${globalBeer[0].marker}</li>
                                            <li>${globalBeer[0].datetaste}</li>
                                            <li>${globalBeer[0].locationtaste}</li>
                                            <li>${globalBeer[0].price}</li>
                                            <li>${globalBeer[0].note}</li></div>`)
    
}




function compiletData() {
    
let data = {};

    $(".data").each( function () {
        let alias = $(this).attr("data-alias");
        data[alias] = $(this).val();
} )

    globalBeer.push(data)
    imprimir()
}


$(`body > button`).click(compiletData);