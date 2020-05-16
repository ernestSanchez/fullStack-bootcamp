const colors = require('colors')
const fs = require('fs')
const bodyParser = require('body-parser')
const express = require('express');
const bcrypt = require('bcrypt')

const miServidor = express();
miServidor.use(bodyParser.json());

let data = [];
let newsUsers = [];

miServidor.get('/tweets',(request,response)=>{
fs.readFile('data.json',(error,fileContents)=>{
        if(error){
            throw error,
            response.send({"error":"error"})
        }else {
             data = JSON.parse(fileContents)
             response.send(data)
           
            
        }
    })
})


miServidor.post('/editar',(request,response)=>{
    if (request.body.content && request.body.fecha && request.body.usuario) {
    fs.readFile('data.json',(error,fileContents)=>{
        if(error){
            throw error 
        }else {
            data = JSON.parse(fileContents)  //<------leo el archivo
           
            data.push(request.body)    //<----pusheo el body el nuevo body para luego sumarlo
            
            fs.writeFile('data.json', //<-----escribo el la array con todos los elementos nuevos 
            JSON.stringify(data),
            (error)=> {
                if(error){
                    throw error
                } else {
                   response.send("tweet successfully added ") //<-----envio respuesta
                   console.log("added new tweet".magenta)
                }
            })
        }
    })} else{
        response.send("el body esta mal formado")
        console.log("error body form".red)
    }
     
})

miServidor.post('/register',(req,res)=>{
    if(req.body.username && req.body.password){
        bcrypt.hash(req.body.password,12,
           (error,hash) => {
               if (error) throw error;
           const userData = {"username":req.body.username,"password":hash}
           
           fs.writeFile('user.json',JSON.stringify(userData),
           (error) => {
               if (error) throw error
               console.log("User create".magenta)
               res.send({ "successfully": "Added new user" })
           })
            })
    }else{
        res.send({"error":"Send bad body"})
    }
})

miServidor.post('/login',(req,res) => {
    if(req.body.username && req.body.password){

        const userData = {"username": req.body.username,
        "password": req.body.password
    }
    fs.readFile('user.json',(error,fileContents) => {
        if(error) throw error;
        const users = JSON.parse(fileContents);

        bcrypt.compare(userData["password"],users["password"],
        (error,result) =>{
            if (error) throw error;

            if (userData["username"] == users["username"] && result == true) {
                res.send({"successfully":"User loged"})
                console.log("User logged".green)
            } else {
                res.send({ "error": "Username or password is incorrect" })
                console.log("Error User No logged".red)
            }
        }
        )
    })
     }else{
        res.send({"error":"Send incorrect body"})
    }
})

miServidor.listen(3000,()=>{
    console.log("Server activated... >port 3000< ".yellow)
})