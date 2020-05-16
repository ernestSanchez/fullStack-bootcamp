

//STRINGS//

//pergunto al usuario sus datos//
let nacimiento = prompt("dime tu año de nacimiento:")
let nombre = prompt("dime tu nombre: ")

//casteo la variable nacimiento o numerica//
nacimiento = parseInt(nacimiento)
const edad = 2020-nacimiento


//bifurcacion 001

/*if ( (edad >= 18) && (edad < 65 ) ){
                //imprimir el mensaje al usuario//
             document.write(`Hola ${nombre}. tu edad es ${edad}.`)//template literal//ES6//
} else { //es la ruta alternativa// 
    document.write("tu edad es inferior a 18años vuelve a la guarderia")//imprimir el mensaje al usuario//
}*/

//bifurcacion 002

// if ( (edad >= 18) && (edad < 65 ) ){
    
//     let mes = prompt("Dime el mes en el que naciste: ");

//     if ((mes ==="Enero") || (mes === "Diciembre")){
        
//         document.write("Bienvenido!!")
//     } 
//     else {
//         document.write("No eres capri!!")
//     }
 
// } else { //es la ruta alternativa// 
// document.write("tu edad es inferior a 18años vuelve a la guarderia")//imprimir el mensaje al usuario//
// }


//esctructuras de control de flujo: switch / case  bifurcacion para muchos caminos a la vez 

const mes = prompt("dime tu mes de nacimiento: ")

switch (mes) {
    case "Diciembre":
    case "Enero":
    case "Febreo":
    case "Marzo":
        document.write("Naciste en el invierno!");
        break;

    case "Abril":
    case "Mayo":
    case "Junio":
        document.write("Naciste en el primavera!");
        break;
   
    case "Julio":
    case "Agosto":
    case "Septiembre":
        document.write("Naciste en el verano!");
        break;
   
        
    case "Octubre":
    case "Noviembre":
        document.write("Naciste en el otoño!");
        break;
        
        
    default:
    document.write("lo escribiste mal");
         break;
}

