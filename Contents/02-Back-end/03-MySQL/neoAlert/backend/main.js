const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/controller');


const server = express();

server.use(bodyParser.json());

server.get('/ciudadanos',controller.getCiudadanos)

server.post('/nuevoCiudadano',controller.nuevoCiudadano)

server.post('/nuevaAlerta',controller.nuevaAlerta)

server.listen(3000,()=>{console.log("server actived 3000")})