// Effectuer une request xml http:

const xmlhttp=HttpRequest();
xmlhttp.onload = function () {
  const myObj = JSON.parse(this.responseText);
  document.getElementById('demo').innerHTML = myObj.name;
};
xmlhttp.open('GET', 'json_demo.txt');
xmlhttp.send();