const { success, error } = require('../helpers/responseHelper');
const { getAllUsers, getUserById } = require('../models/userModel');

const userController = {
  getAllUsers: (req, res) => {
    try {
      const users = getAllUsers();
      success(res, users);
    } catch (err) {
      error(res, 'Não foi possível obter os usuários', 500);
    }
  },

  getUserById: (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      const user = getUserById(userId);
      if (!user) {
        return error(res, 'Usuário não encontrado', 404);
      }
      success(res, user);
    } catch (err) {
      error(res, 'Erro ao buscar o usuário', 500);
    }
  },
};

module.exports = userController;
