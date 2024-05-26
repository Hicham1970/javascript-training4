function getUsers() {
  axios
    .get('../data.json', true)
    .then(response => {
      let rep = response.data;
      let utilisateurs = rep.utilisateurs;
      //   console.log(utilisateurs);
      let utilisateur_infos = '';
      for (let i = 0; i < utilisateurs.length; i++) {
        // console.log(utilisateurs[i]);
        utilisateur_infos += `
        <tr>
                <td>${utilisateurs[i].nom}</td>
                <td>${utilisateurs[i].prénom}</td>
                <td>${utilisateurs[i].age}</td>
                <td>${utilisateurs[i].emploi}</td>
                <td>${utilisateurs[i].adresse.rue} ${utilisateurs[i].adresse.ville}</td>
                <td>${utilisateurs[i].Spécialité.etudes}</td>
                <td>${utilisateurs[i].hobbies[0]}</td>
            </tr>`;
        document.getElementById('data_contenu').innerHTML = utilisateur_infos;
      }
    })
    .catch(error => {
      console.log('Your request was not a  success', error);
    });
}

getUsers();

//Dans cet exemple, nous construisons d'abord la chaîne HTML complète userInfos en concaténant chaque ligne d'utilisateur. Ensuite, nous injectons cette chaîne complète dans table-body. De cette façon, toutes les lignes d'utilisateurs seront affichées correctement.
