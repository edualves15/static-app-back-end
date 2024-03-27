// Dados mockados dos produtos
const items = [
  { id: 1, value1: "abc", value2: "123", value3: 11111 },
  { id: 2, value1: "def", value2: "456", value3: 22222 },
  { id: 3, value1: "ghi", value2: "789", value3: 33333 }
];

function getAllPrivateItemsData() {
  return items;
}

function getPrivateItemDataById(id) {
  return items.find(item => item.id === id);
}

module.exports = { getAllPrivateItemsData, getPrivateItemDataById };
