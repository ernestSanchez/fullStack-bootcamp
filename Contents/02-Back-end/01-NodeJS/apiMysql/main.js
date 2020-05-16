
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const fs = require('fs');

let secrets = fs.readFileSync('secret.json')
secrets = JSON.parse(secrets);

const connection = mysql.createConnection({ //toda la info esta en el secrets.json ademas lo pongo en el gitignore
    "host": secrets["mysql_host"],
    "user": secrets["mysql_user"],
    "password": secrets["mysql_password"]
}); //para crear una conexion con la base de datos mysql


connection.connect();

console.log("conectado a mysql");

const server = express();



server.use(bodyParser.json());



server.get('/vuelos', (req, res) => {
    connection.query(
        'SELECT *  FROM aerolineasargentinas.vuelos',
        (error, rows) => {
            res.send(rows)
        })
})

server.get('/viajeros', (req, res) => {
    connection.query(
        'SELECT *  FROM aerolineasargentinas.pasajeros',
        (error, rows) => {
            res.send(rows)
        })
})

server.post('/vuelos', (req, res) => {
    
    let qsyl = 'INSERT INTO aerolineasargentinas.vuelos( TipoDeVuelo,Distancia,Escalas,AsientosDisponibles,FechaSalida,FechaLLegada,lugarOrigen,LugarLlegada,Aviones_Id )'
    let values = {
        
    }
    
    
    connection.query(
        'SELECT *  FROM aerolineasargentinas.pasajeros',
        (error, rows) => {
            res.send(rows)
        })
})



server.listen(3000, () => {
    console.log("servidor activado >port 3000<")
});