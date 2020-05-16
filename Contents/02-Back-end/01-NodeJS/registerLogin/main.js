const fs = require('fs');
const express = require('express');
const bcrypt = require('bcrypt');
const colors = require('colors');
const bodyParser = require('body-parser');

const servidor = express();

servidor.use(bodyParser.json());


servidor.post('/sign', (req, res) => {
    if (req.body.username && req.body.password) {

        const dataUser = { "username": req.body.username,
                         "password": req.body.password }
        
    fs.writeFile('user.json',
   JSON.stringify(dataUser),
                (error) => {
                    if (error) throw error 
                      
                    else {
                        res.send({ "message": "User register successfully" })
                    }
                }
        })

    } else {
        res.send({ "message": "Body problem" })
    }

})

servidor.listen(3000, () => { console.log("Server activated and wait..".yellow) })