// Parfois on trouve des array a l’intérieur des files Json
const myJ = '["Avril", "Mai", "Juin","Juillet", "Aoûte"]';
const myArrOb = JSON.parse(myJ);
console.log(myArrOb);
console.log(typeof myArrOb);
console.log(typeof myJ);
// accessing the object items:

console.log(myArrOb[2]);
console.log(myArrOb[4]);
console.log(myArrOb[1]);

// the Array inside an object:
const myJSON = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';
const myObj = JSON.parse(myJSON);
//You access array values by index:
const myPréférée = myObj.cars[1];
console.log(myPréférée);

/**?
 **Looping Through an Array
 *!You can access array values by using a for in loop:
 * */
let x = '';
for (let i in myObj.cars) {
  x += myObj.cars[i] + '--';
}
console.log(x);
// ou encore:
let u = '';
for (let i = 0; i < myObj.cars.length; i++) {
  u += myObj.cars[i] + '  ';
}
console.log(u);
