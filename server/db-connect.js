let mysql = require('mysql');

module.exports = mysql.createPool({
    connectionLimit : 10,
    host     : 'plesk.samf.me',
    user     : 'admin_appstore',
    password : 'l9v1!Ov4',
    database : 'custom_appstore'
});
