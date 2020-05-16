const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser')

const miServidor = express();

miServidor.use(bodyParser.json())

let data = [];

miServidor.get('/pelis',(request,response) =>{
    fs.readFile('data.json',(error,fileContents) =>{
        if (error){
            throw error
        }else {
            data = JSON.parse(fileContents)
            response.send(data)
        }
    })
})

miServidor.post('/editar',(request,response) =>{
    fs.writeFile('data.json',
    JSON.stringify(request.body),
    (error) => {
        if (error){
            throw error 
        }else {
            response.send({"message":"Pelicula añadida correctamente"})
         
            
        }
    })
})


miServidor.listen(3500,()=>{
console.log("Server activatet port:3500")
})