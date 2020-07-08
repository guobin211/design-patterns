/**
 * IStack.ts
 * @Date 2020-06-21
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
export interface IStack<E> {
  /**
   * 入栈, 放入栈顶
   */
  push(e: E): void;

  /**
   * 出栈, 返回栈顶的元素
   */
  pop(): E | undefined;
  /**
   * 查看栈顶的元素
   */
  peek(): E | undefined;
  size: number;
  isEmpty: boolean;
}
