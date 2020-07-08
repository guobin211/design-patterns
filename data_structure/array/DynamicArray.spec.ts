/**
 * DynamicArray.spec.ts
 * @Date 2020-06-21
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
import DynamicArray from "./DynamicArray.ts";

let cap = 10;
const dynamicArray = new DynamicArray<number>(cap + 5);
for (let i = 0; i < cap; i++) {
  dynamicArray.push(i);
}
console.log(dynamicArray.toString());
for (const dynamicArrayElement of dynamicArray) {
  console.log(dynamicArrayElement);
}

console.log(dynamicArray.set(1, 10));
console.log(dynamicArray.get(1));
console.log(dynamicArray.toString());
console.log(dynamicArray.remove(1));
console.log(dynamicArray.toString());

dynamicArray.splice(0, 2, 21, 22);
console.log(dynamicArray.toString());
