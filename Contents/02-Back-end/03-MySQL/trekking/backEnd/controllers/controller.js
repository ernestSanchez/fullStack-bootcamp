const user_model = require('../models/user_model');
const walking_model = require('../models/walking_model');
const bcrypt = require('bcrypt');




exports.allUsers = (req, res) => {
    user_model.listUsers((error, rows) => {
        if (error) {
            res.status(500).send({ "error": error })
            throw error;
        } else {
            res.send(rows)
        }
    })
}


exports.OneUser = (req, res) => {
    const id = req.params.id;
    user_model.userId(id, (error, rows) => {
        if (error) throw error;
        if (rows.length === 0) {
            res.status(404).send({ "error": "Ese ID no existe" })
        } else {
            res.send(rows)
        }
    });
}

exports.newUser = (req, res) => {

    if (
        req.body["username"] &&
        req.body["password"] &&
        req.body["email"] &&
        req.body["age"] &&
        req.body["weitgh"] &&
        req.body["sex"]
    ) {
        const fecha = new Date().toJSON().slice(0, 10).replace(/-/g, '');

        bcrypt.hash(req.body["password"], 14, (error, hash) => {

            user_model.createUser(

                req.body["username"],
                hash,
                fecha,
                req.body["email"],
                req.body["age"],
                req.body["weitgh"],
                req.body["sex"],
                (error, result) => {
                    if (error) {
                        res.send({ "error": error });
                        throw error;
                    } else {
                        res.send({
                            "message": "Ok added User",
                            "id": result["insertId"]
                        })
                    }
                }
            )
        })
    } else {
        res.satatus(400).send({ "error": "body mal formado" })
    }

}

exports.replaceUser = (req, res) => {
    const id = req.params.id;
    if (
        req.body["username"] &&
        req.body["password"] &&
        req.body["email"] &&
        req.body["age"] &&
        req.body["weitgh"] &&
        req.body["sex"]
    ) {
        const fecha = new Date().toJSON().slice(0, 10).replace(/-/g, '');

        user_model.modifyUser(
            id,
            req.body["username"],
            req.body["password"],
            fecha,
            req.body["email"],
            req.body["age"],
            req.body["weitgh"],
            req.body["sex"],

            (error, result) => {
                if (error) {
                    res.send({ "error": error });
                    throw error;
                } else {
                    res.send({ "message": "Ok modify User" })
                }
            }
        )

    } else {
        res.status(400).send({ "error": "body mal formado" })
    }

}
exports.deleteUser = (req, res) => {
    user_model.removedUser(req.body['id'],
        (error, result) => {
            if (error) {
                res.send(error)
            } else {
                res.send({ "delete": "ok" })
            }
        }
    )
}

exports.allWalkings = (req, res) => {
    walking_model.listWalkings((error, rows) => {
        if (error) {
            res.status(500).send({ "error": error })
            throw error;
        } else {
            res.send(rows)
        }
    })
}

exports.onlyWalking = (req, res) => {
    const id = req.params.id;
    walking_model.Onewalking(id, (error, rows) => {
        if (error) throw error;
        if (rows === 0) {
            res.status(400).send({ "error": "Este id no existe" })
        } else {
            res.send(rows)
        }
    })
}


exports.addedWalking = (req, res) => {
    if (
        req.body["location"] &&
        req.body["duration"] &&
        req.body["dificultad"] &&
        req.body["acompañado"] &&
        req.body["user_id"]
    ) {
        walking_model.addWalking(

            req.body["location"],
            req.body["duration"],
            req.body["dificultad"],
            req.body["acompañado"],
            req.body["user_id"],

            (error, result) => {
                if (error) {
                    res.send({ "error": error })
                    throw error;
                } else {
                    res.send({
                        "succes": "added new walkig",
                        "id": result["insertId"]
                    })
                }
            })
    } else {
        res.send({ "error": "body mal formado" })
    }
}


exports.replaceWalking = (req, res) => {
    id = req.params.id;

    console.log(req.body)


    if (
        req.body["location"] &&
        req.body["duration"] &&
        req.body["dificultad"] &&
        req.body["acompañado"] &&
        req.body["user_id"]

    ) {
        walking_model.modifywalking(
            id,
            req.body["location"],
            req.body["duration"],
            req.body["dificultad"],
            req.body["acompañado"],
            req.body["user_id"],

            (error, result) => {
                if (error) {
                    res.send({ "error": error })
                    throw error;
                } else {
                    res.send({ "succes": "usuario modificado" })
                }
            }

        )
    } else {
        res.send({ "error": "body mal formado" })
    }

}


exports.removedWalking = (req, res) => {
    walking_model.deleteWlking(req.body['id'],
        (error, result) => {
            if (error) {
                res.send({ "error": "id no existe" })
                throw error;
            } else {
                res.send({ "succes": "Delete Walking" })
            }
        }
    )
}