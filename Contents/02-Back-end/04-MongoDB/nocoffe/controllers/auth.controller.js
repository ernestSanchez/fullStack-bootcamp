const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Usuartios = require('../models/user.model');
const fs = require('fs');
const path = require('path');

// Cargar archivo secrets
const absolutePath = path.join(__dirname.replace('controllers', ''), '/config/secrets.json')
const secretContents = fs.readFileSync(absolutePath);
const secrets = JSON.parse(secretContents);

exports.login = (req,res) => {
    //1.encontrar al user por id 
    Usuartios.findById(
        req.body._id,
        (error,user) =>{
            if(error) throw error;
        //2.comprobar contraseña
            bcrypt.compare(
                req.body.password, //<-----el que inserta el user
                user.password, //<----- el que tenemos en la base de datos
                (error,coincidence)=>{
                    if(error) throw error;
                //3.si es correcta autentificar,ponerle el token
                    if (coincidence === true){ //<----comprobamos si la coincidencia de la password es correcta si existe el usuario
                        jwt.sign( //<---de firma
                            {"username": user.username },
                            secrets.jwt_clave,
                            (error,token)=>{
                                if(error) throw error;
                                res.cookie("arcoiris",token);
                                res.send({"message":"Bienvenid@!","token":token})
                            }
                        )
                    }else{
                        //4.si se verifica el token ,se ejecuta lo que nos digan
                        res.send({"error":"contraseña incorrecta"})
                    }
                }
            )
        }
    )
}

    
exports.checkToken = (req,res,callback) => {
    //1.comprobar si el user tiene la cookie llamada arcoiris
    // console.log(req.cookies)
    if(req.cookies["arcoiris"] !== undefined){
        //2.si la tiene comprobar si el token de esa cookie a sido firmada por mi
        jwt.verify( //<----- para ver si esta firmada
            req.cookies["arcoiris"],
            secrets.jwt_clave,
            (error,verificado) =>{
                if (error) throw error;
                //3.de no ser asi a chuparla
                if (!verificado){//<----- si no esta verificado es lo mismo que el if de arriba
                    res.send({"error":"token no valido"})
                    return false;
                }else{
                    callback(req,res)//<----- es lo que que tenmos en elo user.controller
                    return true;
                }
            }
        )
     }else{
         res.send({"error":"no estas autentificado","login": "/login"})
         return false;
     }   
}  
