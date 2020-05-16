
const fs = require('fs');
const colors = require('colors');
const express = require('express')
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cookieParse = require('cookie-parser');

const secretsContents = fs.readFileSync('secrets.json');
const secrets = JSON.parse(secretsContents);

const servidor = express();

servidor.use(bodyParser.json());
servidor.use(cookieParse())

servidor.post('/register', (req, res) => {
    if (req.body.username && req.body.email && req.body.password) {
        fs.readFile('users.json', (error, fileContents) => {
            if (error) throw error;

            const data = JSON.parse(fileContents);

            for (let i = 0; i < data.length; i++) {
                if (data[i]["username"] === req.body['username']) {
                    res.send({ "error": "Ese usuario ya existe" });
                    return;
                }
            }
            bcrypt.hash(
                req.body.password,
                13,
                (error, hash) => {
                    if (error) throw error;
                    const userData = {
                        "username": req.body.username,
                        "email": req.body.email,
                        "password": hash
                    }
                    data.push(userData)
                    fs.writeFile('users.json',
                        JSON.stringify(data),
                        (error) => {
                            if (error) throw error
                            res.send({ "message": "Add new user" })
                            console.log("added new user".magenta)
                        })
                }
            )
        })
    } else {
        res.send({ "error": "body incorrect" })
        console.log("Error body incorrect".red)
    }
})

servidor.post('/login', (req, res) => {
    if (req.body.username && req.body.email && req.body.password) {

        const userData = {
            "username": req.body.username,
            "email": req.body.email,
            "password": req.body.password
        }
        fs.readFile('users.json', (error, fileContents) => {
            if (error) throw error;
            const data = JSON.parse(fileContents);
            for (let i = 0; i < data.length; i++) {
                if (data[i]["username"] === req.body['username']) {
                    bcrypt.compare(
                        userData["password"],
                        data[i]["password"],
                        (error, result) => {
                            if (error) throw error;
                            if (userData["username"] === data[i]["username"] && result) {
                                jwt.sign(
                                    { "username": userData["username"] },
                                    secrets["jwt_clave"],
                                    (error, token) => {
                                        if (error) throw error;
                                        res.cookie('sello', token);
                                        res.send({ "message": "usuario logeado", "token": token })
                                    }
                                )
                            } else {
                                res.send({ "error": "usuario o contraseña incorrectos" })
                            }
                        }
                    )
                    return
                } else {
                    if (i === data.length - 1) {
                        res.send({ "error": "usuario no existe" })
                        return;
                    }
                }
            }
        })
    } else {
        res.send({ "error": "body no correct" })
        console.log("error body")
    }
})

servidor.get('/pedidos', (req, res) => {

    fs.readFile('data.json', (error, fileContents) => {
        if (error) {
            throw error,
            res.send({ "error": "error" })

        } else {
            let data = JSON.parse(fileContents)
            res.send(data)
        }
    })
})

servidor.get('/pedido/:indice', (req, res) => {
    fs.readFile('data.json', (error, fileContents) => {
        if (error) throw error;
        const data = JSON.parse(fileContents);
        const pedido = data[req.params.indice];
        res.send(pedido)
    })
})

servidor.post('/crearPedido', (req, res) => {
    if (req.body.productos && req.body.fecha && req.body.direccion && req.body.precio) {
        fs.readFile('data.json', (error, fileContents) => {
            if (error) throw error;
            else {
                let data = JSON.parse(fileContents)

                let nuevoPedido = {
                    "productos": req.body.productos,
                    "fecha": req.body.fecha,
                    "direccion": req.body.direccion,
                    "precio": req.body.precio
                };

                data.push(nuevoPedido)

                fs.writeFile(
                    'data.json',
                    JSON.stringify(data),
                    (error) => {
                        if (error) {
                            throw error;
                        } else {
                            res.send("Pedido realizado correctamente")
                            console.log("pedido realizado".magenta)
                        }
                    }
                )
            }
        })

    } else {
        res.send({ "Error": "Body send incorrect" })
        console.log("error body form".red)
    }
})

servidor.put('/editarPedido', (req, res) => {
    if (req.body.productos && req.body.fecha && req.body.direccion && req.body.precio && req.body.id) {
        fs.readFile('data.json', (error, fileContents) => {
            if (error) {
                throw error;
            } else {
                const data = JSON.parse(fileContents)
                let editPedido = {
                    "productos": req.body.productos,
                    "fecha": req.body.fecha,
                    "direccion": req.body.direccion,
                    "precio": req.body.precio,
                    "id": req.body.id
                }

                let positionPedido = -1;

                for (let i = 0; i < data.length; i++) {

                    if (editPedido.id == data[i].id) {
                        positionPedido = i
                    }
                }
                if(positionPedido > -1){
                    data[positionPedido] = editPedido;
                    fs.writeFile('data.json',
                    JSON.stringify(data),
                    (error)=>{
                        if(error){
                            throw error;
                        } else {
                            res.send("pedido successfully modify")
                            console.log("modify pedido".green)
                        }
                    }
                    )
                }else{
                    res.send("error pedido no existe")
                    console.log("error pedido no existe".red)
                }

            }
        })
    } else {
        res.send({ "Error": "Body send incorrect" })
        console.log("error body form".red)
    }

})

servidor.delete('/eliminarPedido/:id', (req, res) => {
    fs.readFile('data.json', (error, fileContents) => {
        if (error) throw error;

        let data = JSON.parse(fileContents);

        for (let i = 0; i < data.length; i++) {

     if (req.params.id == data[i].id) {

                console.log("Posicion a borrar  " + i);

              let removeU = data.splice( i , 1)
                console.log(removeU)
                console.log("delete user".green)

                fs.writeFile('data.json',
                    JSON.stringify(data),
                    (error) => {
                        if (error) {
                            throw error;
                        } else {
                            res.send("pedido removed")
                            console.log("pedido removed".blue)
                        }
                    }
                )

            } else {
                res.send("Error pedido no exist")
                console.log("pediodo no exist".red)
            }
        }
    })
})

servidor.listen(3000, () => { console.log("server activated.... >3000<".yellow) })