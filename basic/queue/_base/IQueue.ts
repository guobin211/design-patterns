/**
 * IQueue.ts
 * @Date 2020-06-21
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
export interface IQueue<E> {
  size: number;
  isEmpty: boolean;

  /**
   * 入队, 将元素放入队列尾部
   * @param e
   */
  enqueue(e: E): void;

  /**
   * 出队, 返回队列的第一个元素
   */
  dequeue(): E | undefined;

  /**
   * 查看队列开始的元素
   */
  getFront(): E | undefined;

  toString(): string;
}
