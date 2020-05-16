const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser')

//Creo un servidor
const miServidor = express();

//añadir los middleware
miServidor.use(bodyParser.json()) //<---- asi todas las peticiones body venran parseads siempre

//configurar los endpoints le voy a decir lo que el servidor tiene que hacer cada vez que reciba una peticion 
miServidor.get('/saludar',//<------creamos el endpoint en el argumento "/saludar"
    (request, response) => { //<---en la funcion flecha le damos dos argumentos "request" para sacar la info sobre la peticion, "response" enviar respuesta 
        response.send({ "Message": "Hola mundo !" })
    })

//otro endpoint GET nuevo /name
//devolver vuestro nombre

miServidor.get('/name', (request, response) => {
    response.send({ "Message": "Ernesto Sanchez" })
})

//aplicando lo de ayer 

miServidor.get('/data', (request, response) => {
    fs.readFile('data.json', (error, fileContents) => {
        if (error) {
            throw error
        } else {
            const data = JSON.parse(fileContents)
            response.send(data)
        }
    })
})

//endpoint llamadas post


miServidor.post('/editarArchivo', (request, response) => {
    fs.writeFile(
        'data.json',
        JSON.stringify(request.body),//<---el body que manda el cliente y lo ponemos en el data.json y lo stringifyeamos 
        (error) => {
            if (error) {
                throw error
            } else {
                response.send({"message": "OK archivo creado"})
            }
        }
    )
})


//decirlo el puerto en el que escucha 
miServidor.listen(
    3000, //<---- puerto 
    () => { //<------callback
        console.log("servidor escuchando en el puerto 3000")
    }
)


