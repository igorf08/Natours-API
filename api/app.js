const express = require('express');
const app = express();
const router = require('./routes/router'); // Supondo que seu arquivo de rotas esteja em './router'

// Middleware para interpretar o corpo das requisições como JSON
app.use(express.json());

// Roteador de tours
app.use('/', router); // Montando o roteador no caminho raiz ('/')

const port = 3000;
app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});
