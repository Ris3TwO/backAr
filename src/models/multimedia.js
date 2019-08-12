const mysql = require('mysql')


connection = mysql.createConnection({
    host: '192.168.1.110',
    user: 'backar',
    password: 'charmander15',
    database: 'backend'
})

let multimediaModel = {

}
multimediaModel.saveVideos = (userData, callback) => {
    if (connection) {
        connection.query(
            'INSERT INTO media SET ?', userData,
            (err, result) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, {
                        'insertId': result.insertId
                    })
                }
            }
        )
    }
}


multimediaModel.getMultimedia = (userData, callback) => {
    if (`SELECT * FROM 'media'RIGHT JOIN media_type ON media.media_type_id = media_type.media_type_id WHERE client_id = ?
    ${connection.escape(userData.client_id)}`) {

    } else {

    }
}

module.exports = multimediaModel;