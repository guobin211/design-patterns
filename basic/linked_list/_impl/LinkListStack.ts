/**
 * LinkListStack.ts
 * @Date 2020-06-21
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
import { SimpleLinkList } from "./SimpleLinkList.ts";
import { IStack } from "../../stack/_base/IStack.ts";

export class LinkListStack<E> implements IStack<E>{
  private list: SimpleLinkList<E>;

  get size() {
    return this.list.size;
  }

  get isEmpty() {
    return this.list.isEmpty;
  }

  constructor() {
    this.list = new SimpleLinkList<E>();
  }

  push(e: E) {
    this.list.addFirst(e);
  }

  pop(): E | undefined {
    return this.list.removeFirst();
  }

  peek(): E | undefined {
    return this.list.getFirst();
  }

  toString() {
    let res = "LinkListStack: ";
    res += this.list.toString();
    return res;
  }
}
