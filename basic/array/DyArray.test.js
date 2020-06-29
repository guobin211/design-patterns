/**
 * DyArray.test.js
 * @author GuoBin 2020-06-29
 */
const { DyArray } = require("./DyArray.class");
const arr1 = new DyArray();
const arr2 = new DyArray();
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    arr2.push(i);
  } else {
    arr1.push(i);
  }
}
console.log(arr1.toString());
console.log(arr2.toString());

const arr3 = arr1.concat(arr2);
console.log(arr3.toString());
console.log(arr3.pop());
console.log(arr3.shift());
console.log(arr3.toString());
