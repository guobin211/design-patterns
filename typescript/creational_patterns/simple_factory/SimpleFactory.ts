/**
 *  SimpleFactory.ts
 * @Date 2020-06-18
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */

import { BaseProduct } from "../_base/BaseProduct.ts";
import { ProductA } from "../_impl/ProductA.ts";
import { ProductB } from "../_impl/ProductB.ts";
import { IFactory } from "../_base/IFactory.ts";

enum CreateEnum {
  A,
  B,
}

/**
 * 简单工厂
 * 客户端只知道传入工厂类的参数，对于如何创建对象不关心。
 *
 * ```java
 *    KeyGenerator keyGen = KeyGenerator.getInstance("DESede");
 * ```
 */
export class SimpleFactory implements IFactory {
  run(): void {
    SimpleFactory.createProduct(CreateEnum.A).use();
  }
  static createProduct(type: CreateEnum): BaseProduct {
    switch (type) {
      case CreateEnum.A:
        return new ProductA();
      case CreateEnum.B:
        return new ProductB();
    }
  }
}

new SimpleFactory().run();
