// Dados mockados dos posts para demonstração
const posts = [
  { id: 1, title: "Post 1", content: "Conteúdo do post 1" },
  { id: 2, title: "Post 2", content: "Conteúdo do post 2" },
  { id: 3, title: "Post 3", content: "Conteúdo do post 3" }
];

function getAllPosts() {
  return posts;
}

function getPostById(id) {
  return posts.find(post => post.id === id);
}

module.exports = { getAllPosts, getPostById };
