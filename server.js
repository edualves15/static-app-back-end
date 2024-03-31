require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const publicRoutes = require('./src/routes/publicItemRoutes');
const privateRoutes = require('./src/routes/privateItemRoutes');
const authRoutes = require('./src/routes/authRoutes');

// Inicializar o aplicativo Express
const app = express();
const port = process.env.PORT || 3030;

// Configuração do CORS para permitir cookies em requisições cross-origin
// Ajuste a URL de origem conforme necessário para o seu front-end
app.use(cors({
  // origin: 'http://localhost:5173', // Substitua pela URL do seu front-end
  credentials: true, // Permitir cookies
}));

// Middleware para analisar o corpo da requisição JSON
app.use(bodyParser.json());

// Middleware para configurar cookies
app.use(cookieParser());

// Middleware para servir arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));

// Rotas
app.use('/api', authRoutes);
app.use('/api', publicRoutes);
app.use('/api', privateRoutes);

// app.get('/', (req, res) => {
//   res.render('index');
// });

// Middleware para capturar todas as rotas não tratadas e enviar index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor executando em http://localhost:${port}`);
});