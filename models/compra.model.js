const mongoose = require('mongoose');

const compraSchema = new mongoose.Schema({
    idComprador: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    idVendedor: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    idProduto: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Produto' }
});

module.exports = mongoose.model('Compra', compraSchema);
