const Produto = require('../models/produto.model');

exports.createProduto = async (req, res) => {
    try {
        const produto = await Produto.create(req.body);
        res.status(201).send(produto);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getProdutos = async (req, res) => {
    try {
        const produtos = await Produto.findAll();
        res.send(produtos);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getProduto = async (req, res) => {
    try {
        const produto = await Produto.findByPk(req.params.id);
        if (!produto) return res.status(404).send();
        res.send(produto);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateProduto = async (req, res) => {
    try {
        const produto = await Produto.findByPk(req.params.id);
        if (!produto) return res.status(404).send();
        await produto.update(req.body);
        res.send(produto);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteProduto = async (req, res) => {
    try {
        const produto = await Produto.findByPk(req.params.id);
        if (!produto) return res.status(404).send();
        await produto.destroy();
        res.send(produto);
    } catch (error) {
        res.status(500).send(error);
    }
};
