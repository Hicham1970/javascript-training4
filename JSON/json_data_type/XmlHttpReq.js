// Effectuer une request xml http:

const xhr = HttpRequest();
xhr.onload = function () {
  const myObj = JSON.parse(this.responseText);
  document.getElementById('demo').innerHTML = myObj.name;
};
xhr.open('GET', 'json_demo.txt');
xhr.send();
