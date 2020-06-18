/**
 *  FactoryMethod.ts
 * @Date 2020-06-18
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */

import { BaseProduct } from "../_base/BaseProduct.ts";
import { ProductA } from "../_impl/ProductA.ts";
import { IFactory } from "../_base/IFactory.ts";

/**
 * 抽象工厂
 */
abstract class BaseFactoryMethod {
  abstract createProduct(): BaseProduct;
}

/**
 * 具体工厂
 */
export class FactoryMethod extends BaseFactoryMethod implements IFactory {
  createProduct() {
    return new ProductA();
  }

  run() {
    this.createProduct().use();
  }
}

new FactoryMethod().run();
