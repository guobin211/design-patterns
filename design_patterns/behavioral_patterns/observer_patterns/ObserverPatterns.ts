/**
 * ObserverPatterns.ts
 * @Date 2020-06-19
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
interface IObserver {
  onMessage(msg: string): void;
}

interface ISubject {
  attach(o: IObserver): void;
  detach(o: IObserver): void;
  notify(s: string): void;
}

class Component implements IObserver {
  onMessage(msg: string) {
    console.log(`Component: ${msg}`);
  }
}

class ChildComponent implements IObserver {
  onMessage(msg: string) {
    console.log(`ChildComponent: ${msg}`);
  }
}

/**
 * 简单的观察者模式
 */
export class ObserverPatterns implements ISubject {
  private _observers: IObserver[] = [];

  attach(o: IObserver): void {
    if (!this._observers.includes(o)) {
      this._observers.push(o);
    }
  }

  detach(o: IObserver): void {
    const index = this._observers.indexOf(o);
    if (index >= 0) {
      this._observers.splice(index, 1);
    }
  }

  notify(s: string): void {
    for (const obs of this._observers) {
      obs.onMessage(s);
    }
  }
}

const comp1 = new Component();
const comp2 = new ChildComponent();
const bus = new ObserverPatterns();
bus.attach(comp1);
bus.attach(comp2);
bus.notify("Hello");
bus.detach(comp2);
bus.notify("World");
