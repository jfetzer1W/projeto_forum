const connection = require('../config/db');
const bcrypt = require('bcrypt');

async function listUsers(request, response) {
    connection.query('SELECT * FROM users', (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: `Sucesso! Lista de usuários.`,
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: `Não foi possível realizar a remoção. Verifique os dados informados`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    })
}

async function storeUser(request, response) {   
    const params = Array(
        request.body.firstName,
        request.body.sobrenome,
        bcrypt.hashSync(request.body.senha, 10),
        request.body.telefone,
        request.body.email
    );

    const query = 'INSERT INTO users (nome, sobrenome, senha, telefone, email) VALUES (?,?,?, ?, ?);';

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: `Sucesso! Usuário cadastrado.`,
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: `Não foi possível realizar a ação. Verifique os dados informados`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }        
    })
}

module.exports = {
    listUsers,
    storeUser
}