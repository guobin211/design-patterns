/**
 * Trie.ts 字典树-处理字符串
 * @author GuoBin 2020-06-24
 */

class Node {
  isWord: boolean;
  next: Map<string, Node>;

  constructor(isWord?: boolean) {
    this.isWord = isWord || false;
    this.next = new Map<string, Node>();
  }
}

export class Trie {
  #root: Node;
  #size: number;

  constructor() {
    this.#root = new Node();
    this.#size = 0;
  }

  get size() {
    return this.#size;
  }

  add(word: string): void {
    let curr = this.#root;
    for (let i = 0; i < word.length; i++) {
      const c = word.charAt(i);
      const node = curr.next.get(c);
      if (!node) {
        curr.next.set(c, new Node());
      } else {
        curr = node;
      }
    }
    if (!curr.isWord) {
      curr.isWord = true;
      this.#size++;
    }
  }

  has(word: string): boolean {
    let curr = this.#root;
    for (let i = 0; i < word.length; i++) {
      const c = word.charAt(i);
      const node = curr.next.get(c);
      if (!node) {
        return false;
      } else {
        curr = node;
      }
    }
    return curr.isWord;
  }

  /**
   * 查看是否存在前缀
   * @param prefix
   */
  isPrefix(prefix: string): boolean {
    let curr = this.#root;
    for (let i = 0; i < prefix.length; i++) {
      const c = prefix.charAt(i);
      const node = curr.next.get(c);
      if (!node) {
        return false;
      } else {
        curr = node;
      }
    }
    return true;
  }

}
