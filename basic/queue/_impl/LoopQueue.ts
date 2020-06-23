/**
 * LoopQueue.ts
 * @Date 2020-06-21
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
import { IQueue } from "../_base/IQueue.ts";

export class LoopQueue<E> implements IQueue<E> {
  #data: E[];
  #front: number;
  #tail: number;
  #size: number;

  get isEmpty() {
    return this.#front === this.#tail;
  }

  /**
   * 当前length
   */
  get size() {
    return this.#size;
  }

  /**
   * 容量
   */
  get capacity() {
    return this.#data.length - 1;
  }

  constructor(private initSize: number = 10) {
    this.#data = new Array(initSize + 1);
    this.#front = 0;
    this.#tail = 0;
    this.#size = 0;
  }

  dequeue(): E | undefined {
    const res: E = this.#data[this.#front];
    this.#front = (this.#front + 1) % this.#data.length;
    this.#size--;
    if (this.size === this.capacity / 4 && this.capacity / 2 > 10) {
      this.resize(this.capacity / 2);
    }
    return res;
  }

  enqueue(e: E): void {
    if ((this.#tail + 1) % this.#data.length === this.#front) {
      this.resize(this.capacity * 2);
    }
    this.#data[this.#tail] = e;
    this.#tail = (this.#tail + 1) % this.#data.length;
    this.#size++;
  }

  getFront(): E | undefined {
    return this.#data[this.#front];
  }

  /**
   * 队列尾部
   */
  getRear(): E | undefined {
    return this.#data[this.#tail];
  }

  toString() {
    let res = "";
    res +=
      `LoopQueue: size = ${this.size}, capacity = ${this.capacity}, #front [`;
    for (
      let i = this.#front; i !== this.#tail; i = (i + 1) % this.#data.length
    ) {
      res += this.#data[i];
      if ((i + 1) % this.#data.length !== this.#tail) {
        res += ", ";
      }
    }
    res += "] end";
    return res;
  }

  private resize(capacity: number) {
    const curr: E[] = new Array(capacity + 1);
    for (let i = 0; i < this.size; i++) {
      curr[i] = this.#data[(i + this.#front) % this.#data.length];
    }
    this.#data = curr;
    this.#front = 0;
    this.#tail = this.size;
  }
}
