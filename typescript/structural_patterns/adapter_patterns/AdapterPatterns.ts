/**
 * AdapterPatterns.ts
 * @Date 2020-06-19
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
abstract class Target {
  abstract request(): 220;
}

class AdapterClient {
  private _value = 110;
  specificRequest() {
    return this._value;
  }
}

/**
 * 适配器只返回目标值
 */
export class AdapterPatterns implements Target {
  constructor(private _adapterClient: AdapterClient) {}
  request(): 220 {
    const value = this._adapterClient.specificRequest();
    if (value === 220) {
      return value;
    } else {
      return 220;
    }
  }

  run() {
    console.log(this.request());
  }
}

new AdapterPatterns(new AdapterClient()).run();
