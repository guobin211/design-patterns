/**
 * IBST.ts 二分搜索树
 * @Date 2020-06-22
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
export interface IBST<E> {
  /**
   * 添加元素
   * @param e
   */
  add(e: E): void;

  /**
   * 前序遍历
   * @param callback
   */
  preOrder(callback: any): void;

  /**
   * 中序遍历
   */
  inOrder(callback: any): void;

  /**
   * 后序遍历
   */
  postOrder(callback: any): void;

  /**
   * 层序遍历--广度优先
   */
  levelOrder(callback: any): void;

  /**
   * 最小元素
   */
  minElement(): E;

  /**
   * 最大元素
   */
  maxElement(): E;

  /**
   * 删除最小值
   */
  removeMin(): E;

  /**
   * 删除最大值
   */
  removeMax(): E;

  /**
   * 删除元素
   * @param e
   */
  remove(e: E): void;

  toString(): string;
}
