let mysql = require('node-mysql');
let pool = require('./db-connect');

const fs = require('fs');
const path = require('path');

const manifestPlist = fs.readFileSync(path.resolve(__dirname, 'manifest.plist'), 'utf8');
const strToReplace = [
    { search: '###appDownloadUrl###', replaceData: 'downloadId' },
    { search: '###iconImg###', replaceData: 'iconImg' },
    { search: '###bundleId###', replaceData: 'bundleId' },
    { search: '###version###', replaceData: 'version' },
    { search: '###name###', replaceData: 'name' }
];

let query = (sql_query, callback, parameters=false) => {
    pool.getConnection((err, connection) => {
        if (parameters !== false) {
            sql_query = connection.format(sql_query, parameters);
        }
        connection.query(sql_query, (err, result)  => {
            if (err) {
                console.log('sql error : ' + err);
            }
            if (typeof(callback) !== 'undefined') {
                callback(result);
            }
            connection.destroy();
        });
    });
};

module.exports = {
    getAllApps: callback => {
        query('SELECT appId, iconImg, name, seller, downloadId FROM apps ORDER BY name', callback);
    },
    getManifest: (appId, callback) => {
        let finalStr = manifestPlist;
        query('SELECT appId, downloadId, iconImg, bundleId, version, name FROM apps WHERE appId = ?',
            result => {
                for (let i = 0; i < strToReplace.length; i++) {
                    if (strToReplace[i].replaceData in result[0]) {
                        let rd = strToReplace[i].replaceData;
                        let toReplace = result[0][rd];
                        if (rd === 'downloadId' || rd === 'iconImg') {
                            toReplace = 'https://ipa.samf.me/' + toReplace + (rd === 'downloadId' ? '_signed.ipa':'');
                        }
                        finalStr = finalStr.replace(strToReplace[i].search, toReplace);
                    }
                }
                callback(finalStr);
            }, [parseInt(appId)]);
    }
};
