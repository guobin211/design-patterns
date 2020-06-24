/**
 * LinkedListMap.ts
 * @Date 2020-06-23
 * @Author GuoBin<guobin201314@gmail.com>
 */
import { IMap } from "../_base/IMap.ts";

type Key = string | number;

class Node<K, V> {
  public key: K | null;
  public value: V | null;
  public next: Node<K, V> | null;
  constructor(key?: K, value?: V, next?: Node<K, V> | null) {
    this.key = key || null;
    this.value = value || null;
    this.next = next || null;
  }

  toString() {
    return `{${this.key}: ${this.value}}`;
  }
}

export class LinkedListMap<Key, V> implements IMap<Key, V> {
  #dummyHead: Node<Key, V>;
  #size: number;

  get size() {
    return this.#size;
  }

  isEmpty(): boolean {
    return this.#size === 0;
  }

  constructor() {
    this.#dummyHead = new Node<Key, V>();
    this.#size = 0;
  }

  has(k: Key): boolean {
    return this.$getNode(k) !== null;
  }

  get(k: Key): V | null {
    const node = this.$getNode(k);
    return node === null ? null : node.value;
  }

  add(k: Key, v: V): void {
    const node = this.$getNode(k);
    if (node === null) {
      this.#dummyHead.next = new Node(k, v, this.#dummyHead.next);
      this.#size++;
    } else {
      node.value = v;
    }
  }

  set(k: Key, v: V) {
    const node = this.$getNode(k);
    if (node === null) {
      throw new Error(`${k} doesn't exist!`);
    }
    node.value = v;
  }

  remove(k: Key): V | null {
    let prev = this.#dummyHead;
    while (prev.next !== null) {
      if (prev.next.key === k) {
        break;
      }
      prev = prev.next;
    }
    if (prev.next !== null) {
      const delNode = prev.next;
      prev.next = delNode.next;
      delNode.next = null;
      this.#size--;
      return delNode.value;
    }
    return null;
  }

  private $getNode(key: Key): Node<Key, V> | null {
    let curr = this.#dummyHead.next;
    while (curr !== null) {
      if (curr.key === key) {
        return curr;
      }
      curr = curr.next;
    }
    return null;
  }
}
