const multimedia = require('../models/multimedia')
var fs = require('fs');
const pump = require('pump');
/* const express = require (' express ');
const fileUpload = require ('express-fileupload');
app const =  express(); */
module.exports = function(app) {



    /**************************************** */
    app.post('/upload', function(req, reply) {
        const options = { limits: { fileSize: 1000 } };
        const mp = req.multipart(handler, done, options)
        let id;
        mp.on('field', function(key, value) {
            id = value;
            console.log('form-data', key, value)
        })

        function done(err) {
            console.log('upload completed')
            reply.code(200).send({ sucess: "Guardado Exitoso" })
        }


        function handler(field, file, filename, encoding, mimetype) {
            if (!fs.existsSync(`resources/${id}/`)) {
                fs.mkdirSync(`resources/${id}/`);
            }
            if (mimetype != 'application/pdf') {
                reply.status(400).send({
                    sucess: false,
                    err: "El tipo de archivo no es permitido"
                })
            } else {
                if (pump(file, fs.createWriteStream(`resources/${id}/${filename}`))) {
                    const userData = {
                        client_id: id,
                        process_id: 121312,
                        name: filename,
                        local: "0",
                        domain: 1,
                        path_data: `resources/${id}/${filename}`,
                        is_path_ico: 'asa',
                        path_ico: 'asdad',
                        category: 0,
                        media_type_id: 4,
                        metadata: 'Video de perrita',
                    }
                    console.log(userData)
                    multimedia.saveVideos(userData, (err, data) => {
                        if (data) {
                            console.log(data)

                        } else {
                            res.status(500).json({
                                sucess: false,
                                err: err
                            })
                        }
                    })
                } else {

                }

            }
        }
    })



    /**************************************** */

    app.post('/upload/pdf', (req, res) => {
        console.log(req.files)
        let EDFile = req.files.file
        let tipeFile = req.files.file.mimetype;
        let id = req.body.id
        if (tipeFile != 'application/pdf') {
            res.status(400).json({
                sucess: false,
                err: "El tipo de archivo no es permitido"
            })
        } else {
            console.log('2')


            if (!fs.existsSync(`resources/${id}/`)) {
                fs.mkdirSync(`resources/${id}/`);
            }
            EDFile.mv(`resources/${id}/${EDFile.name}`, err => {
                if (err) {
                    return res.status(500).send({ message: err, data: "Mensajes" })
                } else {
                    const userData = {
                        client_id: req.body.id,
                        process_id: 121312,
                        name: req.files.file.name,
                        local: "0",
                        domain: 1,
                        path_data: `resources/${id}/${EDFile.name}`,
                        is_path_ico: 'asa',
                        path_ico: 'asdad',
                        category: 0,
                        media_type_id: 4,
                        metadata: 'Video de perrito',
                    }
                    console.log(userData)
                    multimedia.saveVideos(userData, (err, data) => {
                        if (data) {
                            console.log(data)

                        } else {
                            res.status(500).json({
                                sucess: false,
                                err: err
                            })
                        }
                    })

                    return res.status(200).send({ message: 'File upload' })
                }


            })
        }
    })

    /**************************************** */

    app.post('/upload/video', (req, res) => {
        console.log(req.files)
        let EDFile = req.files.file
        let tipeFile = req.files.file.mimetype;
        let id = req.body.id
        if (tipeFile != 'video/webm') {
            res.status(400).json({
                sucess: false,
                err: "El tipo de archivo no es permitido"
            })
        } else {
            console.log('2')


            if (!fs.existsSync(`resources/${id}/`)) {
                fs.mkdirSync(`resources/${id}/`);
            }
            EDFile.mv(`resources/${id}/${EDFile.name}`, err => {
                if (err) {
                    return res.status(500).send({ message: err, data: "Mensajes" })
                } else {
                    const userData = {
                        client_id: req.body.id,
                        process_id: 121312,
                        name: req.files.file.name,
                        local: "0",
                        domain: 1,
                        path_data: `resources/${id}/${EDFile.name}`,
                        is_path_ico: 'asa',
                        path_ico: 'asdad',
                        category: 0,
                        media_type_id: 4,
                        metadata: 'Video de perrito',
                    }
                    console.log(userData)
                    multimedia.saveVideos(userData, (err, data) => {
                        if (data) {
                            console.log(data)

                        } else {
                            res.status(500).json({
                                sucess: false,
                                err: err
                            })
                        }
                    })

                    return res.status(200).send({ message: 'File upload' })
                }


            })
        }
    })

    /**************************************** */
    app.post('/upload/image', (req, res) => {
        console.log(req.files)
        let EDFile = req.files.file
        let tipeFile = req.files.file.mimetype;
        let id = req.body.id
        if (tipeFile != 'image/jpeg') {
            res.status(400).json({
                sucess: false,
                err: "El tipo de archivo no es permitido"
            })
        } else {
            console.log('2')


            if (!fs.existsSync(`resources/${id}/`)) {
                fs.mkdirSync(`resources/${id}/`);
            }
            EDFile.mv(`resources/${id}/${EDFile.name}`, err => {
                if (err) {
                    return res.status(500).send({ message: err, data: "Mensajes" })
                } else {
                    const userData = {
                        client_id: req.body.id,
                        process_id: 121312,
                        name: req.files.file.name,
                        local: "0",
                        domain: 1,
                        path_data: `resources/${id}/${EDFile.name}`,
                        is_path_ico: 'asa',
                        path_ico: 'asdad',
                        category: 0,
                        media_type_id: 4,
                        metadata: 'Video de perrito',
                    }
                    console.log(userData)
                    multimedia.saveVideos(userData, (err, data) => {
                        if (data) {
                            console.log(data)

                        } else {
                            res.status(500).json({
                                sucess: false,
                                err: err
                            })
                        }
                    })

                    return res.status(200).send({ message: 'File upload' })
                }


            })
        }
    })


}