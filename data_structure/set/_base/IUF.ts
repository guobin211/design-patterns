/**
 * IUF.ts
 * @author GuoBin 2020-06-24
 */

export interface IUF {
  size: number;
  isConnected(p: number, q: number): boolean;

  /**
   * 合并操作
   * @param p
   * @param q
   */
  unionElements(p: number, q: number): void;
}
