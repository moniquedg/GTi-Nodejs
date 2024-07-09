const app = require('./app');
const { sequelize, connectDB } = require('./services/dbConnect');

const PORT = process.env.PORT || 3001; 

app.listen(PORT, () => {
    console.log(`the server is running on port ${PORT}`);
});

connectDB().then(async () => {
    console.log('Conectado ao banco de dados!');

    await sequelize.sync({ force: false });
}).catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
});
