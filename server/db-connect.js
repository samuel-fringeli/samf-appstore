let mysql = require('mysql');

module.exports = mysql.createPool({
    connectionLimit : 10,
    host     : process.env.DB_HOST || 'dbhost',
    user     : process.env.DB_USER || 'root',
    password : process.env.DB_PASSWORD || 'root',
    database : process.env.DB_NAME || 'appstore'
});
