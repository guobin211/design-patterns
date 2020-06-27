/**
 * QuickUnion.ts 并查集
 * @author GuoBin 2020-06-24
 */
import { IUF } from "../_base/IUF.ts";

export class QuickUnion implements IUF{
  readonly #parent: number[];
  get size() {
    return this.#parent.length;
  }
  constructor(size: number) {
    this.#parent = new Array(size);
    for (let i = 0; i < size; i++) {
      this.#parent[i] = i;
    }
  }

  private $find(p: number) {
    if (p < 0 || p > this.size) {
      throw new RangeError("p must >= 0 and < size");
    }
    while (p !== this.#parent[p]) {
      p = this.#parent[p]
    }
    return p;
  }

  isConnected(p: number, q: number): boolean {
    return this.$find(p) === this.$find(q);
  }

  /**
   * 合并操作
   * @param p
   * @param q
   */
  unionElements(p: number, q: number): void {
    const pf = this.$find(p);
    const qf = this.$find(q);
    if (pf === qf) {
      return;
    }
    this.#parent[pf] = qf;
  }
}
