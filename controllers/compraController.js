const Compra = require('../models/compra.model');
const Produto = require('../models/produto.model');

exports.createCompra = async (req, res) => {
    try {
        const compra = await Compra.create(req.body);
        res.status(201).send(compra);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getCompras = async (req, res) => {
    try {
        const compras = await Compra.findAll();
        res.send(compras);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getCompra = async (req, res) => {
    try {
        const compra = await Compra.findByPk(req.params.id);
        if (!compra) return res.status(404).send();
        res.send(compra);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateCompra = async (req, res) => {
    try {
        const compra = await Compra.findByPk(req.params.id);
        if (!compra) return res.status(404).send();
        await compra.update(req.body);
        res.send(compra);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteCompra = async (req, res) => {
    try {
        const compra = await Compra.findByPk(req.params.id);
        if (!compra) return res.status(404).send();
        await compra.destroy();
        res.send(compra);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.totalGastosUsuario = async (req, res) => {
    try {
        const compras = await Compra.findAll({ where: { idComprador: req.params.id } });
        let totalGastos = 0;
        for (const compra of compras) {
            const produto = await Produto.findByPk(compra.idProduto);
            totalGastos += produto.preco;
        }
        res.send({ totalGastos });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.totalLucroUsuario = async (req, res) => {
    try {
        const compras = await Compra.findAll({ where: { idVendedor: req.params.id } });
        let totalLucro = 0;
        for (const compra of compras) {
            const produto = await Produto.findByPk(compra.idProduto);
            totalLucro += produto.preco;
        }
        res.send({ totalLucro });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.totalVendasProduto = async (req, res) => {
    try {
        const compras = await Compra.findAll({ where: { idProduto: req.params.id } });
        const totalVendas = compras.length;
        res.send({ totalVendas });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.totalLucroProduto = async (req, res) => {
    try {
        const compras = await Compra.findAll({ where: { idProduto: req.params.id } });
        let totalLucro = 0;
        for (const compra of compras) {
            const produto = await Produto.findByPk(compra.idProduto);
            totalLucro += produto.preco;
        }
        res.send({ totalLucro });
    } catch (error) {
        res.status(500).send(error);
    }
};
