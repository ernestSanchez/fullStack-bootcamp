const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/user.controller');
const cookieparser = require('cookie-parser');
const authController = require('./controllers/auth.controller')

const server = express();

//hemlet
server.use(bodyParser.json())
server.use(cookieparser());

server.get('/', function (req, res) {
  res.send('Hello World!');
});

server.post('/createUser',userController.createUser)


server.get('/user/:id',userController.getUser);

server.put('/changeUser',userController.updateUser);

server.delete('/delete/:id',userController.deleteUser);

server.post('/login', authController.login);

server.listen(3000, () => {
  console.log('Example server listening on port 3000!');
});