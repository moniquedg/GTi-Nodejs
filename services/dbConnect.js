const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
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
