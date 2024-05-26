let dataContainer = document.getElementById('presentation');
let btn = document.getElementById('Fetch');
btn.addEventListener('click', function () {
  let myReq = new XMLHttpRequest();
  myReq.open('GET', '../data.json');
  myReq.responseType = 'text';
  myReq.onload = () => {
    // console.log(myReq.responseText);
    let myData = JSON.parse(myReq.responseText);
    // console.log(myData.utilisateurs[0]);
    let utilisateurs = myData.utilisateurs;
    console.log(utilisateurs);
    creationHtml(utilisateurs);
  };
  myReq.send();
});

/**
 * Adds HTML content to the div element with id "presentation".
 *
 * @param {Array} utilisateurs - An array of objects containing user information.
 * @returns {void}
 */
function creationHtml(utilisateurs) {
  // to add html to the div id="presentation".

  let contenu = '';
  for (let i = 0; i < utilisateurs.length; i++) {
    contenu += `<p>${utilisateurs[i].nom} ${utilisateurs[i].prénom} , c'est un ${utilisateurs[i].emploi} et il est agé de ${utilisateurs[i].age} ans.</p>`;
  }
  dataContainer.insertAdjacentHTML('beforeend', contenu);
}
