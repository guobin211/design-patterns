/**
 * MediatorPatterns.ts
 * @Date 2020-06-19
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
abstract class BaseMediator {
  /**
   * 注册中间人
   * @param c
   */
  abstract register(c: BaseClient): void;

  /**
   * 发布消息
   * @param s
   */
  abstract publish(s: string): void;
}

abstract class BaseClient {
  abstract sendMsg(p: string): void;
}

class WebClient extends BaseClient {
  sendMsg(p: string) {
    console.log(`WebClient send ${p}`);
  }
}

class MediatorPatterns extends BaseMediator {
  private _clients: BaseClient = new WebClient();
  publish(s: string): void {
    console.log(`MediatorPatterns: call publish`);
    this._clients.sendMsg(s);
  }

  register(c: BaseClient): void {
    this._clients = c;
  }
}

new MediatorPatterns().publish("Hello");
