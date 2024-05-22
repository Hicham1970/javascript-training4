/**
 * the fetch () est une call back fonction de javascript , c'est une Promesse , alors on peut utiliser le then() juste apres cette promesse.
 * But de la manip: changer les request de la manière traditionnelle XMLHTTPRequest à la manière moderne de fetch().
 * Mais ici on doit récupérer le 1er user et apres on obtient les autres posts
 */

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const userElement = document.getElementById('userContainer');
    userElement.innerHTML = '';
    data.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user');
      const nameElement = document.createElement('h3');
      const emailElement = document.createElement('h4');
      nameElement.textContent = user.name;
      emailElement.textContent = user.email;
      userDiv.appendChild(nameElement);
      userDiv.appendChild(emailElement);
      userElement.appendChild(userDiv);
    });
  });
// Si je click sur un user j'affiche le contenu de ses données dans la div posts.
document.addEventListener('click', e => {
  if (e.target.classList.contains('user')) {
    const user = e.target;
    const postsElement = document.getElementById('posts-container');
    postsElement.innerHTML = '';
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`).then(
      response => {
        return response.json();
      }
    );
    const data = response.json();
    console.log(data);

    // .then(data => {
    //   let posts = request.response;
    //   posts.forEach(post => {
    //     const contenu = `
    //     <div id="post">
    //               <h3>${post.title}</h3>
    //               <h4>${post.body}</h4>
    //               </div>
    //   `;
    //     document.getElementById('posts').innerHTML += contenu;
    //   });
    // });
  }
});
