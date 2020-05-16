const express = require('express');
const bodyParser = require('body-parser');

const server = express();


server.use(bodyParser.json());


server.get('/',(req,res)=>{
res.send("propicios dias")
})


server.listen(3000,()=>{
    console.log("server activo 3000")
})