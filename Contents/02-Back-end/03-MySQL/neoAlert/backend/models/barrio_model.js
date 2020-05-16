const connection = require('./db_model');

//funcione crud

exports.crearUnBarrio = (nombre,ciudad,cp,callback)=>{
        connection.query(
        `INSERT INTO neoalert.barrio
        (nombre,ciudad,cp)
        VALUES
        ("${nombre}","${ciudad}","${cp}");`
        ,callback)
}

exports.listarbarrios = (callback)=>{
        connection.query(
        `SELECT * FROM neoalert.barrio;`
        ,callback)
}


exports.modificarBarrio = (nombre,ciudad,cp,id,callback)=>{

    connection.query(
        `UPDATE neoalert.barrio 
        SET
        nombre = "${nombre}", ciudad ="${ciudad}", cp = "${cp}"
        WHERE id = ${id};`,callback
    )
}


exports.eliminarBarrio = (id,callback)=>{
    connection.query(
        `DELETE FROM neoalert.barrio WHERE id =${id};`
    ,callback)
}