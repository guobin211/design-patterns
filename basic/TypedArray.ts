/**
 * TypedArray.ts
 * @Date 2020-06-19
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
class Person {
  constructor(public name: string, public age: number) {}
}
// 带空间的数组不能直接push
const persons: Person[] = new Array(10);
for (let i = 0; i < 10; i++) {
  persons[i] = new Person(`第${i}个`, parseInt(Math.random() * 100 + "", 10));
}
console.log(persons);

const add = new Person("新加", 22);
persons.push(add);
console.log(persons);
console.log(persons.length);

const first = persons.shift();
const end = persons.pop();
console.log(first, end, persons);

const str = "Hello Deno 2020";

const arr = str.split(" ");
console.log(arr);
