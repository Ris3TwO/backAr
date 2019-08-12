 const express = require('express')
 const User = require('./models/user')
 const multimedia = require('./models/multimedia')
 const path = require('path')
     //const app = express();
 const app = require('fastify')({
     logger: true,
 })

 // Declare a route

 /// Run the server!

 ///const multipart = require('connect-multiparty');
 const cors = require('cors');
 const fileUpload = require('express-fileupload')
 const morgan = require('morgan');
 const bodyParser = require('body-parser');
 ///settings
 ///app.set('port', process.env.PORT || 5000)


 app.register(require('fastify-static'), {
     root: path.join(__dirname, 'public'),
     prefix: '/', // optional: default '/'
 })


 //midlewares
 app.register(require('fastify-formbody'))
 app.use(morgan('dev'));
 app.use(cors())
 app.register(require('fastify-multipart'))


 //routes
 require('./routes/userRoutes')(app);
 require('./routes/categoryRoutes')(app);
 require('./routes/multimediaRoutes')(app);
 // Run the server!

 app.post('/a', (request, reply) => {
     reply.send({ hello: 'worlda' })
     console.log("ASEREJEDEJADEJE")
 })





 app.listen(5000, '0.0.0.0', (err, address) => {
     if (err) throw err
     app.log.info(`server listening on ${address}`)
 })