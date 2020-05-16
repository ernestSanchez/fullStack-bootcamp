const asistenteModel = require('../models/asistente_model');


exports.getAllUsers = (req, res) => {
    asistenteModel.getUsers((error, rows) => {
        if (error) throw error;
        if (rows.length === 0) {
            res.status(404).send({ "error": "mal request" })
        } else {
            res.send(rows)
        }

    });
}


exports.getOneUser = (req, res) => {
    const id = req.params.id;
    asistenteModel.getUserByID(id, (error, rows) => {
        if (error) throw error;
        if (rows.length === 0) {
            res.status(404).send({ "error": "Ese ID no existe" })
        } else {
            res.send(rows)
        }

    });
}



exports.createUser = (req, res) => {
    if (
        req.body["nombre"] &&
        req.body["apellido"] &&
        req.body["tlf"] &&
        req.body["email"] &&
        req.body["nunacompanante"] &&
        req.body["entradapagagada"]

    ) {
        const fechainscripcion = new Date().toJSON().slice(0, 10).replace(/-/g, '');

        asistenteModel.createNewUser(
            req.body["nombre"],
            req.body["apellido"],
            req.body["tlf"],
            req.body["email"],
            req.body["nunacompanante"],
            req.body["entradapagagada"],
            fechainscripcion,
            (error, result) => {
                if (error) {
                    res.status({ "error": error })
                    throw error;
                } else {
                    res.send({ "error": "OK usuario creado", "id": result["insertId"] })
                }
            }
        )
    } else {
        res.status(400).send({ "error": "peticion POST mal formada" })
    }
}

exports.modifyUser = (req, res) => {

    const id = req.body.id;

    if (
        req.body["nombre"] &&
        req.body["apellido"] &&
        req.body["tlf"] &&
        req.body["email"] &&
        req.body["nunacompanante"] &&
        req.body["entradapagagada"]


    ) {


        const fechainscripcion = new Date().toJSON().slice(0, 10).replace(/-/g, '');

        asistenteModel.putUser(id,
            req.body["nombre"],
            req.body["apellido"],
            req.body["tlf"],
            req.body["email"],
            req.body["nunacompanante"],
            req.body["entradapagagada"],
            fechainscripcion,
            (error, result) => {

                if (error) {
                    res.status({ "error": error })
                    throw error;
                } else {
                    res.send({ "error": "OK usuario modificado" })
                }
            }
        )
    } else {
        res.status(400).send({ "error": "peticion PUT mal formada" })
    }
}



exports.delete = (req, res) => {
    asistenteModel.deleteOneUser(req.body['id'],
        (error, result) => {
            if (error) {
                res.send(error)
            } else {
                res.send({ "succes": "ok" })
            }
        }
    )
}


