const users = [
  { id: 1, username: "user1", password: "senha1", email: "user1@example.com" },
  { id: 2, username: "user2", password: "senha2", email: "user2@example.com" },
  { id: 3, username: "user3", password: "senha3", email: "user3@example.com" }
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
