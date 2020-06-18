/**
 *  Singleton.ts
 * @Date 2020-06-18
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
import { BaseProduct } from "../_base/BaseProduct.ts";
import { ProductA } from "../_impl/ProductA.ts";

/**
 * 单例模式
 * 单例模式的目的是保证一个类仅有一个实例，并提供一个访问它的全局访问点
 * ```
 *  // Vue 中的单例
 *  var app = new Vue({
 *    el: '#app',
 *    data: {
 *        message: 'Hello Vue!'
 *      }
 *   })
 *
 * ```
 */
export class Singleton {
  private _instance: BaseProduct;

  set instance(product: BaseProduct) {
    this._instance = product;
  }

  get instance() {
    if (!this._instance) {
      this._instance = new ProductA();
    }
    return this._instance;
  }

  getInstance(): ProductA {
    if (!this._instance) {
      this._instance = new ProductA();
    }
    return this._instance;
  }
}
