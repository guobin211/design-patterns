/**
 * ArrayStack.ts
 * @Date 2020-06-21
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
import { IStack } from "../_base/IStack.ts";

export class ArrayStack<E> implements IStack<E> {
  #data: Array<E> = [];

  get isEmpty() {
    return this.#data.length === 0;
  }

  get size() {
    return this.#data.length;
  }

  constructor(private capacity?: number) {}

  peek(): E {
    return this.#data[this.#data.length - 1];
  }

  pop(): E | undefined {
    return this.#data.pop();
  }

  push(e: E): void {
    if (this.capacity && this.#data.length >= this.capacity) {
      throw new Error(`ArrayStack is full: ${this.capacity}`);
    }
    this.#data.push(e);
  }

  toString() {
    let res = "";
    for (let i = 0; i < this.#data.length; i++) {
      res += `${this.#data[i]}->`;
    }
    return res;
  }
}
