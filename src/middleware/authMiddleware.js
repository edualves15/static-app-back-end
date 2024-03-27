const jwt = require('jsonwebtoken');
const { error } = require('../helpers/responseHelper');
const SECRET_KEY = process.env.SECRET_KEY || 'your_secret_key';

module.exports = (req, res, next) => {
  const token = req.cookies.token;

  // Verifica se o token está presente
  if (!token) {
    return error(res, 'Não autenticado: Token ausente', 401);
  }

  try {
    // Tenta decodificar o token
    const decoded = jwt.verify(token, SECRET_KEY);

    // Se a decodificação for bem-sucedida, adicione o usuário à requisição
    req.user = decoded;
    next(); // Prossiga para o próximo middleware ou handler
  } catch (err) {
    // Trata erros de decodificação do token
    console.error('Erro ao verificar o token:', err);

    if (err instanceof jwt.TokenExpiredError) {
      return error(res, 'Não autenticado: Token expirado', 401);
    } else if (err instanceof jwt.JsonWebTokenError) {
      return error(res, 'Não autenticado: Token inválido', 401);
    } else {
      // Erro genérico
      return error(res, 'Erro ao verificar o token', 500);
    }
  }
};