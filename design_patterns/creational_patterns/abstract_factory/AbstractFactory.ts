/**
 *  AbstractFactory.ts
 * @Date 2020-06-18
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
import { ProductA } from "../_impl/ProductA.ts";
import { ProductB } from "../_impl/ProductB.ts";
import { IFactory } from "../_base/IFactory.ts";

abstract class AbstractFactory {
  abstract createProductA(): ProductA;
  abstract createProductB(): ProductB;
}

export class ConcreteFactory extends AbstractFactory implements IFactory {
  createProductA(): ProductA {
    return new ProductA();
  }
  createProductB(): ProductB {
    return new ProductB();
  }

  run() {
    this.createProductA().use();
    this.createProductB().use();
  }
}

new ConcreteFactory().run();
