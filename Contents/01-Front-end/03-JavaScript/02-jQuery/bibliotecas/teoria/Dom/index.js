



///Librerias en codigo: es un archivo de codigo realizado por otra persona open source que te deja utilizar.

//jquery cdn : https://code.jquery.com/

//bootstrap utiliza la version Jquery slim que no lleva AJAX.

//jQuery: uso escribir menos.

//haremos una web ajax con jQuery

//manipulacion DOM JQuery
//eventos JQuery
//Http JQuery






///////////////////////////manipulacion DOM JQuery:


// $() = document.querySelector()

//$(`body > div > h1`).text("nuevo texto") = document.querySelector(`body > div > h1`).texcontent() / 

//$(`body > div > h1`).val() = .value


//.append añade elemento html al final
    //$(`body > div`).append(`<button>hola</button>`)

//.prepend añade elemento html al principio pero dentro del elemento si tuvieramos el h1 selecionado seria dentro de el 
    //$(`body > div`).prepend(`<button>hola</button>`)

//.after te crea el elemento depues del elemnto seleccionado y fuera de el.
    //$(`body > div > h1`).after(`<button>hola</button>`);

//.before te crea el elemento antes del elemnto seleccionado y fuera de el.
    //$(`body > div > h1`).before(`<button>hola</button>`);


//.remove para borrar elementos 
    //$(`body > div > h1`).remove();//borrara el h1

//.empty vacia todo lo que lleva dentro el elemnto seleccionado manteniendo lo seleccionado.
    //$(`body > div `).empty();vaciara los h1 que contenga dentro o cualquier otro

//.css cambiar por ejemplo el estylo de color de un h1 //se usa puntualmente
            //$(`body > div > h1`).css('color');
            //"rgb(0, 0, 0)"te devuelve el valor

    // $(`body > div > h1`).css('color','red');  modificar la propiedad    
    

//.addClass para añadir clases css a un elemento.sin que el elemento tengsa la clase necesariamente.
        //$(`body > div > h1`).addClass(`ColorAzul`)

//.removeClass para quitar clases css a un elemento.
        //$(`body > div > h1`).removeClass(`ColorAzul`)


/////////////////////////////eventos JQuery