const fs = require('fs');
const mysql = require('mysql');
const path = require('path');

const rutaAbsoluta = path.join(__dirname.replace('models',''),'/config/secrets.json')
const secretsContents = fs.readFileSync(rutaAbsoluta)
const secrets = JSON.parse(secretsContents);


const connection = mysql.createPool({
    "host":secrets["mysql_host"],
    "user":secrets["mysql_user"],
    "password":secrets["mysql_password"]
})


module.exports = connection;