const mysql = require('mysql')


connection = mysql.createConnection({
    host: '192.168.1.110',
    user: 'backar',
    password: 'charmander15',
    database: 'backend'
})

let userModel = {

}

userModel.login = (userData, callback) => {
        if (connection) {
            connection.query(`SELECT password,user,client_id FROM users  where user = ${connection.escape(userData.user)}`,
                (err, rows) => {
                    if (err) {
                        throw err;
                    } else {

                        if (rows.length == 0) {
                            callback(null, { data: false })
                        } else {
                            callback(null, rows)
                            console.log(rows)
                        }

                    }
                })

        }

    }
    ///*/////////////////////
userModel.insertMicroUser = (userData, callback) => {
        if (connection) {
            connection.query(
                'INSERT INTO microusers SET ?', userData,
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
    //////////*******************///////////////////// */
userModel.UpdateUser = (userData, callback) => {
        if (connection) {
            const sql = `
       password = ${connection.escape(userData.password)}
       enabled = ${connection.escape(userData.enable)} 
       where client_id = ${connection.escape(userData.client_id)}  `

            connection.query(
                sql, (err, result) => {
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
    /*/**/ ///////////////////////////////////////* */

userModel.getMicroUsers = (userData, callback) => {
    if (connection) {
        connection.query(`SELECT  id,username,access_level FROM microusers where client_id = ${connection.escape(userData.client_id)}`,
            (err, rows) => {
                if (err) {
                    throw err;
                } else {

                    if (rows.length == 0) {
                        console.log('true');
                        callback(null, { data: false })
                    } else {
                        console.log('false');
                        callback(null, rows)
                        console.log(rows)
                    }

                }
            })

    }

}

/*/**/ ///////////////////////////////////////* */


module.exports = userModel;