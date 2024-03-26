const { success, error } = require('../helpers/responseHelper');
const { getAllProducts, getProductById } = require('../models/productModel');

const productController = {
  getAllProducts: (req, res) => {
    try {
      const products = getAllProducts();
      success(res, products);
    } catch (err) {
      error(res, 'Não foi possível obter os produtos', 500);
    }
  },

  getProductById: (req, res) => {
    try {
      const productId = parseInt(req.params.id);
      const product = getProductById(productId);
      if (!product) {
        return error(res, 'Produto não encontrado', 404);
      }
      success(res, product);
    } catch (err) {
      error(res, 'Erro ao buscar o produto', 500);
    }
  },
};

module.exports = productController;
