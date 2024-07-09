const express = require('express');
const router = express.Router();
const mController = require('./controllers/messageController');
const uController = require('./controllers/userController');
const produtoController = require('./controllers/produtoController');
const compraController = require('./controllers/compraController');

router.get('/', (req, res) => {
    console.log("o / foi acessado!");
    res.send("Bem-vindo à API!");
});
router.get('/showReq', mController.showReq);
router.post('/showBody', mController.showBody);
router.post('/login', mController.validLogin);
router.post('/createUser', uController.create);
router.get('/getUser', uController.read);
router.post('/getClause', uController.readClause);
router.post('/updateUser', uController.update);
router.delete('/deleteUser', uController.delete);

router.post('/produtos', produtoController.createProduto);
router.get('/produtos', produtoController.getProdutos);
router.get('/produtos/:id', produtoController.getProduto);
router.put('/produtos/:id', produtoController.updateProduto);
router.delete('/produtos/:id', produtoController.deleteProduto);

router.post('/compras', compraController.createCompra);
router.get('/compras', compraController.getCompras);
router.get('/compras/:id', compraController.getCompra);
router.put('/compras/:id', compraController.updateCompra);
router.delete('/compras/:id', compraController.deleteCompra);

router.get('/usuarios/:id/gastos', compraController.totalGastosUsuario);
router.get('/usuarios/:id/lucro', compraController.totalLucroUsuario);
router.get('/produtos/:id/vendas', compraController.totalVendasProduto);
router.get('/produtos/:id/lucro', compraController.totalLucroProduto);

router.get('/test-connection', async (req, res) => {
    try {
        await sequelize.authenticate();
        res.send('Conexão com o banco de dados foi bem-sucedida!');
    } catch (error) {
        res.status(500).send('Erro ao conectar ao banco de dados.');
    }
});


module.exports = router;
