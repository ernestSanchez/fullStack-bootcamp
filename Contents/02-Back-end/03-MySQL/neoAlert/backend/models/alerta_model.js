const connection = require('./db_model');


exports.crearAlerta = (fecha,atendida,descripcion,ciudadano_id,barrio_id,tipoAlerta_ID,callback) => {
connection.query(
    `INSERT INTO neoalert.alerta 
    (fecha,atendida,descripcion,ciudadano_id,barrio_id,tipoAlerta_ID)
    VALUES
    ("${fecha}",${atendida},"${descripcion}",${ciudadano_id},${barrio_id},${tipoAlerta_ID});`
    ,callback
    )
}

exports.listarAlertas = (callback)=>{
    connection.query(
        `SELECT * FROM neoalert.alerta;`,callback)
}

exports.modificarAlerta = (atendida,descripcion,id,callback) => {
connection.query(
    `UPDATE neoalert.alerta
    SET
    atendida = ${atendida} ,
    descripcion = "${descripcion}"
    WHERE id = ${id};`
,callback)
}

exports.eliminarAlerta = (id,callback)=>{
connection.query(
    `DELETE FROM neoalert.alerta WHERE id = ${id};`
    ,callback)
}