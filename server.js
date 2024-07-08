const app = require('./app');
const { connectDB } = require('./services/dbConnect');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`the server is running on port ${PORT}`);
});

connectDB().then(() => {
    console.log('conectado ao banco!');
}).catch(err => {
    console.error('Erro ao conectar ao banco:', err);
});
