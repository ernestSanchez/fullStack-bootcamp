const connection = require('./db_model');

exports.listWalkings = (callback) => {
    connection.query(
        `SELECT * FROM trekking.walking ;`
        ,callback
    )
}


exports.Onewalking = (id,callback)=>{
    connection.query(
        `SELECT * FROM trekking.walking WHERE id= ${id};`,callback
    )
}

exports.addWalking = (location,duration,dificultad,acompañado,user_id,callback) =>{
    connection.query(
        `INSERT INTO trekking.walking
        (location,duration,dificultad,acompañado,user_id)
        VALUES
        ("${location}",${duration},${dificultad},${acompañado},${user_id});`
        ,callback
    )
}

exports.modifywalking = (id,location,duration,dificultad,acompañado,user_id,callback) =>{
    connection.query(
        `UPDATE  trekking.walking
        SET
        location = "${location}",
        duration = ${duration},
        dificultad = ${dificultad},
        acompañado = ${acompañado},
        user_id= ${user_id}
        WHERE id = ${id};`,callback
    )
}

exports.deleteWlking = (id,callback) =>{
    connection.query(
        `DELETE FROM trekking.walking WHERE id = ${id};`,callback
    )
}

