const asistenteController = require('./controller/asistente.controller')
const express = require('express');
const bodyParser = require('body-parser');


const server = express();

server.use(bodyParser.json());



server.get('/asistentes/:id', asistenteController.getOneUser)

server.get('/asistentes', asistenteController.getAllUsers)


server.post('/crearAsistente',asistenteController.createUser)

server.put('/modificarAsistente/:id',asistenteController.modifyUser)

server.delete('/deleteAsistente',asistenteController.delete)

server.listen(3000,()=>{
    console.log("servidor escuchando >3000<")
})
