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

async function updateUser(request, response) {
    const userId = request.params.id;
    const userData = request.body;
    const updateFields = [];
 
    if (userData.nome) {
        updateFields.push('`nome` = ?');
    }
    if (userData.senha) {
        updateFields.push('`senha` = ?');
        userData.senha = bcrypt.hashSync(userData.senha, 10);
    }
    if (userData.sobrenome) {
        updateFields.push('`sobrenome` = ?');
    }
    if (userData.telefone) {
        updateFields.push('`telefone` = ?');
    }
 
    if (updateFields.length === 0) {
        response.status(400).json({
            success: false,
            message: "Nenhum campo para atualizar foi fornecido."
        });
        return;
    }
 
    const query = `UPDATE users SET ${updateFields.join(', ')} WHERE id_user = ?`;
    const params = [...Object.values(userData), userId];
 
    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(200)
                    .json({
                        success: true,
                        message: `Sucesso! Usuário atualizado.`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar a atualização. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível atualizar usuário!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

async function findUser(request, response) {
    // Preparar o comando de execução no banco
    const query = "SELECT * FROM users WHERE `id_user` = ?";
   
    // Recuperar credenciais informadas
    const params = [request.body.id];
 
    // Executa a ação no banco e valida os retornos para o cliente que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {            
            if (results.length > 0) {                
                const user = {
                    id: results[0].id_user,
                    email: results[0].email,
                    nome: results[0].nome,
                    cargo: results[0].sobrenome,
                    telefone: results[0].telefone,
                };
               
                response
                .status(200)
                .json({
                    success: true,
                    message: `Sucesso! Usuário conectado.`,
                    data: user
                });
            } else {
                response
                    .status(404)
                    .json({
                        success: false,
                        message: `Usuário não encontrado. Verifique o ID informado`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {
            response.status(500).json({
                success: false,
                message: "Ocorreu um erro ao buscar o usuário.",
                error: e
            });
        }
    });
}

module.exports = {
    listUsers,
    storeUser,
    updateUser,
    findUser
}