/**
 * LinkListQueue.ts
 * @Date 2020-06-21
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 * 带尾结点的链表队列
 */
import { IQueue } from "../../queue/_base/IQueue.ts";

class Node<E> {
  e: E | undefined;
  next: Node<E> | undefined;

  constructor(e?: E, next?: Node<E>) {
    this.e = e;
    this.next = next;
  }

  toString() {
    return this.e;
  }
}

export class LinkListQueue<E> implements IQueue<E> {
  #head: Node<E> | undefined = new Node<E>();
  #end: Node<E> | undefined;
  #size: number = 0;

  get isEmpty() {
    return this.size === 0;
  }

  get size() {
    return this.#size;
  }

  dequeue(): E | undefined {
    if (this.isEmpty) {
      return;
    }
    const resNode = this.#head;
    this.#head = this.#head!.next;
    if (this.#head) {
      this.#end = undefined;
    }
    this.#size--;
    return resNode?.e;
  }

  enqueue(e: E): void {
    if (this.#end === undefined) {
      this.#end = new Node<E>(e);
      this.#head = this.#end;
    } else {
      this.#end!.next = new Node<E>(e);
      this.#end = this.#end.next;
    }
    this.#size++;
  }

  getFront(): E | undefined {
    if (this.isEmpty) {
      return;
    }
    return this.#head?.e;
  }

  toString() {
    let res = "LinkListQueue: front: [ ";
    let curr = this.#head;
    for (let i = 0; i < this.size; i++) {
      res += curr?.e + "->";
      curr = curr?.next;
    }
    res += "] #end";
    return res;
  }
}
