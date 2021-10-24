export function AfterCall() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const value = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      const result = await value.apply(this, args);
      console.log(`AfterCall: ${propertyKey}()`);
      return result;
    }
  }
}

export type ClassType = { new (...args: any[]): {}};

export function CacheTiming<T extends { new (...args: any[]): {}}>(constructor: T) {
  return class extends constructor {
    __timings = [];
    __logTimings = () => {
      console.log(this.__timings);
    }
  }
}

export interface WithTiming {
  __timings: number[];
  __logTimings: () => void;
}

@CacheTiming
export class Controller {
  @AfterCall()
  public getSync(path: string) {
    return `${path}/`;
  }
  @AfterCall()
  public async get(path: string) {
    return `${path}/`;
  }
}

const controller = new Controller();

controller.getSync('localhost');
