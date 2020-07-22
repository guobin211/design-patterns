/**
 * SimpleLinkList.ts 简单的单链表
 * @Date 2020-06-21
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
import { SimpleNode } from "./SimpleNode.ts";

export class SimpleLinkList<E> {
  // 虚拟头节点
  readonly #dummyHead: SimpleNode<E>;
  #size: number;
  get size() {
    return this.#size;
  }

  get isEmpty() {
    return this.#size === 0;
  }

  constructor() {
    this.#size = 0;
    this.#dummyHead = new SimpleNode();
  }

  /**
   * 插入节点
   * @param index
   * @param e
   */
  add(index: number, e: E) {
    if (index < 0 || index > this.size) {
      throw new Error("Add failed. Illegal index.");
    }
    let prev = this.#dummyHead;
    for (let i = 0; i < index; i++) {
      prev = prev.next!;
    }
    prev!.next = new SimpleNode(e, prev.next);
    this.#size++;
  }

  addFirst(e: E) {
    this.add(0, e);
  }

  addLast(e: E) {
    this.add(this.size, e);
  }

  get(index: number): E | undefined {
    if (index < 0 || index >= this.size) {
      throw new Error("Add failed. Illegal index.");
    }
    let current = this.#dummyHead.next;
    for (let i = 0; i < index; i++) {
      current = current?.next;
    }
    return current?.element;
  }

  getFirst() {
    return this.get(0);
  }

  getLast() {
    return this.get(this.size - 1);
  }

  set(index: number, e: E) {
    if (index < 0 || index >= this.size) {
      throw new Error("Add failed. Illegal index.");
    }
    let current = this.#dummyHead.next;
    for (let i = 0; i < index; i++) {
      current = current?.next;
    }
    return current ? current.element = e : -1;
  }

  includes(e: E): boolean {
    let current = this.#dummyHead.next;
    while (current) {
      if (current.element === e) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  /**
   * 删除节点
   * @param index
   */
  remove(index: number): E | undefined {
    if (index < 0 || index >= this.size) {
      throw new Error("Add failed. Illegal index.");
    }
    let prev: SimpleNode<E> = this.#dummyHead;
    for (let i = 0; i < index; i++) {
      prev = prev.next!;
    }
    const resNode: SimpleNode<E> = prev.next!;
    prev.next = resNode.next;
    this.#size--;
    return resNode.element;
  }

  removeFirst(): E | undefined {
    return this.remove(0);
  }

  removeLast() {
    return this.remove(this.size - 1);
  }

  toString() {
    let res = "start: [";
    let curr = this.#dummyHead.next;
    while (curr) {
      res += curr.toString() + "->";
      curr = curr.next;
    }
    res += "]: end";
    return res;
  }
}
