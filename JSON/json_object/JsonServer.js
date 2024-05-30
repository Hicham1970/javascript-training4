/**
 * Quand on reçois les données du serveur , on les reçois sous form de string,
 * on devrais les parser pour avoir un javascript objet
 * Et si on a des données sous forme de javascript objet, on devrais les rendre sous forme
 * string cad en json et les envoyer par la suite
 */
const myObj = { name: 'John', age: 31, city: 'New York' };
const myJSON = JSON.stringify(myObj);
// window.location = 'demo_json.php?x=' + myJSON;

localStorage.setItem('vendeur', myJSON);

//If you receive data in JSON format, you can easily convert it into a JavaScript object:
const myJson = localStorage.getItem('vendeur');
console.log(myJson);
let myO = JSON.parse(myJson);
console.log(myO.name);
document.getElementById('demo').innerHTML =
  `Mr.${myO.name} est né dans les rues basses de ${myO.city} est il est bizarrement agé de ${myO.age} ans seulement quand il est mort le pauvre ! Que Dieu ait pitié de son âme.`;
