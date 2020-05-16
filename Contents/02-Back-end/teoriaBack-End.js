


///////////////////// back end ////////////////////////

// back-end 
//  ___|___
//    |       |
//     servidor  DataBase (base de datos)
//        web           


/// servidores :es cualquier despositivo capaz de atender la peticion de un cliente y devolverle una respuesta en concordancia

/// haya varios tipos de servidores:
// de los mas inportantes son:
// - archivos (FTP) es un servidor para guardar archivos 
// - impresiones (impresoras)
// - correo : para enviar o recibir emails
// - telefonia (VoIp) conrolan las llamadas a traves de internet estan controladas por un servidor central
// - proxy hace de intermediario entre un cliente y un destino final 
// - web : un servidor que recibe una peticion http y devuelve archivos de la web
//y puede devolver 4 tipos de archivos html/css/js/JSON

/////////////servidor web :como se crea 

// -1 necesitamos un hradware (un pc) se le suele llamar instancia.
// hosting es el servivio mediante el cual una empresa te deja usar sus servidores (instancias)
//provedores de hosting hay a patadas ej: 1&1,hostinger,amazon,google,microsoft...
//tipos de instancias que puedo contratar
//dedicado es todo el servidor para ti exclusivamente 

//vps es una como  "particion" del servidor



// -2 necesitaremos un software programa informatico (servidor http) que craremos que se ejecuta en la instancia 
// se puede dividir en 2 tipos 
//estatico : es un servidor cuyos archivos web no van a cambiar ej:github Pages //para los archivos de la web

//dinamico : servidor que cuyos datos van cambiando constantemente //para los datos de la web .la api chuck norris 

//cuando quieres crear un servidor http  dos alternativas: 
//Scratch empezarlo desde cero linea a linea 
//1-escoger el lenguaje que vas utilizar phyton/ruby/Java/php
// para  programagarlo en javaScript necesitaremos:
//NodeJs una herramienta para programar servidores web con javaScript (es un interprete de lenguaje) se basa en el interprete v8


// bult-in es uno prefabricado hay varias alternativas 

// - Apache (1995) es estatico de codigo abierto el mas antiguo de bult-in
// - Nginx (2004) servidor web estatico codigo abierto es mas eficiente y soporta mas carga de trabajo es mas optimo que Apache

// - IIS (windows) <--- servidor de windows donde arrojar aplicaciondes .NET
//(.NET) <----framework para hacer paginas web usando C# solo se pueden ejecutar en IIS



/////////// nodeJs

//ceramos una carpeta 

/////// npm init para convertir una carpeta en un proyecto de node

//entry point: (index.js) main.js lo llamaremos asi


////creamos en el visual un archivo llamado main.js


///en la consola node main.js para ver directamente en cmd sin navegador programa que se ejecuta directamente en la terminal

//importar la libreria en el main.js 

const colors = require('colors')

console.log("hola mundo ")

// el node ya trae unas librerias instaladas por defecto core Node solo hay que importarlas. hay 3 muy buenas 

// fs <---- file system es la parte del sistema operativo del ordenador que gestiona los archivos y carpetas
const fs = require('fs')
fs.writeFile(
    'data.json',//nombre del archivo
    JSON.stringify({ "tiempo": "soleado" }),//informacion que pongo dentro el archivo en este caso que es tipo Json lo - stringifyear JSON.stringify
    (error) => {  //<----- hacerle un callback
        if (error) {
            throw error //<--lo ponemos para que si hay error la aplicacion se pare en ese problema que pete en ese punto y no continue
        } {
            console.log("Archivo guardado con exito!".green)
        }
    }
) //<----- funcion para crear archivos en el ordenador hay que darle 3 argumentos 

fs.readFile(  //<----para leer los archivos del ordenador
    'data.json', // nombre del archivo 
    (error, fileContents) => {  //callback que se ejecutara cuando este toda la info 
        if (error) {
            throw error
        } else {
            const data = JSON.parse(fileContents)//<---- lo parseamos 
            console.log(data)
        }
    }
)

