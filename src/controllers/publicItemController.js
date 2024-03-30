const { getAllPublicItemsData, getPublicItemDataById } = require('../models/publicItemModel');
const { success, error } = require('../helpers/responseHelper');

const publicItemController = {
  getAllItems: (req, res) => {
    try {
      const items = getAllPublicItemsData();
      success(res, items, 'Itens públicos encontrados com sucesso');
    } catch (err) {
      error(res, 'Não foi possível obter os itens públicos', 500);
    }
  },

  getItemById: (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const item = getPublicItemDataById(id);
      if (!item) {
        return error(res, 'Item público não encontrado', 404);
      }
      success(res, item, 'Item público encontrado com sucesso');
    } catch (err) {
      error(res, 'Erro ao buscar o item público', 500);
    }
  },
};

module.exports = publicItemController;
