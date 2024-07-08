const app = require('./app');
const database = require('./services/dbServices');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`the server is running on port ${PORT}`);
});

database().then(() => {
    console.log('conectado ao banco!');
}).catch(err => {
    console.error('Erro ao conectar ao banco:', err);
});
