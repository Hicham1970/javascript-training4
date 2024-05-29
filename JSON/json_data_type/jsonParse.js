// the text must be in a json format comme si on vient de le recevoir du serveur.

const reception = '{"name":"John", "age":30, "city":"New York"}';
let obj = JSON.parse(reception);
console.log(obj);
console.log(obj.name);

// json as array

const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);
console.log(myArr);
console.log(myArr[1]);
//[ 'Ford', 'BMW', 'Audi', 'Fiat' ]
// BMW
// convert a string into a date:
const txt = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const objet = JSON.parse(txt);
console.log(objet.birth); //1986-12-14
objet.birth = new Date(objet.birth); //John, Sun Dec 14 1986 00:00:00 GMT+0000 (UTC)

console.log(objet.name + ', ' + objet.birth);

// Convert a string into a date using the second parameter of the JSON.parse().
// it 's a function  called the reviver:
const tet = '{"name":"John", "birth":"1996-1-1", "city":"New York"}';
const ob = JSON.parse(tet, function (key, value) {
  if (key == 'birth') {
    return new Date(value);
  } else {
    return value;
  }
});

console.log(ob.name + ', ' + ob.birth);

// convert a string into a function:
const tt =
  '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
const oj = JSON.parse(tt);
console.log(tt);
// use eval() to convert a string into a function !?
oj.age = eval('(' + oj.age + ')');

console.log(oj.name + ', ' + oj.age());
