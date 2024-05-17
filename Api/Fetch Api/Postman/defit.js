// fonction getPosts:
function getPosts(userId) {
  let request = new XMLHttpRequest();
  request.open(
    'GET',
    'https://jsonplaceholder.typicode.com/posts?userId=' + userId
  );
  request.responseType = 'json';
  request.send();
  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      document.getElementById('posts').innerHTML = '';
      let posts = request.response;
      posts.forEach(post => {
        const contenu = `
          <div id="post">
                    <h3>${post.title}</h3>
                    <h4>${post.body}</h4>
                    </div>
        `;
        document.getElementById('posts').innerHTML += contenu;
      });
    } else {
      alert('Error');
    }
  };
}

// fonction getPosts:
function getUsers() {
  let request = new XMLHttpRequest();
  request.open('GET', 'https://jsonplaceholder.typicode.com/users');
  request.responseType = 'json';
  request.send();
  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      document.getElementById('user').innerHTML = '';
      let users = request.response;
      users.forEach(user => {
        const contenu = `
        <div id="user" onclick="userClicked(${user.id},this)">
            <h3>${user.name}</h3>
            <h3>${user.email}</h3>
        </div>
        `;
        document.getElementById('user').innerHTML += contenu;
      });
    } else {
      alert('Error');
    }
  };
}

// getPosts(5);
getUsers();

function userClicked(id, element) {
  getPosts(id);
  // console.log(element);
  let selectedElements = document.getElementsByClassName('selected');
  for (let i = 0; i < selectedElements.length; i++) {
    selectedElements[i].classList.remove('selected');
  }
  element.classList.add('selected');
}
