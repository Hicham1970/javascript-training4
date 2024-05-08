// findLast() Method check the array from the end and gives the value of the first element that meets a certains conditions:

const num = [1, 2, 3, 4, 5, 6];
let lastNum = num.findLast((x) => x > 5);
console.log(lastNum);

// findLastIndex() finds a position in an array of the last element that meets a certain condition
const grt = [1, 2, 3, 2, 5, 6];
let myFdd = grt.findLastIndex((x) => x > 5);
let myPost = grt.indexOf(2, 1);
console.log(myFdd);
console.log(myPost);
// let reversedArray = grt.toReversed();
// console.log(reversedArray);
// // voir aussi toSorted, toSpliced(0, 1),
// for (let i = 0; 0 < 5; i++) {
//   setTimeout(function () {
//     console.log(i); // this will print numbers from 0 to
//   }, 1000);
// }
