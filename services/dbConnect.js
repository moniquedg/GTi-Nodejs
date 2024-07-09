const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('capacitacao_node', 'usuario_node', 'senha_node', {
    host: 'localhost',
    dialect: 'postgres'
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conectado ao banco de dados!');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
};

module.exports = { sequelize, connectDB };
