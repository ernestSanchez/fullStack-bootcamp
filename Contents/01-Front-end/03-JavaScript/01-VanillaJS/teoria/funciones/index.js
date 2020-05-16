
//ESTRUCTURA DE UNA FUNCION

function NOMBRE DE LA FUNCION(Aargumento1){
    //CCODIGO QUE SE EJECUTA 
    return //LO QUE DEBE DEVOLVER LA FUNCION
 }

EJEMPLO
DECLARAR LA FUNCION.

function CalcularEdad(nacimiento){
   const result = 2020 - parseInt(nacimiento);
   return result;
}




let nacimientoBob = prompt("en que año nacio Bob? ")

let edadBob = CalcularEdad(nacimientoBob);

let nacimientoAna = prompt("en que año nacio Ana? ")

let edadAna = CalcularEdad(nacimientoAna);

if(edadBob > edadAna){
    document.write("Bob es mayor? ");
}else {
    document.write("Ana es mayor? ");
}

// ///////////////////////////////////////////////////////////

// //OTRO EJEMPLO FUNCION

function obtenerDiaSemana(numero){
    
    let result;

    switch(numero){
        case 1:
            result = "Lunes";
        break
  
        case 2:
            result = "Martes";
            break
            
        case 3:
            result = "Miercoles";
             break
        case 4:
             result = "Jueves";
             break
        case 5:
            result = "viernes";
            break
           
           
             default: result = "Numero del 1 al 5 por favor"
     
        }
        return result;
}

let numero= prompt("Dime el numero del 1 al 5: ");
numero = parseInt(numero);

const DiaSemana = obtenerDiaSemana(numero);
console.log(DiaSemana)
/////////////////////////////////////////////////////////////////////////


//ejercicio

function multiplicar(numero){
   const result = numero * 10;
    
    return result;
}

multiplicar(5) //cuando la invoco es cuando le pongo el valor de su funcion

//////////////////////////////////////////////////////////////////////////////

//ejercicio02


function edadPerroAñosHumanos(humano,perro){
    const result = humano * perro;

    return result;
}

edadPerroAñosHumanos(1,7);


let edadHumano = prompt("que edad tienes: ")
let edadHumano = parseInt(edadHumano)

let edadHumano =

////////////////////////////////////////////////////////////////////////////////////////////////////////////

 concatenar("hola","mundo", true)                          //Argumentos opcionales ES6

function concatenar( palabra1 , palabra2 , dejarEspacio = false){
    let result;
    
    if(dejarEspacio === true){

        result = palabra1 +" " + palabra2;
    } else {
        result = palabra1 + palabra2;
    }
    return result;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////



function pickOne( frutas , numero ){
    
    const result = frutas[numero];

    return result;
}


pickOne(["platano","melon","coco"],1)

//////////////////////////////////////////////////////////


function pickAnother( object , atribute ){
    
    const result = object[atribute];

    return result;
}


pickAnother({"nombre":"Ernesto"},"nombre")

/////////////////////////////////////////////////////////////////////////

// tine que decir que si esta palabra palindro

 
function checkPalaindromo(names){
    
      let namesRitgh = []
      let namesLeft = []
        
      let result;
   
        for (let i = 0; i < names.length; i++){ 
         
    }if ( namesRitgh[i],namesLeft[i]);
    
    
    for (let i = 0; i > namesLeft; i--){

    }
    for (let i = 0; i > namesRitgh; i++){

    }
    
    if (namesRitgh === namesLeft){
        document.write("Palindro");
    }
    if (namesRitgh < namesLeft) {
        document.write("Bulgar");
    }
    
     return result;
 } 


let palindromos = checkPalaindromo(["ana"])