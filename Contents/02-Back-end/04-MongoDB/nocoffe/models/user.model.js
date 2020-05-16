const mongoose = require('mongoose');

const types = mongoose.Schema.Types;


const userSchema = new mongoose.Schema({    //<----creamos el schema
    "_id": {
        type: types.ObjectId , //<---------NECESITAREMOS SU NUMERO ID
        require: true,  //<----para que sea obligatorio
    },
    "username":{
        type: types.String,
        require: true ,
        min:3,
        max:50
    },
    "email":{
        type:types.String,
        require: true,
        min:5,
        max:255
    },
    "password":{
        type: types.String,
        require: true,
    }
}); 




module.exports = mongoose.model('Usuarios',userSchema); //<----es el nombre del modelo que corresponde a una coleccion de mongo