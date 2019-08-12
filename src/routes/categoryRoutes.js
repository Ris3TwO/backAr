const category = require('../models/category')
var fs = require('fs');
const pump = require('pump')

module.exports = function(app) {
    /************************************* */
    app.get('/category', (req, res) => {
            console.log("here params")
            const userData = {
                id: 3
            }
            category.categorys(userData, (err, data) => {
                console.log(data, "data here")
                if (data) {
                    res.send({
                        sucess: true,
                        data: data
                    })

                } else {
                    res.status(500).send({
                        sucess: false,
                        err: err,
                        msj: "no hay data"
                    })
                }

            })
        })
        /************************************* */

    app.post('/subcategory', (req, res) => {

        console.log("here params", "kyc")
        const userData = {
            client_id: 3,
            category_id: req.body.category_id,
            //name: "Prueba"
            name: req.body.name

        }

        category.Insertsubcategory(userData, (err, data) => {
            console.log(data, "data here")
            if (data) {
                res.send({
                    sucess: true,
                    data: data
                })

            } else {
                res.status(500).send({
                    sucess: false,
                    err: err,
                    msj: "no hay data"
                })
            }

        })
    })
    app.get('/subcategory', (req, res) => {
            console.log("here params")
            const userData = {
                id: 3,
                //req.query.id
                // category_id: req.body.category_id,
                // name: req.body.name

            }
            category.getsubcategory(userData, (err, data) => {
                console.log(data, "data here")
                if (data) {
                    console.log(data)
                    res.send({
                        sucess: true,
                        data: data
                    })

                } else {
                    res.status(500).send({
                        sucess: false,
                        err: err,
                        msj: "no hay data"
                    })
                }

            })
        })
        /************************************* */
    app.post('/category/upload', function(req, reply) {
        const mp = req.multipart(handler, done)
        let textData = {
            description: "",
            id: "",
            category: ""
        };
        mp.on('field', function(key, value) {
            switch (key.toLowerCase()) {
                case "description":
                    textData.description = value
                    break;
                case "id":
                    textData.id = value
                    break;
                case "category":
                    textData.category = value
                    break;

                default:
                    break;
            }

            console.log('form-data', key, value)
        })

        function done(err) {
            console.log('upload completed')
            reply.code(200).send({ sucess: "Guardado Exitoso" })
        }


        function handler(field, file, filename, encoding, mimetype) {
            if (!fs.existsSync(`resources/${textData.id}/`)) {
                fs.mkdirSync(`resources/${textData.id}/`);
            }
            if (mimetype != 'image/jpeg') {
                reply.status(400).send({
                    sucess: false,
                    err: "El tipo de archivo no es permitido"
                })
            } else {
                if (pump(file, fs.createWriteStream(`resources/${textData.id}/${filename}`))) {
                    const userData = {
                        client_id: textData.id,
                        path_image: `resources/${textData.id}/${filename}`,
                        description: textData.description,
                        category: textData.category,
                    }
                    console.log(userData)
                    category.Insertcategorys(userData, (err, data) => {
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

    /*******************SUBIDA DE PDFS************************** */
    app.post('/upload/multimedia/pdf', (req, res) => {
        console.log(req.files)
        let EDFile = req.files.file
        let id = req.body.id
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
    })


    /************************************************** */
    /*******************SUBIDA DE PDFS************************** */
    app.post('/upload/multimedia/imagenes', (req, res) => {
        console.log(req.files)
        let EDFile = req.files.file
        let id = req.body.id
        if (!fs.existsSync(`resources/${id}/imagenes`)) {
            fs.mkdirSync(`resources/${id}/imagenes`);
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
    })


    /************************************************** */
}