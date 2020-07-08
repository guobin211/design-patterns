/**
 * IMerge.ts
 * @author GuoBin 2020-06-24
 */

export interface IMerge<E> {
  /**
   * 自定义处理区间的业务，可以是求和
   * @param e1
   * @param e2
   */
  merge(e1: E, e2: E): E;
}
