

///FUNCIONES AVANZADAS////



//FUNCION ANONIMA QUE SE EJECUTA AL INSTANTE

(function () {
    //code 
    alert("fsjoaj")
}());


//funciones callback:funciones que se pasan de argumento a otras funciones 







function saluda(callback) {   //para que la funcion empieze la primera con el callback
    alert("hola gente");
    callback();
}



saluda(function () {
    alert.apply("adios gente")  //invoco la funcion saluda que lleva el callback y de argumento le pongo una funcion anonima.
})




saluda(function () {
    alert.apply("hello")
})


//funcion predeterminada que viene por defecto. 
// setTimeout funcion que retrasa la ejecucion de otra funcion x milisegundos.

setTimeout(function () { alert("hola") }, 2000)


// setInterval funcion que cada x milisegundos saldra la misma funcion.

setInterval(function () { alert("hola") }, 2000)

setIterval(CALLBACK, MILISEGUNDOS)

//FUNCIONES FLECHA UNA VARIANTE DE LAS FUNCIONES ANONIMAS Y ES LA MEJOR.

setTimeout(() => { alert("hola") }, 2000)









//ejercicio interval//cuenta atras de 60

let cuenta = 60;

setInterval(() => {

    if (cuenta > 0) {
        cuenta--;
        document.open();
        document.write(cuenta);
        document.close();
    } else {
        if (cuenta === 0) {
            cuenta--;
            document.write("BOOM!!!")
          
        }


    }
}, 1000);





















