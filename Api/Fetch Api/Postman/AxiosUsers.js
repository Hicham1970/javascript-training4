// Using the axios library, elle fait le job de la method fetch(), donne une promesse suivie par then()
// Ici on va utiliser cette biblio a travers le cdn script dans le document html
// voir plus loin comment installer via le npm
// le npm ou node package module: gestionnaire des dependence;
// on l'install via npm install axios --save
// Puis on indique le chemin d'accès pour le module axios.je de la bibliothèque.

function getUsersByAxios() {
  return new Promise((resolve, reject) => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        let users = response.data;
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
        resolve();
      })
      .catch(function (error) {
        alert(error);
        reject(error);
      });
  });
}

function getPostsByAxios(userId) {
  let url = 'https://jsonplaceholder.typicode.com/posts?userId=' + userId;
  axios.get(url).then(response => {
    document.getElementById('posts-container').innerHTML = '';
    let posts = response.data;
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
// get the users first and then get the posts:
getUsersByAxios()
  .then(() => {
    getPostsByAxios(1);
  })
  .catch(error => {
    alert(error);
  });

function userClicked(id, element) {
  getPostsByAxios(id);
  // console.log(element);
  let selectedElements = document.getElementsByClassName('selected');
  for (let i = 0; i < selectedElements.length; i++) {
    selectedElements[i].classList.remove('selected');
  }
  element.classList.add('selected');
}
