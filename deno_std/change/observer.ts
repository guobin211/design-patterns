interface Observer {
  notify<T>(msg: T): void;
}

interface Subject {
  _observers: Observer[];
  add(observer: Observer): Subject;
  remove(observer: Observer): Subject;
  publish<T>(msg: T): void;
}

const subject: Subject = {
  _observers: [],
  add(observer: Observer) {
    if (!this._observers.includes(observer)) {
      this._observers.push(observer);
    }
    return this;
  },
  remove(observer: Observer) {
    const index = this._observers.indexOf(observer);
    if (index >= 0) {
      this._observers.splice(index, 1);
    }
    return this;
  },
  publish<T>(msg: T): void {
    this._observers.forEach((observer) => {
      observer.notify(msg);
    });
  },
};

class Page implements Observer {
  constructor(private _name: string) {}
  public notify<T>(msg: T): void {
    console.log(`${this._name}: ${msg}`);
  }
}

const page1 = new Page("page1");
const page2 = new Page("page2");

subject.add(page1).add(page2);
subject.publish("Hello World");
