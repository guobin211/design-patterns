/**
 * BSTSet.ts
 * @Date 2020-06-23
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 * 基于二分搜索树的集合
 */
import { ISet } from "../_base/ISet.ts";
import { BST } from "./BST.ts";

export class BSTSet<E> implements ISet<E> {
  #bst: BST<E>;

  constructor() {
    this.#bst = new BST<E>();
  }

  add(e: E): void {
    this.#bst.add(e);
  }

  includes(e: E): boolean {
    return this.#bst.includes(e);
  }

  isEmpty(): boolean {
    return this.#bst.isEmpty();
  }

  remove(e: E): void {
    this.#bst.remove(e);
  }

  size(): number {
    return this.#bst.getSize();
  }
}
