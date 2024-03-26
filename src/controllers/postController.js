const { getAllPosts, getPostById } = require('../models/postModel');
const { success, error } = require('../helpers/responseHelper');

const postController = {
  getAllPosts: (req, res) => {
    try {
      const posts = getAllPosts();
      success(res, posts, 'Posts encontrados com sucesso');
    } catch (err) {
      error(res, 'Não foi possível obter os posts', 500);
    }
  },

  getPostById: (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const post = getPostById(id);
      if (!post) {
        return error(res, 'Post não encontrado', 404);
      }
      success(res, post, 'Post encontrado com sucesso');
    } catch (err) {
      error(res, 'Erro ao buscar o post', 500);
    }
  },
};

module.exports = postController;
