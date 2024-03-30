const { getAllPrivateItemsData, getPrivateItemDataById } = require('../models/privateItemModel');
const { success, error } = require('../helpers/responseHelper');

const privateItemController = {
  getAllItems: (req, res) => {
    try {
      const items = getAllPrivateItemsData();
      success(res, items, 'Itens privados encontrados com sucesso');
    } catch (err) {
      error(res, 'Não foi possível obter os itens privados', 500);
    }
  },

  getItemById: (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const item = getPrivateItemDataById(id);
      if (!item) {
        return error(res, 'Item privado não encontrado', 404);
      }
      success(res, item, 'Item privado encontrado com sucesso');
    } catch (err) {
      error(res, 'Erro ao buscar o item privado', 500);
    }
  },
};

module.exports = privateItemController;
