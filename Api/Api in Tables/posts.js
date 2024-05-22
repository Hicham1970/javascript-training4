function getPostsInTable() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.log('Erreur lors du fetching !');
      }
    })
    .then(json => {
      console.log(json[0].userId);
      let dataPost = '';
      for (post of json) {
        dataPost += `<tr>
                        <td>${post.userId}</td>
                        <td>${post.id}</td>
                        <td>${post.title}</td>
                        <td>${post.body}</td>
                      </tr>`;
      }
      document.getElementById('table-body').innerHTML = dataPost;
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des données :', error);
    });
}

getPostsInTable();
