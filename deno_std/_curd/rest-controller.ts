interface ControllerMetadata {
  URI: string;
}

class HttpError {
  constructor(public code: number, public msg?: string) {}
}

export function RestController(path: string): ClassDecorator & MethodDecorator {
  return function (target: object) {
    initHooks(target);
    Reflect.defineProperty(target, "__Metadata__", {
      get(): ControllerMetadata {
        return {
          URI: path,
        };
      },
    });
  };
}

/**
 * 拦截处理http的函数,处理接口错误
 * @param target Controller
 */
function initHooks<T>(target: object) {
  for (const targetKey in target) {
    if (
      target.hasOwnProperty(targetKey) &&
      typeof (target as any)[targetKey] === "function"
    ) {
      const callFunction: Function = (target as any)[targetKey];
      Object.defineProperty(target, targetKey, {
        get(): Function {
          return function (...args: any[]) {
            try {
              callFunction.call(target, ...args);
            } catch (e) {
              console.error(`RestController Error With ${targetKey}`);
              throw new HttpError(500, `${targetKey}() has Error ${e.message}`);
            }
          };
        },
      });
    }
  }
}
