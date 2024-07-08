const Produto = require('../models/produto.model');

exports.createProduto = async (req, res) => {
    try {
        const produto = new Produto(req.body);
        await produto.save();
        res.status(201).send(produto);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getProdutos = async (req, res) => {
    try {
        const produtos = await Produto.find({});
        res.send(produtos);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getProduto = async (req, res) => {
    try {
        const produto = await Produto.findById(req.params.id);
        if (!produto) return res.status(404).send();
        res.send(produto);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateProduto = async (req, res) => {
    try {
        const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!produto) return res.status(404).send();
        res.send(produto);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteProduto = async (req, res) => {
    try {
        const produto = await Produto.findByIdAndDelete(req.params.id);
        if (!produto) return res.status(404).send();
        res.send(produto);
    } catch (error) {
        res.status(500).send(error);
    }
};
