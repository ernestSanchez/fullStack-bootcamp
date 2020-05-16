const colors = require('colors')
const fs = require('fs')
const process = require('process')

const argumentos = process.argv; // argv son los argumentos


// console.log("hola mundo!".green)
console.log(argumentos)

function escribir() {

    fs.writeFile(
    'data.json',
    JSON.stringify({"tiempo":"soleado"}),
    (error)=> {
        if (error){
            throw error
        }else {
            console.log("Archivo guardado con exito!".green)
        }
    }
) 

}

function leer() {
    fs.readFile(
        'data.json', // nombre del archivo 
        (error,fileContents) => {  //callback que se ejecutara cuando este toda la info 
             if(error){
                 throw error
             }else{
                 const data = JSON.parse(fileContents)
                console.log(data)
             }
        }
    )
}

if(argumentos[2] === "--escribir"){  // esto nos permitira en el cli "cmd" cuando escribimos lo que tenemos en el if invocara la funcion
    escribir()
}

if(argumentos[2] === "--leer"){
    leer()
}


