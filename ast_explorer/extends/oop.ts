export abstract class BaseAnimals {
  getBaseClassName() {
    return 'BaseAnimals';
  };
  abstract getDefaultAnimals(): BaseAnimals;
}

/**
 * 继承抽象基类
 */
export class Dog extends BaseAnimals {
  constructor() {
    super();
  }
  getDefaultAnimals(): BaseAnimals {
    return new Dog();
  }
}

const dog = new Dog();
const dog1 = dog.getDefaultAnimals();
const className = dog.getBaseClassName();
const className1 = dog1.getBaseClassName();
console.assert(className === className1);
