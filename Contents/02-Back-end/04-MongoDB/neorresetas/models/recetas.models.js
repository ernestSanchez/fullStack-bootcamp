const moongose = require('mongoose');


const types = moongose.Schema.Types;

const Schema = new moongose.Schema({
    "_id":{
        require: true ,
        type: types.ObjectId
    },
    "isAnonymus":{
        require: true,
    }
})