const connection = require('./db_model');



exports.newregister = (username,password,email,callback)=>{
    connection.query(
        `INSERT INTO trekking.user
        (username,password,email)
        VALUES
        ("${username}","${password}","${email}");`
        ,callback
    )
}



exports.loginCompare = (username,password,callback)=>{
    connection.query(
        `SELECT * FROM accounts WHERE 
        username = "${username}" 
        AND password = "${password}"`
        ,callback
    )
}



exports.listUsers = (callback) => {
    console.log("caca")
    connection.query(
        ` SELECT * FROM trekking.user;`, callback
    )
}

exports.userId = (id,callback)=>{
    connection.query(
        `SELECT * FROM trekking.user WHERE id = ${id};`
        ,callback
    )
}

exports.createUser = (username,password,dateInscription,email,age,weitgh,sex,callback)=>{
    connection.query(
        `INSERT INTO trekking.user
        (username,password,dateInscription,email,age,weitgh,sex)
        VALUES
        ("${username}","${password}",${dateInscription},"${email}",${age},${weitgh},"${sex}");`
        ,callback
    )
}


exports.modifyUser = (
    id,
    username,
    password,
    dateInscription,
    email,
    age,
    weitgh,
    sex,
    callback
    ) =>{
    connection.query(
        `UPDATE trekking.user
        SET
        username = "${username}",
        password =  "${password}",
        dateInscription = ${dateInscription},
         email = "${email}" ,
         age = ${age}, 
         weitgh= ${weitgh} ,
         sex= "${sex}"
        WHERE id = ${id};`
        ,callback
    )
}

exports.removedUser = (id,callback)=>{
    connection.query(
 `DELETE FROM trekking.user WHERE id = ${id};`,callback
    ) 
}
