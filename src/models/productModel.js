// Dados mockados dos produtos
const products = [
  { id: 1, name: "Produto 1", description: "Descrição do Produto 1" },
  { id: 2, name: "Produto 2", description: "Descrição do Produto 2" },
  { id: 3, name: "Produto 3", description: "Descrição do Produto 3" }
];

function getAllProducts() {
  return products;
}

function getProductById(id) {
  return products.find(product => product.id === id);
}

module.exports = { getAllProducts, getProductById };
