/**
 * LinkListQueue.ts
 * @Date 2020-06-21
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
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

export class LinkListQueue<E> implements IQueue<E>{
  private head: Node<E> | undefined = new Node<E>();
  private end: Node<E> | undefined;
  private _size: number = 0;

  get isEmpty() {
    return this.size === 0;
  };

  get size() {
    return this._size;
  };

  dequeue(): E | undefined {
    if (this.isEmpty) {
      return
    }
    const resNode = this.head;
    this.head = this.head!.next;
    if (this.head) {
      this.end = undefined;
    }
    this._size--;
    return resNode?.e;
  }

  enqueue(e: E): void {
    if (this.end === undefined) {
      this.end = new Node<E>(e);
      this.head = this.end;
    } else {
      this.end!.next = new Node<E>(e);
      this.end = this.end.next;
    }
    this._size++;
  }

  getFront(): E | undefined {
    if (this.isEmpty) {
      return
    }
    return this.head?.e;
  }

  toString() {
    let res = "LinkListQueue: front: [ ";
    let curr = this.head;
    for (let i = 0; i < this.size ; i++) {
      res += curr?.e + "->";
      curr = curr?.next;
    }
    res += "] end"
    return res;
  }

}
