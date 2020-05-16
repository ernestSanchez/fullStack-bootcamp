const moongose = require('mongoose');

const types = moongose.Schema.Types;

const bookSchema = new moongose.Schema({
    "_id":{
        type: types.ObjectId,
        require: true
    },
    "nameBook":{
        type: types.String,
        require: true,
        min:3,
        max:100
    },
    "authorName":{
        type: types.String,
        require: true,
        min:3,
        max:100
    },
    "genero": {
        type: types.String,
        require: true ,
        enum: ["accion","comedia","suspense","grafica","amor","cienciaFiccion"]
    },
    "paginas":{
        type: types.String,
        require: true,
        min:5,
        max:1000
    }

});




module.exports = moongose.model('Libros',bookSchema);