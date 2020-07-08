/**
 * IPriorityQueue.ts
 * 优先队列接口
 * @author GuoBin 2020-06-24
 */

export interface IPriorityQueue<E> {
  readonly size: number;
  enQueue(e: E): void;
  deQueue(): E | null;
  isEmpty(): boolean;
  getFront(): E | null;
}
