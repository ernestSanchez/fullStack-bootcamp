
//BUCLES

let numeroMax = prompt("dime numero max: ")
 numeroMax = parseInt(numeroMax)


 for (let i = 0; i < numeroMax; i++){ //quiero que empieze el bucle con la i a 0 y para cuando llegue a 10
     if ( i % 2 === 0){
         document.write(i +" es par ");
    } else {
        document.write(i +" es impar ");
     }
 }

//////////////////////////////////////////////////////////////////////////////////////////
let animals = ["Alpaca","Ballena","Antilope","Leon","Aguila","Zebra", "Mono",]

let animalesconA = [];


for (let i = 0; i < animals.length; i++){ //quiero que empieze el bucle con la i a 0 y de tantas vueltas como elementos tiene la array con el lenngth.
    if (animals[i][0] === "A"){            //con esto llamamos todas las primeras letras de todos los elementos y les decimos que se quede con las A y las otras no.
        animalesconA.push(animals[i])
    }

     
} 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

for (let animal of animals){  //para crear una variable con todos los elemntos de un array. 
    console.log(animal)
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
let animals2 = [
    {"nombre":"Albaca", "cantidad":2},
]

//////////////////////////////////////////////////////////////////////////////////////////////////////
let animal ={"nombre":"Albaca", "cantidad":2}

for (let clave in animal ){
    console.log(clave)
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let palabra = "Pelota"

for (let i = 0; i <= 6; i++ ){   //bucle para sacar las letras.
    if (palabra[i])
    console.log(palabra[i])
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let palabra = "Pelota"

for (let i = 6; i >= 0; i-- ){
    if (palabra[i])                     //bucles decrementales
    console.log(palabra[i])
}


////////////////////////////////////////////////////////////////////////////////////////////////

let animals = [
    {"nombre": "Alpaca", "cantidad":2},
    {"nombre": "Ballena", "cantidad":700},
    {"nombre": "Cebra", "cantidad":7},
    {"nombre": "Leon", "cantidad":2},
    {"nombre": "Antílope", "cantidad":1},
    {"nombre": "Aguila", "cantidad":12}]

for (let clave in animals ){
     
    console.log(clave);
}


//como sacar todos los los ingredientes de un objeto imprimirlos todos


const listaCompra = {
	"elaboradaPor": "mamá",
	"ingredientes": [
		{"nombre": "cebolla", "cantidad": 2},
		{"nombre": "zanahoria", "cantidad": 1},
		{"nombre": "pimientos", "cantidad": 4},
		{"nombre": "huevos", "cantidad": 12}
	]
}



for(let i=0; i<listaCompra.ingredientes.length; i ++){
    listaCompra["ingredientes"][i].cantidad
}