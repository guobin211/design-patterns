/**
 * AVLTree.ts 平衡二分搜索树
 * @author GuoBin 2020-06-27
 * 子节点高度差不大于1，左旋转和右旋转
 */
import { Trie } from "../../trie/_impl/Trie.ts";

class Node<K, V> {
  key: K;
  value: V;
  left: Node<K, V> | null;
  right: Node<K, V> | null;
  height: number;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
    this.left = this.right = null;
    this.height = 1;
  }

  toString() {
    return `{${this.key}: ${this.value}`;
  }
}

export class AVLTree<K, V> {
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

  isBST(): boolean {
    const arr1: K[] = [];
    this.inOrder(this.#root, (k) => arr1.push(k));
    for (let i = 1; i < arr1.length; i++) {
      if (arr1[i - 1] > arr1[i]) {
        return false;
      }
    }
    return true;
  }

  inOrder(node: Node<K, V> | null, callback: (k: K) => void) {
    if (node === null) {
      return;
    }
    this.inOrder(node.left, callback);
    callback(node.key);
    this.inOrder(node.right, callback);
  }

  isBalance() {
    return this.$isBalance(this.#root);
  }

  private $isBalance(node: Node<K, V> | null): boolean {
    if (node === null) {
      return true;
    }
    const balance = this.$getBalance(node);
    if (Math.abs(balance) > 1) {
      return false;
    }
    return this.$isBalance(node.left) && this.$isBalance(node.right);
  }

  private $getHeight(node: Node<K, V> | null): number {
    if (node) {
      return node.height;
    }
    return 0;
  }

  private $getBalance(node: Node<K, V> | null): number {
    if (node) {
      return this.$getHeight(node.left) - this.$getHeight(node.right);
    }
    return 0;
  }

  private $rightRotate(y: Node<K, V>) {
    const x: Node<K, V> = y.left!;
    const T3 = x.right!;
    // 右旋转
    x.right = y!;
    y.left = T3;
    // 更新height
    y.height = Math.max(this.$getHeight(y.left), this.$getHeight(y.right));
    x.height = Math.max(this.$getHeight(x.left), this.$getHeight(x.right));
    return x;
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
    // 更新height
    node.height = 1 +
      Math.max(this.$getHeight(node.left), this.$getHeight(node.right));
    // 平衡因子
    const balance = this.$getBalance(node);
    if (Math.abs(balance) > 1) {
      console.warn(`unbalance: ${balance}`);
    }
    if (balance > 1 && this.$getBalance(node.left) >= 0) {

    }
    return node;
  }
}
