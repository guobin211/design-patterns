/**
 * FlyweightPatterns.ts
 * @Date 2020-06-19
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
abstract class BaseFly {
  abstract fly(p: string): void;
}

class SharedClient {
  getName() {
    return "SharedClient";
  }
}

class SelfClient {
  getName() {
    return "SelfClient";
  }
}

class FlyweightPatterns extends BaseFly {
  fly(p: string): void {
    console.log(p);
  }
}

const flyweightPatterns = new FlyweightPatterns();
flyweightPatterns.fly(new SharedClient().getName());
flyweightPatterns.fly(new SelfClient().getName());
