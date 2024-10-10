const express = require('express');
const app = express();
const port = 3000;

// Rota para exibir o dashboard
app.get('/frontend/dashboard', (req, res) => {
    res.sendFile(__dirname + '/frontend/dashboard.html');
});

// Rota para exibir os produtos
app.get('/products', (req, res) => {
    res.sendFile(__dirname + '/frontend/products.html');
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});