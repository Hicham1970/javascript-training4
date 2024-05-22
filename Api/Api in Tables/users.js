getUsersInfos();

function getUsersInfos() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong');
      }
      // Add code to handle response here
    })
    .then(users => {
      console.log(users);
      let userInfos = '';
      for (user of users) {
        userInfos += `
            <tr>
                    <td>${user.name}</td>
                    <td>${user.phone}</td>
                    <td>${user.email}</td>
                    <td>${user.website}</td>
                    <td>${user.company.name}</td>
                    <td>${user.address.city} ${user.address.zipcode}</td>
                </tr>
            `;
      }
      document.getElementById('table-body').innerHTML = userInfos;
    })
    .catch(error => {
      // Add code to handle error here
      console.error('Désolé , erreur lors du fetching');
    });
}
