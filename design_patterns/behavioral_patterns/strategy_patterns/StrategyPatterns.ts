/**
 * StrategyPatterns.ts
 * @Date 2020-06-19
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
abstract class BaseStrategy {
  abstract getMax(): number;
}

class Context {
  private _value = 100;
  // 设置策略
  setStrategy(strategy: BaseStrategy) {
    const val = strategy.getMax();
    if (val > this._value) {
      this._value = val;
    }
    return this;
  }

  getValue(): number {
    return this._value;
  }
}

/**
 * 具体策略类
 */
class StrategyPatterns extends BaseStrategy {
  getMax(): number {
    return 1000;
  }
}

const val = new Context().setStrategy(new StrategyPatterns()).getValue();
console.log(val);
