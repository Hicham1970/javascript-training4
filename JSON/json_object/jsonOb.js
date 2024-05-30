// the json format is a string
// and inside a json string there is some object literal

const js = '{"name":"John", "age":30, "car":null}';
// we have this javascript object :
const objet = { name: 'John', age: 30, car: null };

// Normally, you create a JavaScript object by parsing a JSON string :

const JSN = '{"name":"John", "age":30, "car":null}';
const ob = JSON.parse(JSN);
console.log(ob);
console.log(ob.name);
console.log(ob['age']);

// Looping through a javascript object:
const myJSON = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myJSON);

let text = '';
for (const x in myObj) {
  text += x + ' ./ ';
}
console.log(text);
// In a for-in loop, use the bracket notation to access the property values:
const myJN = '{"name":"John", "age":30, "car":null}';
const myj = JSON.parse(myJN);

let txt = '';
for (const x in myj) {
  txt += myj[x] + ' ;) ';
}
console.log(txt);
