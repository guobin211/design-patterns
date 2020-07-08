/**
 * PriorityQueue.ts 优先队列-最大堆实现
 * @author GuoBin 2020-06-24
 */
import { IPriorityQueue } from "../_base/IPriorityQueue.ts";
import { MaxHeap } from "./MaxHeap.ts";
export class PriorityQueue<E> implements IPriorityQueue<E> {
  #maxHeap: MaxHeap<E>;
  constructor() {
    this.#maxHeap = new MaxHeap<E>();
  }
  get size() {
    return this.#maxHeap.size;
  }

  deQueue(): E | null {
    return this.#maxHeap.removeMaxElement();
  }

  enQueue(e: E): void {
    this.#maxHeap.add(e);
  }

  getFront(): E | null {
    return this.#maxHeap.findMax();
  }

  isEmpty(): boolean {
    return this.#maxHeap.isEmpty();
  }
}
