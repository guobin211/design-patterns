export function extend(Source, Parent) {
  function ClassFn(...args) {
    Source.prototype = new Parent(...args);
    return new Source(...args);
  }
  return ClassFn;
}

function Person(name) {
  this.name = name;
}

function Woman(name, age) {
  this.name = name;
  this.age = age;
}

function ManFn(name, age, title) {
  this.title = title;
  this.age = age;
}

const Man = extend(ManFn, Person);

const jack = new Man('jack', 22, 'master');

console.log(jack);
console.log(jack instanceof Man);
console.log(jack instanceof Person);
console.log(jack instanceof ManFn);

const tom = new Man('tom', 22, 'master');
console.log(tom);
