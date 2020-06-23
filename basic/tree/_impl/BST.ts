/**
 * BST.ts
 * @Date 2020-06-22
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
import { IBST } from "../_base/IBST.ts";

/**
 * BST root
 */
type NodeOrNull<E> = Node<E> | null;

/**
 * order callback
 */
type CallBack<E> = (e: E) => void;

class Node<E> {
  public left: NodeOrNull<E> = null;
  public right: NodeOrNull<E> = null;
  /**
   * 树元素数量
   */
  size?: number;
  /**
   * 树的深度
   */
  depth?: number;
  constructor(public e: E) {}
}

export class BST<E> implements IBST<E> {
  #root: NodeOrNull<E>;
  #size: number;
  #res: string = "";

  constructor(e?: E) {
    if (e) {
      this.#root = new Node<E>(e);
      this.#size = 1;
    } else {
      this.#root = null;
      this.#size = 0;
    }
  }

  getSize(): number {
    return this.#size;
  }

  isEmpty(): boolean {
    return this.#size === 0;
  }

  add(e: E): void {
    this.#root = this.$add(this.#root, e);
  }

  /**
   * 递归插入元素
   * @param node
   * @param e
   */
  private $add(node: Node<E> | null, e: E): Node<E> {
    if (node === null) {
      this.#size++;
      return new Node<E>(e);
    }
    if (e < node.e) {
      node.left = this.$add(node.left, e);
    }
    if (e > node.e) {
      node.right = this.$add(node.right, e);
    }
    return node;
  }

  private $adds(node: Node<E>, e: E): void {
    // 特殊情况处理 #root, 左边界, 右边界
    if (e === node.e) {
      return;
    } else if (e < node.e && node.left === null) {
      node.left = new Node<E>(e);
      this.#size++;
      return;
    } else if (e > node.e && node.right === null) {
      node.right = new Node<E>(e);
      this.#size++;
      return;
    }
    // 中间递归
    if (e < node.e && node.left !== null) {
      this.$adds(node.left, e);
    }
    if (e > node.e && node.right !== null) {
      this.$adds(node.right, e);
    }
  }

  /**
   * 查找是否包含元素
   * @param e
   */
  includes(e: E): boolean {
    return this.$includes(this.#root, e);
  }

  private $includes(node: Node<E> | null, e: E): boolean {
    if (node === null) {
      return false;
    }
    if (e === node.e) {
      return true;
    } else if (e < node.e) {
      return this.$includes(node.left, e);
    } else {
      return this.$includes(node.right, e);
    }
  }

  preOrder(callback?: CallBack<E>) {
    this.$preOrder(this.#root, callback);
  }

  private $preOrder(node: NodeOrNull<E>, callback?: CallBack<E>) {
    if (node === null) {
      return;
    }
    console.log(node.e);
    if (callback) {
      callback(node.e);
    }
    this.$preOrder(node.left, callback);
    this.$preOrder(node.right, callback);
  }

  inOrder(callback?: CallBack<E>) {
    this.$inOrder(this.#root, callback);
  }

  private $inOrder(node: NodeOrNull<E>, callback?: CallBack<E>) {
    if (node === null) {
      return;
    }
    this.$inOrder(node.left);
    console.log(node.e);
    if (callback) {
      callback(node.e);
    }
    this.$inOrder(node.right);
  }

  postOrder(callback?: CallBack<E>) {
    this.$postOrder(this.#root, callback);
  }

  private $postOrder(node: NodeOrNull<E>, callback?: CallBack<E>) {
    if (node === null) {
      return;
    }
    this.$postOrder(node.right, callback);
    this.$postOrder(node.left, callback);
    console.log(node.e);
    if (callback) {
      callback(node.e);
    }
  }

  levelOrder(callback?: CallBack<E>) {
    const q: NodeOrNull<E>[] = [];
    q.push(this.#root);
    while (q.length !== 0) {
      const sf = q.shift();
      if (sf) {
        let curr: NodeOrNull<E> = sf;
        console.log(curr.e);
        if (callback) {
          callback(curr.e);
        }
        if (curr.left !== null) {
          q.push(curr.left);
        }
        if (curr.right !== null) {
          q.push(curr.right);
        }
      }
    }
  }

  minElement(): E {
    if (this.#root === null) {
      throw new RangeError("BST<E> is Empty")
    } else {
      return this.$minElement(this.#root).e;
    }
  }

  private $minElement(node: Node<E>): Node<E> {
    if (node.left === null) {
      return node;
    } else {
      return this.$minElement(node.left);
    }
  }

  maxElement(): E {
    if (this.#root === null) {
      throw new RangeError("BST<E> is Empty")
    } else {
      return this.$maxElement(this.#root).e;
    }
  }

  private $maxElement(node: Node<E>): Node<E> {
    if (node.right === null) {
      return node;
    } else {
      return this.$maxElement(node.right);
    }
  }

  removeMin(): E {
    if (this.#root === null) {
      throw new RangeError("BST<E> is Empty")
    } else {
      const res = this.minElement();
      this.#root = this.$removeMin(this.#root);
      return res;
    }
  }

  private $removeMin(node: NodeOrNull<E>): NodeOrNull<E> {
    if (node === null) {
      return node;
    } else {
      if (node.left === null) {
        const nodeRight = node.right;
        node.right = null;
        this.#size--;
        return nodeRight;
      }

      node.left = this.$removeMin(node.left);
      return node;
    }
  }

  removeMax(): E {
    if (this.#root === null) {
      throw new RangeError("BST<E> is Empty")
    } else {
      const res = this.maxElement();
      this.#root = this.$removeMax(this.#root);
      return res;
    }
  }

  private $removeMax(node: NodeOrNull<E>):  NodeOrNull<E> {
    if (node === null) {
      return node;
    } else {
      if (node.right === null) {
        const nodeLeft = node.left;
        node.left = null;
        this.#size--;
        return nodeLeft;
      } else {
        node.right = this.$removeMax(node.right);
        return node;
      }
    }
  }

  remove(e: E) {
    this.$remove(this.#root, e);
  }

  private $remove(node: NodeOrNull<E>, e: E): NodeOrNull<E> {
    if (node === null) {
      return null;
    }
    if (e < node.e) {
      node.left = this.$remove(node.left, e);
      return node;
    } else if (e > node.e) {
      node.right = this.$remove(node.right, e);
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

  toString(): string {
    this.#res = "";
    this.$toString(this.#root, 0);
    return this.#res;
  }

  private $toString(node: NodeOrNull<E>, depth: number) {
    if (node === null) {
      this.#res += (BST.$depth(depth) + "null\n");
      return;
    }
    this.#res += (BST.$depth(depth) + node.e + "null\n");
    this.$toString(node.left, depth + 1);
    this.$toString(node.right, depth + 1);
  }

  private static $depth(depth: number): string {
    let res = "";
    for (let i = 0; i < depth; i++) {
      res += "--";
    }
    return res;
  }
}
