const users = [
  { id: 1, name: "Usuário 1", password: "123", email: "user1@email.com" },
  { id: 2, name: "Usuário 2", password: "123", email: "user2@email.com" },
  { id: 3, name: "Usuário 3", password: "123", email: "user3@email.com" }
];

function findUserByEmail(email) {
  return users.find(user => user.email === email);
}

function getAllUsers() {
  return users.map(user => {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  });
}

function getUserById(id) {
  return users.find(user => user.id === id);
}

module.exports = { findUserByEmail, getAllUsers, getUserById };
