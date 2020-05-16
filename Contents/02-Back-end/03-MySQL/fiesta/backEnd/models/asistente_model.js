const mysql = require('mysql');
const fs = require('fs');
const path = require('path');


const absolutPath = path.join(__dirname.replace('models', ''), '/config/secrets.json')


const secretsContents = fs.readFileSync(absolutPath);
const secrets = JSON.parse(secretsContents);

var connection = mysql.createPool({
    host: secrets["mysql_host"],
    user: secrets["mysql_user"],
    password: secrets["mysql_password"]
});


exports.getUserByID = (id, callback) => {
    connection.query(
        `SELECT * FROM fiesta.asistente WHERE id = ${id};`,
        callback
    )
}

exports.getUsers = (callback) => {
    connection.query(
        `SELECT * FROM fiesta.asistente;`,
        callback
    )
}

exports.putUser = (
    id,
    nombre,
    apellido,
    tlf,
    email,
    nunacompanante,
    entradapagagada,
    fechareserva,
    callback
   ) => {


    connection.query(
        `UPDATE fiesta.asistente SET 
        nombre = "${nombre}" ,
        apellido = "${apellido}",
        tlf = "${tlf}", 
        email = "${email}",
        nunacompanante ="${nunacompanante}" , 
        entradapagagada = "${entradapagagada}", 
        fechareserva= ${fechareserva}
        WHERE id = ${id};`,
        callback
    )
}


exports.createNewUser = (
    nombre,
    apellido,
    tlf,
    email,
    nunacompanante,
    entradapagagada,
    fechareserva,
    callback
) => {
    connection.query(`INSERT INTO fiesta.asistente (nombre,apellido,tlf,email,nunacompanante,entradapagagada,fechareserva)
        VALUES
        ("${nombre}","${apellido}","${tlf}","${email}",${nunacompanante},"${entradapagagada}",${fechareserva});`,
        callback)
}

exports.deleteOneUser = (id, callback) => {
    connection.query(`DELETE  FROM fiesta.asistente WHERE id = ${id};`,
        callback
    )
}
