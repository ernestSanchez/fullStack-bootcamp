const moongose = require('mongoose');
const libroModel = require('./libro.model')


const types = moongose.Schema.Types;

const userSchema = new moongose.Schema({
    "_id": {
        type: types.ObjectId,
        require: true,
    },
    "username": {
        type: types.String,
        require: true,
        min:3,
        max:50
    },
    "email":{
        type:types.String,
        require:true,
        min:5,
        max:255
    },
    "password":{
        type: types.String,
        require: true,
    },
    "libros": [{
        type: types.ObjectId,
        ref: 'Libros',
       }],
});


module.exports = moongose.model('Usuarios',userSchema);

