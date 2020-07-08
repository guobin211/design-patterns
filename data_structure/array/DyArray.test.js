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
console.log(DyArray.isArray(arr1));
