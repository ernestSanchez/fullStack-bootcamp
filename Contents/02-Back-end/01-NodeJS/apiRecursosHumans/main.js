const fs = require('fs');
const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cookieParse = require('cookie-parser');
const colors = require('colors')

// const secretContents = fs.readFileSync('secrets.json');
// const secrets = JSON.parse(secretsContents);

//creacion servidor 
const servidor = express();

//middleware 

servidor.use(bodyParser.json())
// servidor.use(cookieParse())

//endpoints 

servidor.get('/employees', (req, res) => {

    fs.readFile('employee.json', (error, fileContents) => {
        if (error) {
            throw error,
            response.send({ "Error": "Error" })
        } else {
            let data = JSON.parse(fileContents)
            res.send(data)
        }
    })
})

servidor.get('/employee/:indice', (req, res) => {
    fs.readFile('employee.json', (error, fileContents) => {
        if (error) throw error;
        const data = JSON.parse(fileContents);
        const employee = data[req.params.indice];
        res.send(employee)
    })
})

servidor.post('/addEmployee', (req, res) => {
    if (req.body.FirstName && req.body.SecondName && req.body.Departamento && req.body.Salario && req.body.id) {
        fs.readFile('employee.json', (error, fileContents) => {
            if (error) throw error
            else {
                let data = JSON.parse(fileContents)
                let newEmployee = {
                    "FirstName": req.body.FirstName,
                    "SecondName": req.body.SecondName,
                    "Departamento": req.body.Departamento,
                    "Salario": req.body.Salario,
                    "id": req.body.id
                }

                data.push(newEmployee)

                fs.writeFile(
                    'employee.json',
                    JSON.stringify(data),
                    (error) => {
                        if (error) {
                            throw error
                        } else {
                            res.send("Employee successfully added ")
                            console.log("added new employee".magenta)
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

servidor.put('/editEmployee', (req, res) => {
    if (req.body.FirstName && req.body.SecondName && req.body.Departamento && req.body.Salario && req.body.id) {
        fs.readFile('employee.json', (error, fileContents) => {
            if (error) {
                throw error
            } else {
                const data = JSON.parse(fileContents)
                let newEmployee = {                         //<---declaro de nuevo el objeto con los nuevos parametros
                    "FirstName": req.body.FirstName,
                    "SecondName": req.body.SecondName,
                    "Departamento": req.body.Departamento,
                    "Salario": req.body.Salario,
                    "id": req.body.id
                }


                let positionUser = -1;   //<----- declaro una nueva variable en -1 por si sale -1 es que no existe y me dara error 

                for (let i = 0; i < data.length; i++) { //<--------- hago un for del data original para sacar la posicion de todos los objetos con la i
                    if (newEmployee.id == data[i].id) { //<--------busco sus espectativas id y las comparo si son las mismas para localizar el objeto y encaje con el id
                        positionUser = i

                    }
                }
                if (positionUser > -1) {  //<----- si posicion es mayor a -1 sobre escribimos el objeto 

                    data[positionUser] = newEmployee;

                    fs.writeFile('employee.json',
                        JSON.stringify(data),
                        (error) => {
                            if (error) {
                                throw error
                            } else {
                                res.send("Employee successfully modify")
                                console.log("moify employee".green)
                            }
                        }
                    )
                } else {
                    res.send("Error employee no exist")
                }
            }
        })
    } else {
        res.send({ "Error": "Body send incorrect" })
        console.log("error body form".red)
    }
})

//le pongo id al final ya lo reconoce automaticamente
servidor.delete('/deleteEmployee/:id', (req, res) => {
    fs.readFile('employee.json', (error, fileContents) => {
        if (error) throw error;

        let data = JSON.parse(fileContents);

        for (let i = 0; i < data.length; i++) {

// console.log("data[i].id " + data[i].id);
// console.log("i " + i);

            if (req.params.id == data[i].id) {

                console.log("Posicion a borrar  " + i);

              let removeU = data.splice( i , 1)
                console.log(removeU)
                console.log("delete user".green)

                fs.writeFile('employee.json',
                    JSON.stringify(data),
                    (error) => {
                        if (error) {
                            throw error;
                        } else {
                            res.send("Employee removed")
                            console.log("Employee removed".blue)
                        }
                    }
                )

            } else {
                res.send("Error employee no exist")
                console.log("user no exist".red)
            }
        }
    })
})


servidor.listen(3000, () => { console.log("server on... >3000<".yellow) })