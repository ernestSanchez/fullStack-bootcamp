

//STRINGS//

//pergunto al usuario sus datos//
let nacimiento = prompt("dime tu año de nacimiento:")
let nombre = prompt("dime tu nombre: ")

//casteo la variable nacimiento o numerica//
nacimiento = parseInt(nacimiento)
const edad = 2020-nacimiento

//imprimir el mensaje al usuario//
document.write(`Hola ${nombre}. tu edad es ${edad}.`)//template literal//ES6//
document.write("Hola " +nombre+". tu edad es "+edad+".")//Sin ES6//