///////////////////////process : un proceso es la ejecucion del programa nos permite acceder a la imformacion del proceso  node

const process = require('process')

const argumentos = process.argv;  // argv son los argumentos 

/////los argumentos de los procesos es la informacion extra que el usuario pasa al proceso al ejecutarlo




////// https : es una libreria para hacer peticiones http y para recibir peticiones http // no es muy usada


/// peticion directa sin pasar por front-end


const https = require('https'); //<-----libreria 

https.get(       //<-----funcion get 
    "https://api.chucknorris.io/jokes/random", //<----argumentos primero el endpoint
    (respnseApi) => {

        let buffer = "";

        //cada vez que recibo un dato api ara esto:
        respnseApi.on('data', (trozosDeinformacion) => { //trozosDeinformacion se llaman chunk trozitos de informacion en exadecimal por caracteres
            buffer += trozosDeinformacion;
        })

        //cuando haya terminado la respuesta Api
        respnseApi.on('end', () => {
            console.log(buffer)
        })
    }
)
// stream de datos es el flujo de la respuesta de datos de la api a cuentagotas

//formas de hacer peticiones http   https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html

////////////////////----------------------------------------------------//////////////////

// para que el ordenador escuche una peticion http para crear un mini servidor. tampoco es muy usada

//puertos http son un numero que se le asigna a los servidors que se estan ejecutando en una instancia para que no se interrumpan enrtre ellos
// el rango de puertops abiertos va de 0 - 65.583
//el puerto esntandar par un protocologo http es el 80 (hacer peticiones http)
//para las peticiones  htpps es el 443


const http = require('http');

//hago la funcion llamada peticion 
http.createServer((request, response) => {//<------informacion que recibo y la que envio 
    response.write("hola mundo ¡!");
    response.end();
}).listen(3000)//<----numero de puerto 



///// Express JS la libreria que vamos a usar para crar servidores (trabajara por detras la libreria de core Node)
//cmds install : npm i express

const express = require('express');



const fs = require('fs');

//Creo un servidor
const miServidor = express();

//configurar los endpoints le voy a decir lo que el servidor tiene que hacer cada vez que reciba una peticion 
miServidor.get('/saludar',//<------creamos el endpoint en el argumento "/saludar"
    (request, response) => { //<---en la funcion flecha le damos dos argumentos "request" para sacar la info sobre la peticion, "response" enviar respuesta 
        response.send({ "Message": "Hola mundo !" })
    })

//otro endpoint GET nuevo /name
//devolver vuestro nombre

miServidor.get('/name', (request, response) => {
    response.send({ "Message": "Ernesto Sanchez" })
})

miServidor.get('/data', (request, response) => {
    fs.readFile('data.json', (error, fileContents) => {
        if (error) {
            throw error
        } else {
            const data = JSON.parse(fileContents)
            response.send(data)
        }
    })
})


//endpoint llamadas post


miServidor.post('/editarArchivo', (request, response) => {//<---para hacer la llamada post por postman
    fs.writeFile(
        'data.json',
        JSON.stringify(request.body),//<---el body que manda el cliente y lo ponemos en el data.json y lo stringifyeamos 
        (error) => {
            if (error) {
                throw error
            } else {
                response.send({ "message": "OK archivo creado" })
            }
        }
    )
})


//decirlo el puerto en el que escucha 
miServidor.listen(
    3000, //<---- puerto 
    () => { //<------callback
        console.log("servidor escuchando en el puerto 3000")
    }
)



//nodemon https://www.npmjs.com/package/nodemon palicacion(o libreria) para que se actualize el cli o terminal cada vez que hacemos un cambio

// install npm i -g nodemon // -g  es para instalarlo globalmente cuando querramos utilizarlo si lo utilizamos siempre

// los comandos cambiaran en vez de node a nodemon ej: nodemon main.js


//middleware es un software que se asienta entre  el cliente y la api y que modica la llamadas que llegan a la api

