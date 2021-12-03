const express = require('express');

const app = express();

app.use(express.json());
// 1. Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }
app.get('/ping', (_req, res, _next) => res.status(201).json({ message: 'pong' }));

// 2. Crie uma rota POST /hello
// Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .
app.post('/hello', (req, res, _next) => {
  const { name } = req.body;

  return res.status(201).json({ message: `Hello, ${name}!`});
});

app.listen(3000, () => console.log('Escutando'));
