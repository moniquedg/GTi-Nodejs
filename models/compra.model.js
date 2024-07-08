const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../services/dbConnect');
const Produto = require('./produto.model');

const Compra = sequelize.define('Compra', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idComprador: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idVendedor: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idProduto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Produto,
            key: 'id'
        }
    }
}, {
    tableName: 'compras',
    timestamps: false
});

module.exports = Compra;