//localstorage pequeños espacios de memoria en el navegador como las cookies solo que en las cockies texto plano y en localstorage objetos
//funciones para llamar el localStorage 
//1-para guardar algo en el localStorage:
//localStorage.setItem("nombre","jose")

//2-para recuperar o sacar algo de el localStorage:
//localStorage.getItem("nombre")


///////////// seguridad de apis

// man in the middle alguien que intercepta en una llamada http y manipula los datos que se envian

// ataque de fuerza bruta  consiste en hasear un monton de contraseñas o paalabras y ver si alguno de los hases que salen coinciden con alguno que los tienes 

// hash es el resultado de pasar un input por una funcion de hashing
/// funciones hash (funciones de resumen)
// hashear "encriptar irreversiblemente"
///actualmente hay varias funciones de hash 
//en programacion:

// MD5 validar la integridad de un archivo (que este bien y no haya sido interceptado)
// SHA-1 tiene colisiones esta descartado 
// SHA-2 por ahora es valido pero se sospecha que puede tener bulnavirabilidades
// SHA-3 valido 

//en web: nos interesa que sean lentos en hacerse 
//Bycrypt es que se utiliza para hashear contraseñas en la web.
//bycrypt es un algoritmo de hasing que lleva desde 1999

//node.bcrypt.js
// install: npm i bcrypt

//////////////////////////////////////////////////////////////////

// Formulario en el front end lo validas cuando tienes una llamada en el http la sanitize : el proceso por el cual se depura el input o el body en el http
// express validator = como medida de seguridad
// helmet= es una medida extra de seguridad
// 1 comprobar que el usuario no exista y si se cumple hago el if de escribir
// las api no solo estaran compuestas de los endpoint de autentificacion login y register tambien tendran enpoints normales que hemos hecho hasta ahora las operaciones crud:
// para proteger los otros endpoints  deberemos hacer uso de las sessions.
// SESSIONS:
// Un intercambio de informacion interactivo y semipermanente (una cookie con un numero muy largo de sesion
// json web token:
// con la autentificacion se inicia la sesion y el token se coloca en la cookie y la cookie se coloca en el cliente
// TOKEN: Es una combinacion alphanumerica de longitud variable que servira para iniciar una sesion(el token va a tener una minima informacion del usuario)
// ejemplo: cogemos un dato como es el username y lo que voy  encriptar con una contraseña que solo conozco yo en el servidor y al username yo le dare esa coockie encriptada
// JWT (json web tokens) : Es un tipo de token que se genera al encriptar una informacion en formato json(el token que se genera con esto esta firmado)(cada vez que el usuario se logue se le mandara un nuevo token con tu firma de encriptacion en una cookie)
// payload:la clave que vamos a usar en el token
// OFUSCAR: es el acto deliverado no destructivo para hacerlo mas dificil de leer


//////////////////////////////////// base de datos ////////////////////////////////////////////

//////////////////base de datos: es un servidor en la que guardo toda la informacion de una aplicacion 

////////tipos:

//operacional  : pensada en ser rapida segura mas funcional 

//analiticas : que este bien organizada para analizarla

////// lo didividimos en dos familias o ramificaciones de los tipos:

///////////////// relacionales ( sql ) (los años 80,90) en la que lo esencial es tener una estructura inicial fija que no cambia y ceñirse a esa estructura siempre te asegura una seguridad de datos

/////base de datos SQL:

//// MySQL (mysql) tambien esta el forchck que es MariaDB se hizo por que oracle compro MySQL y se pensaba que se privaterizaria  

// es un programa Structured Query Language es el lenguaje que se usa pàra hacer consultas esxtructurales (con una tabla a una) base de datos relacional

//sinonimos terminologia en base de datos:
// tabla = entidad
// fila = tupla = registro
// columnas = campo = clave
//sql SQL es un lenguaje 
// DML data manipulation lenguaje para modificar
// DDL data definition lenguage para crear


