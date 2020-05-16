
/* 1. Crear un array vacío (llamado"numeros”). Crear un bucle que recorra los números
del 1 al 100. En cada iteracción, usaremos la función numeros.push(i) para guardar
el número de la iteracción en el array numeros. Como resultado nos quedará un
array con los números del 1 al 100. Cuando termine el bucle, haréis un alert() con los
números. */

let numeros = []

for (let i = 1; i <= 100; i++ ){
    numeros.push(i)
}

alert(numeros)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Crear otro array que esté vacío (esta vez lo llamaremos"numeros pares”).
// Recorremos en bucle el array del ejercicio anterior (“numeros”) comprobando en
// cada iteración si el número de dicha iteración es par o impar (dicho de otra forma:"si
// dividimos ese número entre dos, el resto es 0?). Si es así, dicho número se añadirá
// al segundo array (usando la función .push como antes). Cuando termine el bucle,
// haréis un alert() con los números impares.

numerospares = []
numerosimpares = []


for (let i = 0; i <= 99; i++){
    if (numeros[i] % 2 === 0){
        numerospares.push(numeros[i])
    }else {
            numerosimpares.push(numeros[i])
        }
        
    }

alert(numerosimpares)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Usando los arrays:
// const animales=["elefante", "perro", "ballena"]
// const peso=[5000, 50, 20000]
// (Teniendo en cuenta que están ordenados por igual)
// El primer array es un listado de animales y el segundo, su peso en Kg. Crear un
// bucle que recorra el listado de animales. En cada iteracción, comprobará si dicho
// objeto es el perro. Si lo es, imprimirá el nombre del animal y su peso.

const animales=["elefante", "perro", "ballena"]

const peso=[5000, 50, 20000]

for ( let i = 0; i <= animales.length; i++){
    if (animales[i] === "perro" ){
        document.write(animales[i] + peso[i])
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Usando los mismos arrays del ejercicio anterior. Haced un bucle que recorra el
// listado de pesos. En cada iteracción, comprobar si el peso es superior a 1000. Si lo es,
// imprimir en la pantalla un título"Animales Grandes” y el animal correspondiente.

const animales=["elefante", "perro", "ballena"]

const peso=[5000, 50, 20000]

for ( let i = 0; i <= peso.length; i++){
       if (peso[i] > 1000 ){
            document.writeln("<br>"+"Animales Grandes: "+animales[i]+peso[i])
        }
}

 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Crear un array vacío llamado"letras”. Crear una variable string con la palabra
//"pizarra”. Crearemos un bucle que iterará sobre la palabra"pizarra”. En cada iteracción
// comprobaremos si el número de la iteracción (i) es un número par. Si lo es,
// pushearemos (usando la función .push) cada letra de la palabra dentro del array
//"letras”. Como resultado, tendremos un array con las letras pares de la palabra.

let letras = []



let palabra = "pizarra"

for (let i = 0; i <= 6; i++ ){   
     
    if (i % 2 === 0 ){
       letras.push(palabra[i])
    }
    
     
}

alert(letras)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Tengo una lista de productos y de precios de la tienda de la esquina:
// naranjas - 2€
// leche - 1,2 €
// cereales - 4€
// deportivo Ferrari - 1.000.000 €
// sangre de unicornio - 0,5 €
// Elegid un producto cualquiera, guardadlo en una variable llamada"producto” como un
// string. Con un switch/case, haced que se imprima en la consola el precio del producto.


let producto = "sangre de unicornio "

switch (producto) {
    case "sangre de unicornio ":
    
        console.log("0,5 €");
       
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7. Vamos a contar ovejitas. Primero fijaremos un número máximo, por ejemplo:
// const max_number = 12
// Ahora, haced un bucle que imprima en la consola el mensaje:
//"1 ovejita…”
//"2 ovejitas…”
//"3 ovejitas”...
// …
// etc

const max_number = (12)

 for (let i = 1; i <  max_number; i++){
       if ( i ){
           console.log(i +" ovejitas ");
        }     
             for ( let j = 0; j < max_number; j++){
                if( j === 1 ){
                     console.log(j +" ovejita ");
                }
             }
 }

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  8. No me gusta el brócoli. Tengo unas cuantas listas de ingredientes para recetas que
// incluyen brócoli entre ellos, por ejemplo:
// const tacos = ["carne", "frijoles", "pimiento verde", "brocoli""]
// const sopa = ["fideos", "brocoli", "caldo", "pollo"]
// const pizza = ["masa", "base de tomate", "brocoli", "bacon", "queso"]
// Finalmente, tengo una lista de la compra donde voy a ir añadiendo los ingredientes que
// necesito comprar, EXCEPTO el brócoli.
// let lista_compra = []
// Haced un bucle que recorra el array tacos, y en cada iteracción vaya pusheando los
// ingredientes al array lista_compra siempre que dicho ingrediente no sea el "brocoli".
// Luego usad el mismo bucle con los otros 2 arrays. Finalmente, imprimid en la consola el
// array lista_compra después de todo el proceso.

const tacos = ["carne", "frijoles", "pimiento verde", "brocoli"]

const sopa = ["fideos", "brocoli", "caldo", "pollo"]

const pizza = ["masa", "base de tomate", "brocoli", "bacon", "queso"]

let lista_compra = []

for (let i = 0; i < tacos.length; i++ ){   
     
    if (i - 3){
        lista_compra.push(tacos[i])
    }

}
for (let j = 0; j < sopa.length; j++ ){   
     
    if (j - 1){
        lista_compra.push(sopa[j])
    }

}
for (let k = 0; k < pizza.length; k++ ){   
     
    if (k - 2){
        lista_compra.push(pizza[k])
    }

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9. Partiendo de un número cualquiera, por ejemplo el 7, queremos calcular la
// multiplicación de todos los números que hay por debajo de éste (sin contar el cero). Por
// ejemplo:
// 1*2*3*4*5*6*7 = 5.040
// A este cálculo en matemáticas se le llama factorial. El factorial de 7, como acabamos de
// ver, es 5040.
// Haced un bucle que me calcule el factorial del número 10 y lo imprima en la consola.


let number = (10)

for (let i = 0; i < number; i++){
    if ( i ){
            console.log(i*number)
        }
}

////////////////////////////////////////////////////////////////////////////////////////////////

// 10. La función Object.keys() nos devuelve un array con las claves de un objeto que le
// pongamos entre los paréntesis. Por ejemplo:
// const mi_objeto = {“hola”:"greetings”,"adios”:"bye”}
// Object.keys(mi_objeto)
// //me retornará el siguiente array: [“hola”,"adios”]
// De esta forma, podemos iterar sobre las claves de un objeto, de la siguiente forma:
// for(let i=0; i<Object.keys(mi_objeto).length; i++){
// let clave = Object.keys(mi_objeto)[i];
// console.log(mi_objeto[clave]);
// }
// Lo cual nos imprimirá en la pantalla"greetings”,"bye”.
// Ahora os toca a vosotros. Tengo un objeto con el nombre de algunos países como
// claves y su población total como valores:
// const poblaciones = {
//"españa”: 47000000,
//"italia”: 61000000,
//"francia”: 67000000,
// }
// Haced un bucle que imprima en la consola aquellos países que tengan una población
// superior a 60000000 personas.


const poblaciones = {
    "españa”: 47000000,
    "italia”: 61000000,
    "francia”: 67000000,
}

 for(let i=0; i<Object.keys(poblaciones).length; i++){
    
    let clave = Object.keys(poblaciones)[i];
     
     console.log(poblaciones[clave]);}