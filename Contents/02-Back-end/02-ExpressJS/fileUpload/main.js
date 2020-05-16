const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const server = express();


server.use(express.static('web'));

server.post('/upload', (req, res) => {
    const storeConfig = multer.diskStorage({
        destination: './uploads'
    });

    const upload = multer({ "storage": storeConfig }).single('myFile');

    upload(req, res, (error) => {
        if (error) throw error;

        //subire imagen a cloudynary
        cloudinary.config({
            "cloud_name": "dc1jvchzq",
            "api_key": "286464852835855",
            "api_secret": "Dy2WryXnZ6MjOnJ_atx1Dt7QsMk"
        })

        const filePath = req.file.path; //<----ruta donde esta guardada en mi pc

        const fileRandonName = Date.now();//<----le doy un nombre randon con la fecha

        cloudinary.uploader.upload(
            filePath,
            { public_id: `api/${fileRandonName}`, tags: 'zombieland' },
            (error, imagen) => {
                if (error) throw error;

                //borrare la imagen del servidor

                fs.unlinkSync(filePath);
                res.send(imagen)
            }
        )
    })
})


server.listen(3000, () => {
    console.log("server 3000")
})