module.exports = {
  posts: [
    {
      id: 'adkjhaf',
      title: 'Teste do mural',
      description: 'Descrição do teste'
    }
  ],

  getAll() {
    return this.posts
  },

  newPost(title, description) {
    this.posts.push({ id: generateID(), title, description })
  },

  deletePost(id) {
    const indexToDelete = this.posts.findIndex(post => post.id === id)

    if (indexToDelete !== -1) {
      this.posts.splice(indexToDelete, 1)
      return true // Return true to indicate successful deletion
    }

    return false // Return false if the post with the given id was not found
  }
}



function generateID() {
  return Math.random().toString(36).substring(2, 9)
}
