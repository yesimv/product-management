require('dotenv').config();
const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    decimalNumbers: true // Fuerza que los DECIMAL se devuelvan como números
});
connection.connect((err) => {
 if (err) throw err;
 console.log('Conexión exitosa a la base de datos');
});
module.exports = connection;