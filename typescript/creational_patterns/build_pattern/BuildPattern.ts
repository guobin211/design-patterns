/**
 *  BuildPattern.ts 建造者模式
 * @Date 2020-06-18
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
import { ProductA } from "../_impl/ProductA.ts";
import { ProductB } from "../_impl/ProductB.ts";

abstract class BaseBuild {
  abstract buildA(): ProductA;
  abstract buildB(): ProductB;
}

class BuildPattern extends BaseBuild {
  buildA(): ProductA {
    return new ProductA();
  }

  buildB(): ProductB {
    return new ProductB();
  }
}

/**
 * 指挥者
 * 调度具体生产，可以在运行中修改构造工厂
 */
export class Director {
  private _builder: BaseBuild;

  set builder(b: BaseBuild) {
    this._builder = b;
  }

  get builder() {
    if (!this._builder) {
      this._builder = new BuildPattern();
    }
    return this._builder;
  }

  getProductBuilder() {
    return this._builder;
  }
}
