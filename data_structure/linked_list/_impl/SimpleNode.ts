/**
 * TempNode.ts
 * @Date 2020-06-21
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
export class SimpleNode<E> {
  public element: E | undefined;
  public next: SimpleNode<E> | undefined;

  constructor(el?: E, next?: SimpleNode<E>) {
    this.element = el;
    this.next = next;
  }

  toString() {
    return this.element;
  }
}
