/**
 * ISet.ts
 * @Date 2020-06-23
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */

export interface ISet<E> {
  add(e: E): void;
  remove(e: E): void;
  includes(e: E): boolean;
  isEmpty(): boolean;
  size(): number;
}
