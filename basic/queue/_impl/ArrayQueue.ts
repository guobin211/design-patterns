/**
 * ArrayQueue.ts
 * @Date 2020-06-21
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
import { IQueue } from "../_base/IQueue.ts";

export class ArrayQueue<E> implements IQueue<E> {
  private readonly data: E[] = [];

  get isEmpty() {
    return this.data.length === 0;
  }

  get size() {
    return this.data.length;
  }

  /**
   * 出队
   */
  dequeue(): E | undefined {
    return this.data.shift();
  }

  /**
   * 入队
   * @param e
   */
  enqueue(e: E): void {
    this.data.push(e);
  }

  getFront(): E | undefined {
    return this.data[this.data.length - 1];
  }

  toString(): string {
    let res = "ArrayQueue: front: [";
    for (let i = 0; i < this.size; i++) {
      res += this.data[i] + "->";
    }
    res += "] end";
    return res;
  }
}
