const user_model = require('../models/user_model');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

exports.registerUser = (req, res) => {
    if (
        req.body["username"] &&
        req.body["password"] &&
        req.body["email"]
    ) {
        bcrypt.hash(req.body["password"], 14, (error, hash) => {
            user_model.newregister(

                req.body["username"],
                hash,
                req.body["email"],

                (error, result) => {
                    if (error) {
                        res.send({ "error": error });
                        throw error;
                    } else {
                        res.send({ "succes": " ok register new user" })
                    }
                }
            )

        })
    } else {
        res.status(400).send({ "error": "body mal formado" })
    }
}


exports.loginUser = (req,res) => {
    if (
        req.body["username"]&&
        req.body["password"]
    ){
        bcrypt.compare(req.body["password"],["password"],
        (error,result) => {
            user_model.loginCompare(
                req.body["username"],
                req.body["password"],
                (error,result) => {
                    if (error) throw error;
                    
                    if (req.body["password"] === ["password"] && result === true ){
                        res.send({ "message": "Usuario loggeado" })
                    }else{
                        res.send({ "message": "error usuario o contraseña incorrecta " })
                    }
                }
            )
        })
    }
}