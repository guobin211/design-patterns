/**
 * 双向链表
 */
export class DoubleLinkedList<T> {
  private readonly head: Node<T>;
  private readonly tail: Node<T>;
  private size = 0;

  constructor() {
    this.head = new Node<T>(null);
    this.tail = new Node<T>(null);
  }

  public isEmpty() {
    return this.size === 0;
  }

  public addFirst(data: T) {
    const node = new Node(data);
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next = node;
    this.size++;
  }

  public addLast(data: T) {
    const node = new Node(data);
    const last = this.tail.prev;
    if (last) {
      last.next = node;
    }
    node.next = this.tail;
    this.tail.prev = node;
  }

  private add(index: number, data: T) {
    if (index === 0) {
      return this.addFirst(data);
    } else if (index === this.size) {
      return this.addLast(data);
    } else if (index < 0 || index > this.size) {
      throw new RangeError("index illegal");
    } else {
      let temp = this.head;
      for (let i = 0; i < index - 1; i++) {
        temp = temp.next!;
      }
      const node = new Node(data);
      // temp.prev -> Node -> temp.next
      node.next = temp.next;
      temp.next!.prev = node;
      node.prev = temp;
      temp.next = node;
      this.size++;
    }
  }
}

class Node<E> {
  public next: Node<E> | null;
  public prev: Node<E> | null;

  constructor(public value: E | null) {
    this.next = null;
    this.prev = null;
  }
}
