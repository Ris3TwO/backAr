 const User = require('../models/user')
 var fs = require('fs');

 module.exports = function(app) {

     /************************************* */
     app.get('/', (req, res) => {
         res.json(200);
     })



     app.post('/login', (req, res) => {

         const userData = {
                 user: req.body.user,
                 password: req.body.password
             }
             //console.log(userData, "ASEREJEDEJADEJE")
         User.login(userData, (err, data) => {

             console.log(data)
             if (data.data == undefined) {
                 if (data[0].password == userData.password) {
                     res.send({
                         sucess: true,
                         id: data[0].client_id
                     })
                 } else {
                     res.status(500).send({
                         sucess: false,
                         msj: 'Clave Invalida'
                     })
                 }

             } else {
                 res.status(500).send({
                     sucess: false,
                     err: err,
                     msj: "Este Usuario no Existe"
                 })
             }

         })
     })

     /************************************* */
     app.get('/users', (req, res) => {
             console.log(req.query.id, "here")
             const userData = {
                 client_id: 12

             }
             console.log(userData)
             User.getMicroUsers(userData, (err, data) => {
                 if (data) {
                     console.log(data)
                     res.send({
                         sucess: true,
                         data: data
                     })
                 } else {
                     res.status(500).json({
                         sucess: false,
                         err: err
                     })
                 }

             })

         })
         /************************************* */
     app.post('/microuser', (req, res) => {
             const userData = {
                 id: null,
                 user: req.body.user,
                 password: req.body.password,
                 username: req.body.username,
                 access_level: req.body.access_level,
                 enabled: req.body.enabled,
                 client_id: req.body.id

             }
             console.log(userData)
             User.insertMicroUser(userData, (err, data) => {
                 if (data) {
                     console.log(data)
                     res.json({
                         sucess: true,
                         msg: 'Usuario Insertado',
                         data: data
                     })
                 } else {
                     res.status(500).json({
                         sucess: false,
                         err: err
                     })
                 }
             })
         })
         /************************************* */

     /************************************* */
 }