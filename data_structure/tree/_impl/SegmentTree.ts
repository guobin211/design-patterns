/**
 * SegmentTree.ts 线段树-区间数
 * @author GuoBin 2020-06-24
 */
import { IMerge } from "../_base/IMerge.ts";

function leftChild(index: number): number {
  return 2 * index + 1;
}

function rightChild(index: number): number {
  return 2 * index + 2;
}

function getMid(l: number, r: number): number {
  return Math.floor(l + (r - l) / 2);
}

export class SegmentTree<E> {
  #tree: E[];
  #data: E[];
  #merge: IMerge<E>;

  get size() {
    return this.#data.length;
  }

  constructor(array: E[], merge: IMerge<E>) {
    this.#merge = merge;
    this.#data = new Array(array.length);
    for (let i = 0; i < array.length; i++) {
      this.#data[i] = array[i];
    }
    this.#tree = new Array(array.length * 4);
    try {
      this.$buildSegmentTree(0, 0, array.length - 1);
    } catch (e) {
      console.log(e);
    }
  }

  get(index: number): E {
    if (index < 0 || index >= this.#data.length) {
      throw new RangeError(`${index} range error`);
    }
    return this.#data[index];
  }

  /**
   * 在treeIndex的位置创建表示区间[l, r]的线段树
   * @param treeIndex
   * @param l
   * @param r
   */
  private $buildSegmentTree(treeIndex: number, l: number, r: number): void {
    if (l === r) {
      this.#tree[treeIndex] = this.#data[l];
      return;
    }
    const leftTreeIndex: number = leftChild(treeIndex);
    const rightTreeIndex: number = rightChild(treeIndex);
    const mid = getMid(l, r);
    this.$buildSegmentTree(leftTreeIndex, l, mid);
    this.$buildSegmentTree(rightTreeIndex, mid + 1, r);
    this.#tree[treeIndex] = this.#merge.merge(
      this.#tree[leftTreeIndex],
      this.#tree[rightTreeIndex],
    );
  }

  /**
   * 查询区间
   * @param ql
   * @param qr
   */
  query(ql: number, qr: number): E {
    if (
      ql < 0 || ql >= this.#data.length || qr < 0 ||
      qr >= this.#data.length || ql >= qr
    ) {
      throw new RangeError("ql < qr");
    }
    return this.$query(0, 0, this.#data.length - 1, ql, qr);
  }

  private $query(
    treeIndex: number,
    l: number,
    r: number,
    ql: number,
    qr: number,
  ): E {
    if (l === ql && r === qr) {
      return this.#tree[treeIndex];
    }
    const mid = getMid(l, r);
    const leftIndex = leftChild(treeIndex);
    const rightIndex = rightChild(treeIndex);
    if (ql >= mid + 1) {
      return this.$query(rightIndex, mid + 1, r, ql, qr);
    } else if (qr <= mid) {
      return this.$query(leftIndex, l, mid, ql, qr);
    }
    const leftRes = this.$query(leftIndex, l, mid, ql, mid);
    const rightRes = this.$query(rightIndex, mid + 1, r, mid + 1, qr);
    return this.#merge.merge(leftRes, rightRes);
  }

  toString() {
    return this.#data;
  }
}