////////////////////////// MySql dentro de el podemos tener varias bases de datos                     

//estrectuctura de base de datos es el schema en el cual encajan los datos (schema de bases de datos es la estructura)

//entidad es los datos que quiero en euna tabla 
//datos:

// PK pk clave primaria para identificar las filas cada fila
// nn NN non null no puede ser nullo
// uq UQ que tiene que ser unico


/// HAY tres tipos de relacionse 
//1:1

//1:n //siempre seleccionamos primero el destino

//n:m
// se relaciona bidireccionalmente entre varias columnas de dos  tablas creando una tabla puente


//clave foranea o extrangera cuando relacionas tablas (se forma una columna extra)
//sirve para identificar la otra tabla conectada con la primaria

// normalizacion: un proceso de 3 pasos que hay que seguir para saber si una base de datos esta bien diseñada
// 1-regla: (atominicidad) cada celda solo puede tener un unico valor no puede terner varios 
//1nf nivel 1 de regla formal 
//2-regla : no puede haber una celda que no dependa de la clave primaria (dependencia funcional)
//2nf nivel 2
//3-regla : (independencia claves no primaria) no tener dependencias funcionales 
// cuando llega al 3 nivel esta normalizada




///PostgreeSQL

///CouchDB

//SQLite







///////////// no relacionales o no sql  (los años 2000)  no se restringe a una estructura inicial no te asegura una estructura pero es mas flexible




/////DML SQL (querys) DATA MANIPULATION LANGUAGE







// #query para sacar datos de una tabla especificando colummna
// SELECT Name FROM gimnasio.actividades;

// #seleccionar todas la columnas de una tabla
// SELECT *  FROM gimnasio.trabajadores;

// #PARA CONTAR LAS FILAS CON EL FILTRO QUE LE DAS
// SELECT COUNT(*)  FROM gimnasio.trabajadores;

// #para filtrar por dinero en este ejemplo
// SELECT *  FROM gimnasio.trabajadores WHERE Salary > 30000;

// #para oredenar ascendentemente ASC/DESC POR DEFECTO ES DESCENDIENTE SIN PONER NADA
// SELECT *  FROM gimnasio.trabajadores
// ORDER BY  Salary DESC;

// #PARA PONER UN ALIAS NUEVO NOMBRE DE UNA COLUMNA SOLO EN LOS RESULTADOS DE LA API
// SELECT FechaContratacion AS 'Fecha'  FROM gimnasio.trabajadores;

// #ESTO PARA CONTAR POR EJEMPLO LOS QUE HAY DEL MISMO TIPO
// SELECT COUNT(DISTINCT Tipo) FROM gimnasio.trabajadores;

// #insertar datos en la tabla
// INSERT INTO gimnasio.trabajadores 
// (FirestName,Salary,Departamento,FechaContratacion,Tipo)
// VALUES
// ('Alex', 30000 ,'Pesas', 20200218 , 'completa');

// INSERT INTO gimnasio.trabajadores 
// (FirestName,Salary,Departamento,FechaContratacion,Tipo)
// VALUES
// ('Ernesto', 40000 ,'Zumba', 20200220 , 'completa');

// INSERT INTO gimnasio.trabajadores 
// (FirestName,Salary,Departamento,FechaContratacion,Tipo)
// VALUES
// ('Leo', 50000 ,'Spinning', 20200217 , 'completa');

// #mofificar datos
// UPDATE gimnasio.trabajadores SET Salary = 50000 WHERE ID = 1;

// UPDATE gimnasio.trabajadores SET Tipo = 'practicas' WHERE ID = 2;

// # DELETE
// DELETE FROM gimnasio.trabajadores WHERE ID = 3;

// SELECT *  FROM gimnasio.trabajadores;

// SELECT *  FROM gimnasio.actividades;

// #aqui le ponemos en actividades un actividad y con el id asignamos el trabajador
// INSERT INTO gimnasio.actividades 
// (Name,Duracion,trabajadores_ID)
// VALUES
// ('Zumba', 45, 5);

