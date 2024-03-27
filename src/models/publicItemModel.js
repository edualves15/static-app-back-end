// Dados mockados dos posts para demonstração
const items = [
  { id: 1, value1: "abc", value2: "123" },
  { id: 2, value1: "def", value2: "456" },
  { id: 3, value1: "ghi", value2: "789" }
];

function getAllPublicItemsData() {
  return items;
}

function getPublicItemDataById(id) {
  return items.find(item => item.id === id);
}

module.exports = { getAllPublicItemsData, getPublicItemDataById };
