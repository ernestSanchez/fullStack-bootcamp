

const barrio_model = require('../models/barrio_model')
const ciudadano_model = require('../models/ciudadano_model')
const alerta_model = require('../models/alerta_model')
const bodyController = require('./body_controller')

exports.getCiudadanos = (req, res) => {
    ciudadano_model.listarCiudadanos((error, rows) => {
        if (error) {
            res.status(500).send({ "error": error })
            throw error;
        } else {
            res.send(rows)
        }
    })
}

exports.nuevoCiudadano = (req, res) => {
    bodyController.checkBody(res, req.body, ["username", "password", "mail"])
    ciudadano_model.crearCiudadano(
        req.body["username"],
        req.body["password"],
        req.body["email"],
        (error, result) => {                             //<----callback
            if (error) {
                res.send(error);
                throw error;
            } else {
                //console.log(result) 
                res.send({
                    "message": "ok user create",
                    "id": result["insertId"]
                })
            }
        }
    )
}


exports.nuevaAlerta = (req, res) => {
    if (
        req.body["atendida"] !== undefined &&
        req.body["descripcion"] &&
        req.body["ciudadano_id"] &&
        req.body["barrio_id"] &&
        req.body["tipoAlerta_ID"]
    ) {

        const fecha = new Date().toJSON().slice(0, 10).replace(/-/g, '');

        alerta_model.crearAlerta(
            fecha,
            req.body["atendida"],
            req.body["descripcion"],
            req.body["ciudadano_id"],
            req.body["barrio_id"],
            req.body["tipoAlerta_ID"],
            (error, result) => {
                if (error) {
                    res.send({ "error": error });
                    throw error;
                } else {
                    res.send({
                        "message": "ok alert create",
                        "id": result["insertId"]
                    })
                }
            }
        )
    } else {
        res.satatus(400).send({ "error": "body mal formado" })
    }
}


exports.getAlertas = (req, res) => {
    alerta_model.listarAlertas(

    )

}