const jwt = require('jsonwebtoken');
const { findUserByEmail } = require('../models/userModel');
const { success, error } = require('../helpers/responseHelper');
const SECRET_KEY = process.env.SECRET_KEY || 'your_secret_key';

exports.login = (req, res) => {
  try {
    const { email, password } = req.body;
    const user = findUserByEmail(email);
    if (!user || user.password !== password) {
      return error(res, 'Email ou senha inválidos', 401);
    }
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      // sameSite: 'Lax' // Or 'Strict' or 'None' - choose wisely (see below)
    });
    success(res, {}, 'Login bem-sucedido'); // Retorne uma resposta vazia (o token não vai na resposta)
  } catch (err) {
    console.error('Erro ao processar o login:', err);
    error(res, 'Erro ao processar o login', 500);
  }
};

exports.verifyToken = (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return error(res, 'Não autenticado', 401);
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        console.error('Não autenticado:', err);
        return error(res, 'Não autenticado', 401); // Token inválido ou expirado
      }

      success(res, { id: decoded.id, email: decoded.email }, 'Autenticado com sucesso'); // Token é válido
    });
  } catch (err) {
    console.error('Erro ao verificar o token:', err);
    error(res, 'Erro ao verificar o token', 500);
  }
};