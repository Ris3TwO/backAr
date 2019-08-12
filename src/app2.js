// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
})

// Declare a route
var request = require('request');

request.post('http://167.99.2.33:9090/text', {
    form: {
        number: '3182772453',
        message: 'Hello world',
        key: 'textbelt',
    },
}, function(err, httpResponse, body) {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log(JSON.parse(body));
})

// Run the server!
fastify.listen(3000, function(err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})