/**
 * leet_code_865.ts
 * @Date 2020-06-22
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */

class MyCircularQueue {
  private readonly data: any[];
  private readonly capacity: number;
  constructor(k: number) {
    this.data = [];
    this.capacity = k;
  }

  enQueue(value: any): boolean {
    if (this.isFull()) {
      return false;
    }
    this.data.push(value);
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.data.shift();
    return true;
  }

  Front(): any {
    if (this.isEmpty()) {
      return -1;
    }
    return this.data[0];
  }

  Rear(): any {
    if (this.isEmpty()) {
      return -1;
    }
    return this.data[this.data.length - 1];
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }

  isFull(): boolean {
    return this.data.length === this.capacity;
  }
}

const data1 = [
  "MyCircularQueue",
  "enQueue",
  "Rear",
  "Rear",
  "deQueue",
  "enQueue",
  "Rear",
  "deQueue",
  "Front",
  "deQueue",
  "deQueue",
  "deQueue",
];
const data2 = [[6], [6], [], [], [], [5], [], [], [], [], [], []];
const myCircularQueue = new MyCircularQueue(data1.length);
for (const s of data1) {
  myCircularQueue.enQueue(s);
}
