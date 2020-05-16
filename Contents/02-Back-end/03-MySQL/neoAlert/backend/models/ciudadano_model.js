const connection = require('./db_model');

//4crud
exports.crearCiudadano = (username, password, email, callback) => {
    connection.query(
        `INSERT INTO neoalert.ciudadano 
(username,password,email)
VALUES
("${username}","${password}","${email}");`
        , callback)
}

exports.listarCiudadanos = (callback) => {
    connection.query(
        `SELECT * FROM neoalert.ciudadano ;`
        , callback)
}

exports.modificarCiudadano = (id, username, password, email, callback) => {
    connection.query(
        `UPDATE neoalert.ciudadano 
        SET username = "${username}",password = "${password}",email= "${email}"
        WHERE id = ${id};`
        , callback
    )

}

exports.eliminarCiudadano = (id, callback) => {
    connection.query(
        `DELETE FROM neoalert.ciudadano WHERE id = ${id};`
        ,callback
    )
}

