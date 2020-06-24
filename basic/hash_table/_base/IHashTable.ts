/**
 * IHashTable.ts
 * @author GuoBin 2020-06-24
 */
import { BaseHash } from "./BaseHash.ts";

export interface IHashTable<K extends BaseHash, V> {
  size: number;

  /**
   * 添加
   * @param key
   * @param value
   */
  add(key: K, value: V): void;

  /**
   * 删除
   * @param key
   */
  delete(key: K): V | null;

  /**
   * 更新
   * @param key
   * @param value
   */
  set(key: K, value: V): void;

  /**
   * 获取
   * @param key
   */
  get(key: K): V | null;
  has(key: K): boolean;
}
