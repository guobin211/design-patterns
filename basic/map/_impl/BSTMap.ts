/**
 * BSTMap.ts 二分搜索树实现Map
 * @Date 2020-06-23
 * @Author GuoBin<guobin201314@gmail.com>
 */
import { IMap } from "../_base/IMap.ts";

class Node<K, V> {
  key: K;
  value: V;
  left: Node<K, V> | null;
  right: Node<K, V> | null;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
    this.left = this.right = null;
  }

  toString() {
    return `{${this.key}: ${this.value}`;
  }
}

export class BSTMap<K, V> implements IMap<K, V> {
  #root: Node<K, V> | null;
  #size: number;
  get size() {
    return this.#size;
  }

  constructor() {
    this.#size = 0;
    this.#root = null;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  add(k: K, v: V): void {
    this.#root = this.$add(this.#root, k, v);
  }

  private $add(node: Node<K, V> | null, k: K, v: V) {
    if (node === null) {
      this.#size++;
      return new Node(k, v);
    }
    if (k < node.key) {
      // 左子树添加
      node.left = this.$add(node.left, k, v);
    } else if (k > node.key) {
      // 右子树添加
      node.right = this.$add(node.right, k, v);
    } else {
      // 已有key更新value
      node.value = v;
    }
    return node;
  }

  get(k: K): V | null {
    const node = this.$getNode(this.#root, k);
    if (node !== null) {
      return node.value;
    }
    return node;
  }

  private $getNode(node: Node<K, V> | null, key: K): Node<K, V> | null {
    if (node === null) {
      return null;
    }
    if (key === node.key) {
      return node;
    } else if (key < node.key) {
      return this.$getNode(node.left, key);
    } else {
      return this.$getNode(node.right, key);
    }
  }

  has(k: K): boolean {
    return this.$getNode(this.#root, k) !== null;
  }

  remove(k: K): V | null {
    const node = this.$getNode(this.#root, k);
    if (node !== null) {
      this.#root = this.$remove(this.#root, k);
    }
    return null;
  }

  private $remove(node: Node<K, V> | null, key: K): Node<K, V> | null {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      node.left = this.$remove(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this.$remove(node.right, key);
      return node;
    } else {
      // 待删除节点左子树为空
      if (node.left === null) {
        const rightNode = node.right;
        node.right = null;
        this.#size--;
        return rightNode;
      }
      // 待删除节点右子树为空
      if (node.right === null) {
        const leftNode = node.left;
        node.left = null;
        this.#size--;
        return leftNode;
      }
      // 待删除节点左右树都不为空
      // 找到比待删除节点大的最小节点, 即待删除节点右子树的最小节点
      // 用这个节点顶替待删除节点的位置
      const next = this.$minElement(node.right);
      next.right = this.$removeMin(node.right);
      next.left = node.left;
      node.left = node.right = null;
      return next;
    }
  }

  private $minElement(node: Node<K, V>): Node<K, V> {
    if (node.left === null) {
      return node;
    }
    return this.$minElement(node.left);
  }

  /**
   * 删除已node为根的二分搜索树中的最小节点，返回删除节点后新的二分搜索树的根
   * @param node
   */
  private $removeMin(node: Node<K, V>): Node<K, V> {
    if (node.left === null) {
      const rightNode = node.right!!;
      node.right = null;
      this.#size--;
      return rightNode;
    }
    node.left = this.$removeMin(node.left);
    return node;
  }

  set(k: K, v: V): void {
    const node = this.$getNode(this.#root, k);
    if (node === null) {
      throw new Error(`key: ${k} doesn't exist!`);
    }
    node.value = v;
  }
}
