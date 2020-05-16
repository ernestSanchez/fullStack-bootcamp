const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/controller');
const register_controller = require('./controllers/register_controller')

const server = express();


server.use(bodyParser.json());


server.post('/register', register_controller.registerUser);

server.post('/login',register_controller.loginUser);

server.get('/usuarios', controller.allUsers);

server.get('/usuario/:id',controller.OneUser);

server.post('/addUser', controller.newUser);

server.put('/modifyUser/:id', controller.replaceUser);

server.delete('/removedUser', controller.deleteUser);

server.get('/walkings', controller.allWalkings);

server.get('/walking/:id',controller.onlyWalking);

server.post('/addWalking', controller.addedWalking);

server.put('/modifyWalking/:id',controller.replaceWalking);

server.delete('/deleteWalking',controller.removedWalking);




server.listen(3000,()=>{console.log("server activated >3000>")});