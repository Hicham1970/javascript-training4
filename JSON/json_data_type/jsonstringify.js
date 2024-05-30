const obj = { name: 'John', age: 30, city: 'New York' };

const myJSON = JSON.stringify(obj);
console.log(myJSON); //{"name":"John","age":30,"city":"New York"}

// stringify an Array :
const arr = ['John', 'Peter', 'Sally', 'Jane', 'Tom', 'Alice', 42, true, false];

const myJS = JSON.stringify(arr);
console.log(myJS);

//Exception
// stringify() a date:
const oj = { name: 'John', today: new Date(), city: 'New York' };
const myJN = JSON.stringify(oj);
console.log(myJN); //{"name":"John","today":"2024-05-29T19:32:53.156Z","city":"New York"}
console.log(myJN.indexOf('name'));
if (myJN.indexOf('name') > -1) {
  console.log('Found');
} else {
  console.log('Not Found');
}
let jsObject = JSON.parse(myJN);
console.log(jsObject);

// Stringify a function:
const j = {
  name: 'John',
  age: function () {
    return 30;
  },
  city: 'New York',
};
const myJ = JSON.stringify(j);
console.log(myJ);
// Rq: On a pas la fonction dans l'output
// Cause: JSON.stringify() will remove any functions from an object.remember this
//This can be omitted if you convert your functions into strings before running the JSON.stringify() function.
const o = {
  name: 'John',
  age: function () {
    return 30;
  },
  city: 'New York',
};
o.age = o.age.toString();
const mySON = JSON.stringify(o);
console.log(mySON);
