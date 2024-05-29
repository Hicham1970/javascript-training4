const obj = { name: 'John', age: 30, city: 'New York' };

const myJSON = JSON.stringify(obj);
console.log(myJSON); //{"name":"John","age":30,"city":"New York"}

// stringify an Array :
const arr = ['John', 'Peter', 'Sally', 'Jane'];

const myJS = JSON.stringify(arr);
console.log(myJS);
