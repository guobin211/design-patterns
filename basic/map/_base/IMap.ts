/**
 * IMap.ts
 * @Date 2020-06-23
 * @Author GuoBin<guobin201314@gmail.com>
 */

export interface IMap<K, V> {
  size: number;

  /**
   * 添加
   * @param k
   * @param v
   */
  add(k: K, v: V): void;

  /**
   * 删除
   * @param k
   */
  remove(k: K): V | null;
  /**
   * 包含
   * @param k
   */
  has(k: K): boolean;

  get(k: K): V | null;
  /**
   * 修改
   * @param k
   * @param v
   */
  set(k: K, v: V): void;
  isEmpty(): boolean;
}
