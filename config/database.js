// config/database.js
const mysql = require('mysql');
const util = require('util');
const fs = require('fs');
const path = require('path');

const connectionConf = {
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
}

if (process.env.MODE === 'prod')
    connectionConf.ssl = {
        ca: fs.readFileSync(path.join(__dirname, 'certificates/DigiCertGlobalRootCA.crt.pem'))    // Certificado de la autoridad certificadora (CA)
    }



const pool = mysql.createPool(connectionConf);


pool.query = util.promisify(pool.query);

module.exports = pool;