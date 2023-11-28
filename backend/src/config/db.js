const mysql = require('mysql2');
const dotenv = require('dotenv').config();

 // Inclui aqui os parâmetros de configuração: HOST, USER, PASSWORD, DATABASE
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

// Estabelece a conexão com o MySQL e verifica se há erros
connection.connect( (err) => {
    if (err) {
        throw err;
    } else {        
        console.log("Mysql Connected!");
    }
});

module.exports = connection;