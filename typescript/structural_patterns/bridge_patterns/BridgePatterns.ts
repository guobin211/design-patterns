/**
 * BridgePatterns.ts
 * @Date 2020-06-19
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
interface IAnimals {
  run(): void;
}

abstract class CanRunAnimal {
  abstract run(): void;
}

class Dog implements IAnimals {
  run() {
    console.log("Dog run speed 30");
  }
}

class Bird implements IAnimals {
  run() {
    console.log("Bird run speed 30");
  }
}

class BridgePatterns extends CanRunAnimal {
  constructor(private _anim: IAnimals) {
    super();
  }
  run(): void {
    this._anim.run();
  }
}

new BridgePatterns(new Dog()).run();
new BridgePatterns(new Bird()).run();
