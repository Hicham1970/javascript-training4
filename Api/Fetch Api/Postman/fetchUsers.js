function getPosts(userId) {
  fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(posts => {
      document.getElementById('posts-container').innerHTML = '';

      for (post of posts) {
        const contenu = `
          <div id="post">
                    <h3>${post.title}</h3>
                    <h4>${post.body}</h4>
                    </div>
        `;
        document.getElementById('posts-container').innerHTML += contenu;
      }
    });
}

function getUsers(userId) {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          reject('No user found with this id');
        }
      })
      .then(users => {
        document.getElementById('userContainer').innerHTML = '';
        for (user of users) {
          const contenu = `
        <div id="user" onclick="userClicked(${user.id},this)">
            <h3>${user.name}</h3>
            <h3>${user.email}</h3>
        </div>
        `;
          document.getElementById('userContainer').innerHTML += contenu;
        }
      });
  });
}

getUsers(1).then(() => {
  getPosts();
});

function userClicked(id, element) {
  getPosts(id);
  // console.log(element);
  let selectedElements = document.getElementsByClassName('selected');
  for (let i = 0; i < selectedElements.length; i++) {
    selectedElements[i].classList.remove('selected');
  }
  element.classList.add('selected');
}
