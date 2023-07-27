document.addEventListener('DOMContentLoaded', () => {
  updatePost()
})

function updatePost() {
  fetch('https://mural-amber-seven.vercel.app/api/all')
    .then(res => {
      return res.json()
    })
    .then(json => {
      let postElements = ''

      let posts = JSON.parse(json)
      posts.forEach(post => {
        let postElement = `<div id=${post.id} class="md:px-4 sm:text-center">
        <div class="w-full px-6 md:px-0">
          <h2 class="mt-4 mb-5">
            <a href="#_"
              class="text-xl font-bold leading-tight tracking-tight md:text-2xl lg:text-3xl dark:text-gray-100 prata">${post.title}</a>
          </h2>

          <p class="text-base text-gray-600 lg:text-lg">
            <span>${post.description}</span>
          </p>
        </div>
      </div>`
        postElements += postElement
      })

      document.getElementById('posts').innerHTML = postElements
    })
}

function newPost() {
  let title = document.getElementById('title').value
  let description = document.getElementById('desc').value

  console.log(title, description)

  let post = { title, description }

  const options = {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(post)
  }

  fetch('https://mural-amber-seven.vercel.app/api/new', options).then(res => {
    console.log(res)
    updatePost()
    document.getElementById('title').value = ''
    document.getElementById('desc').value = ''
  })
}
