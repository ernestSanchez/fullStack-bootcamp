const mongoose = require('mongoose');
const Usuarios = require('../models/user.model')
const bcrypt = require('bcrypt')
const authController = require('./auth.controller')
const fs = require('fs');
const path = require('path');

// Cargar archivo secrets
const absolutePath = path.join(__dirname.replace('controllers', ''), '/config/secrets.json')
const secretContents = fs.readFileSync(absolutePath);
const secrets = JSON.parse(secretContents);


//conectarme al mongoose
mongoose.connect(secrets.mongo_login, { useNewUrlParser: true, useUnifiedTopology: true });

exports.createUser = (req, res) => {

    bcrypt.hash(
        req.body.password,
        14,
        (error, hash) => {
            if (error) throw error;
            const data = {
                "username": req.body.username,
                "password": hash,
                "email": req.body.email,
                "_id": mongoose.Types.ObjectId()
            }
            const newUser = new Usuarios(data);
            newUser.save((error, result) => {
                if (error) throw error;
                res.send({ "message": "ok user creado!", "_id": result._id })
            })
        }
    )
}

//funciones para para mongoose

exports.getUser = (req, res) => {
    //check token
    authController.checkToken(
        req,
        res,
        (req, res) => { //<---- es el callback que tenemos en user.model//llamamos al auth controller y con el callback le decimos lo que hacer
            const id = req.params.id
            Usuarios.findById(id, (error, result) => {
                if (error) throw error;
                res.send(result)
            })
        });


}


exports.updateUser = (req, res) => {

    authController.checkToken(
        req,
        res,
        (req, res) => {

            const data = {
                "_id": req.body._id,
                "username": req.body.username,
                "email": req.body.email
            }
            Usuarios.findByIdAndUpdate(
                req.body._id,
                {
                    $set: data
                },
                (error, result) => {
                    if (error) throw error;
                    res.send({ "message": "OK usuario actualizado" })
                }
            )
        }
    )
}

exports.deleteUser = (req, res) => {
     authController.checkToken(
        req, res,                        
        (req, res) => {
            const _id = req.param.id;
            Usuarios.findByIdAndDelete(_id, (error, result) => {
                if (error) throw error;
                res.send({ "message": "Ok usuario borrado" })
            })
        })

}