// INSERT INTO gimnasio.actividades 
// (Name,Duracion,trabajadores_ID)
// VALUES
// ('crossfit', 25, 6);

// INSERT INTO gimnasio.actividades 
// (Name,Duracion,trabajadores_ID)
// VALUES
// ('Bodypump', 25, 4);

// # sacar el salario de profesor que imparte zumba
// SELECT actividades.Name, trabajadores.FirestName, Trabajadores.Salary
// FROM gimnasio.actividades
// JOIN gimnasio.trabajadores ON actividades.Trabajadores_ID = Trabajadores.ID
// WHERE actividades.Name = 'Zumba';

//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'eduardorosa'


///////////// MC 
// m = MODELO GESTION DE DATOS  (QUERIES)
//C = CONTROLADOR CONTROLAR LOS DATOS (LOGICA DE LA APLICACION)


//// como subir una api a una estancia remota para que este abierta a todos

// dpeployar el ultimo paso asegurarnos antes de hacerlo.

//////////////// necesitaremos 2 instancias 

/////Deploy datababase (base de datos)



// normalmente se usa RDS (managed relacional database service) vamos a usar esta que es free https://www.db4free.net/
////creamos la base de datos en la web y creamos una conexion de mysql a la web


////deploy servidor (la app echa con express) vamos a usar https://www.heroku.com/ 

// instalaremos el heroku desde la terminal npm i heroku

//////////////////// mongo db  //////////////////////////

///// bses de datos no sql sin esquem,tablas... los principios relacionales

/// tipos algunos ejemplos:

/////mongo db:
//- documental (orientadsa a documentos) es una base de datos en donde cada dato(fila) se va a guardar en un documento (en un archivo)
////coleccion es un agrupacion de documentos que se relacionan por una caracteristica
/// para editar o programar la api utilizaceremos npm i mongoose un intermediario entre api y mongododb


//MAS TIPOS:

//otro tipo de base de datos no sql (no relacional )
//-Clave-valor  (Cassandra,Dinamo,Redis)


//Base de datos en grafo (relaciona por registros) se imagina una red donde los nodos se ralcionan por registros (Neo4J)

//bases de datos tabular (BigTable) cada dato es una tabla no estan relacionadas entre si


//truquis


//mongoo atlas


//multer es middelware para parsear cualquier tipo de archivo


//cloudinary (cdn para archivos)



////// metodologia AGILE son meteodologias que permiten hacer cambios facilmente  en un proyecto en marcha 

//////desarrollo iterativo:funcionan asi desarrollo iterativo de forma circular(ciclos) en x tiempo y cada iteratividad tiene la forma cascada 
///empezamos por uno basico y le vamos añadiendo funcionalidades poco a poco

////desarrollo incremental haces algo muy basico y vas evolucionando segun cliente

//vamos a ver 2 las mas famosas:

///1-SCRUM la idea que trabaje la gente en paralelo haciendo equipos pequeños de perfiles mixtos para que se cordinen entre ellos siempre con un 
//Scrum master(lead) divide el trabajo en pequeñas tareas ('tikets') a sus trabajadores para conseguir una Story(una gran tarea) que es una coleccion de tikets
// epic dos o mas storys que colaboran entre si 
//Backlog donde se agrupan todos tus tickets y se organizan por prioridad
//un spring es un periodo corto de tiempo en el cual vas a resolver un cojunto de tickets en base su prioridad

///2-Kanban coger todos los tikets y organizarlos por columnas.Baclog/prioryti/in progres/bloked/QA/Done (es como un pipeLine)
//para hacer tikets https://trello.com/es#

///3- scrumban mezcla de las dos scrum/kanban


///////////////////// 


// sanetizar
server.post('/crearUsuario', [
    check('username').isString()
] , (req, res) => {
        validationResult(req);
        req.body.username
    })

    // jhervas  09:17
    // https://github.com/JoseHervas/API-MYSQL-EXAMPLE (
