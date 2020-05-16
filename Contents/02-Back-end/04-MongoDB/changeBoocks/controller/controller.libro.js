const mongoose = require('mongoose');
const Libros = require('../models/libro.model');



mongoose.connect('mongodb://localhost:27017/Libros', { useNewUrlParser: true, useUnifiedTopology: true });

//Crear libro
exports.crearLibro = (req, res) => {
    const data = {
        "_id": mongoose.Types.ObjectId(),
        "nameBook": req.body.nameBook,
        "authorName": req.body.authorName,
        "genero": req.body.genero,
        "paginas": req.body.paginas
    }
    const newBook = new Libros(data);
    newBook.save((error) => {
        if (error) throw error;
        res.send({
            "succes": "libro guardado",
            "_id": data._id
        })
    })
}

//Obtener lista de libros

exports.todoLibros = (req, res) => {
    Libros.find((error, libros) => {
        if (error) throw error;
        res.send(libros)
    })
}

//Obtener un libro
exports.getlibro = (req, res) => {
    const id = req.params.id;
    recetas.findById(id, (error, result) => {
      if (error) throw error;
      res.send(result);
    });
  };
  
  //Editar un libro
  exports.updatelibro = (req, res) => {
    const data = {
      _id: req.body._id,
      nameBook: req.body.nameBook,
      authorName: req.body.authorName,
      genero: req.body.genero,
      paginas: req.body.paginas
      };
    Usuarios.findByIdAndUpdate(
      req.body._id,
      {
        $set: data
      },
      (error, result) => {
        if (error) throw error;
        res.send({ message: "Ok libro actualizado" });
      }
    );
  };

//Eliminar un libro

exports.deleteLibro= (req, res) => {
    const _id = req.params.id;
    Usuarios.findByIdAndDelete(_id, (error, result));
    if (error) throw error;
    res.send({ message: "Ok libro borrado" });
  };
  