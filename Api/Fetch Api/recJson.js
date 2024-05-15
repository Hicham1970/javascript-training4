// i try to fetch data from the json file and display it in the document
// function callApi() {
//   const url = 'data.json';
//   fetch(url)
//     .then(resp => resp.json())
//     .then(data => {
//       document.querySelector('#response').innerHTML = data.prénom;
//     });
// }

async function fetchJsonFile() {
  const url = 'data.json';
  const response = await fetch(url);
  const data = await response.json();
  //   console.log(data);
  // select the form elements:
  document.querySelector('#nom').value = data.nom;
  document.querySelector('#prénom').value = data.prénom;
  document.querySelector('#age').value = data.age;
  document.querySelector('#adresse').value =
    data.adresse.rue + '' + data.adresse.ville;
}

// fetchJsonFile();
