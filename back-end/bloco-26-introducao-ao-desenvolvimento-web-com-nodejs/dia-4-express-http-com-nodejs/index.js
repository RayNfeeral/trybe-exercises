const express = require('express');

const app = express();

// 1. Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }
app.get('/ping', (req, res, _next) => res.status(201).json({ message: 'pong' }));

app.listen(3000, () => console.log('Escutando'));
