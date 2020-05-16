
//window es el objeto mas Global la representacion delcontexto global.(es el root de todo).
//dentro hay un bjeto guay llamado Math

Math.min(2, 5, 6, 0, 8, 3, 1) //te da siempre el minimo de los que pongas.

Math.max(2, 5, 6, 0, 8, 3, 1) //te da siempre el maximo de los que pongas.

Math.round(2.4)
2               //redondea hacia abajo o hacia arriba el mas cercano

Math.round(2.5)
3

Math.floor(2.6) //redondea hacia abajo
2

Math.cell(2.4) //redondea hacia arriba
3
Math.random() //escoge un numero al azar entre 0 y 1.

Math.random() * 10

Math.round(Math.random() * 10) //modificado con formula para poner el rango tu mismo ejemplo

let alumnos = ["ADOLFO", "LUZ", "PEPE", "LUIS", "JUAN", "LUISMA", "PEPE",]


alumnos[Math.round(Math.random() * 10)]

//////////////////////////////////////////////////////////////////////////////////////////

function shuffle(array) {

    let result = []

    for (let i = 0; i < array.length; i++) {    
       
        //saco un elemento al azar del array
        let arrayRandom = array[Math.round(Math.random() * (array.length))]; 

        if (result.indexOf(arrayRandom) === -1) { //miramos si el elemento esta repetido dentro de la lista.index off es como un true o false si no esta lo puseamos
            result.push(arrayRandom) 
        } else {             //si esta lo descartamos
            i--;
        }

    }
    return result;
}




let alterned = shuffle(["toro", "cerveza", "bong", "suelo", "pillada"])
console.log(alterned)



    

