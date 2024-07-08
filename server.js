const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const database = require('./services/dbServices');
const app = express();

app.use(bodyParser.json());
app.use('/', router);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`the server is running on port ${PORT}`);
});

database().then(() => {
    console.log('conectado ao banco!');
}).catch(err => {
    console.error('Erro ao conectar ao banco:', err);
});
