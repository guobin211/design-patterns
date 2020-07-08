/**
 *  ProductA.ts
 * @Date 2020-06-18
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
import { BaseProduct } from "../_base/BaseProduct.ts";

/**
 * 具体产品
 */
export class ProductC extends BaseProduct {
  use() {
    console.log("ProductC.use()");
  }
}
