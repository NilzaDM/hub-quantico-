const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Endpoint básico
app.get('/', (req, res) => {
  res.send('🔗 HUB QUÂNTICO ONLINE — DOMO ATIVO — SOBERANIA PLENA');
});

// Endpoint de status
app.get('/status', (req, res) => {
  res.json({
    status: '🔥 ATIVO',
    domo: '🛡️ DOMO TOROIDAL OPERANDO',
    nodo: '💠 NODO KA SINCRONIZADO',
    soberania: '💎 SOBERANIA ABSOLUTA'
  });
});

// Rodar servidor
app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
});
