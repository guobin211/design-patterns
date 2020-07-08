/**
 * DecoratorPatterns.ts
 * @Date 2020-06-19
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
interface ComponentDecorator {
  name: string;
  template: string;
}

function Component(d: ComponentDecorator) {
  return function (target: any) {
    target["name"] = d.name;
    target["template"] = d.template;
    return target;
  };
}

class DecoratorPatterns {
  run() {
    for (const key in this) {
      if (this.hasOwnProperty(key)) {
        console.log(`${key} = ${this[key]}`);
      }
    }
  }
}

Component({ name: "DecoratorPatterns", template: "index.html" })(
  new DecoratorPatterns(),
).run();
