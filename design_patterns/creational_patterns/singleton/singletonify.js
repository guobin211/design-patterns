const singletonify = (className) => {
  return new Proxy(className.prototype.constructor, {
    instance: null,
    construct: (target, argumentsList) => {
      if (!this.instance) {
        this.instance = new target(...argumentsList);
      }
      return this.instance;
    },
  });
};

class Person {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(this.name);
  }
}

SingletonPerson = singletonify(Person);

const person1 = new SingletonPerson("jack");
const person2 = new SingletonPerson("tom");
console.log(person1.printName());
console.log(person2.printName());
console.log(person1);
