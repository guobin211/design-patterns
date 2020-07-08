/**
 * ProxyPatterns.ts
 * @Date 2020-06-19
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
abstract class BaseSubject {
  abstract name: string;
  abstract next(val: string): void;
}

class RealSubject extends BaseSubject {
  name = "RealSubject";
  next(val: string): void {
    console.log(`RealSubject next: ${this.name}`);
  }
}

/**
 * 代理模式
 */
export class ProxyPatterns extends BaseSubject {
  name = "ProxyPatterns";
  private _realSubject: BaseSubject = new RealSubject();

  private _beforeNext() {
    console.log(`_beforeNext hooks call ${this._realSubject.name}`);
  }
  next(val: string): void {
    this._beforeNext();
    this._realSubject.next(val);
    this._afterNext();
  }
  private _afterNext() {
    console.log(`_afterNext hooks call ${this._realSubject.name}`);
  }
}

const proxyPatterns = new ProxyPatterns();
proxyPatterns.next("Hello");
proxyPatterns.next("World");
