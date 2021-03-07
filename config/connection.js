const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Pass1on103',
    database: 'burgers_db',
})

connection.connect((err) => {
    if(err) {
        console.log(`error connection: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`)
});

module.exports = connection;