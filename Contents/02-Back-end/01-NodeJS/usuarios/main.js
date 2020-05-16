
//importar librerias 
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');
const bcrypt = require('bcrypt');


//creamos un servidor
const servidor = express();

//configuramos el middleware 
servidor.use(bodyParser.json());

//creamos los endpoints

//registro
servidor.post('/register', (req, res) => {
    if (req.body.username && req.body.password) {  //<----- para ver si existen y nos las mandan correctamente 

        //generar hash de contraseña 
        bcrypt.hash(
            req.body.password, //<--contraseña usuario
            10,          //<------tiempo que tarda el hash
            (error, hash) => {
                if (error) throw error;

                //body bien hecho
                const userData = {    //<------creamos una variable con el body 
                    "username": req.body.username,
                    "password": hash
                }
                fs.writeFile('users.json',
                    JSON.stringify(userData),//<------escribimos un json con la variable del body 
                    (error) => {
                        if (error) throw error
                        console.log("User create".magenta)
                        res.send({ "message": "Usuario creado con exito!" })
                    }
                )
            })
    } else {
        res.send({ "error": "has mandado mal el body" })
    }
})


//loginUser
servidor.post('/login', (req, res) => {
    if (req.body.username && req.body.password) {  //<----- para ver si existen y nos las mandan correctamente 
        //body bien hecho
        const userData = {    //<------creamos una variable con el body 
            "username": req.body.username,
            "password": req.body.password
        }
        fs.readFile('users.json', (error, fileContents) => {

            if (error) throw error;
            const data = JSON.parse(fileContents);

            //voy a comprobar el hash de la contraseña
            bcrypt.compare(userData["password"],
                data["password"],
                (error, result) => {
                    if (error) throw error;

                    if (userData["username"] == data["username"] && result == true) {//<---comprobamos que que la informacion del usuario esta en la api para saber si esta registrado 
                        res.send({ "message": "Usuario loggeado" })
                        console.log("User logged".green)
                    } else {
                        res.send({ "message": "error usuario o contraseña incorrecta " })
                        console.log("Error User No logged".red)
                    }
                })
        })
    } else {
        res.send({ "error": "has mandado mal el body" })
    }
})



//asigno puerto a servidor 
servidor.listen(3000, () => { console.log("escuchando ene el puerto 3000".yellow) });

