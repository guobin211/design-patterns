/**
 * UnionFind.ts 并查集-合并两个元素所属的集合
 * @author GuoBin 2020-06-24
 */
import { IUF } from "../_base/IUF.ts";

export class UnionFind implements IUF {
  readonly #ids: number[];

  get size() {
    return this.#ids.length;
  }

  constructor(size: number) {
    this.#ids = new Array(size);
    for (let i = 0; i < size; i++) {
      this.#ids[i] = i;
    }
  }

  isConnected(p: number, q: number): boolean {
    return this.$find(p) === this.$find(q);
  }

  unionElements(p: number, q: number): void {
    const pid = this.$find(p);
    const qid = this.$find(q);
    if (pid === qid) {
      return;
    }
    for (let i = 0; i < this.#ids.length; i++) {
      if (this.#ids[i] === pid) {
        this.#ids[i] = qid;
      }
    }
  }

  private $find(p: number): number {
    if (p < 0 || p >= this.#ids.length) {
      throw new RangeError("p >= size");
    }
    return this.#ids[p];
  }
}
