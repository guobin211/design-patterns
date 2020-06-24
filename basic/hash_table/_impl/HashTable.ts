/**
 * HashTable.ts
 * @author GuoBin 2020-06-24
 */
import { IHashTable } from "../_base/IHashTable.ts";
import { BaseHash } from "../_base/BaseHash.ts";

const UpperTol = 10;
const LowerTol = 2;

export class HashTable<K extends BaseHash, V> implements IHashTable<K, V> {
  #size: number;
  #capacity: number;
  #data: Map<K, V>[];

  get size() {
    return this.#size;
  }

  constructor(capacity: number = 7) {
    if (capacity > 7) {
      this.#capacity = capacity;
    } else {
      this.#capacity = 7;
    }
    this.#size = 0;
    this.#data = new Array(this.#capacity);
    for (let i = 0; i < this.#capacity; i++) {
      this.#data[i] = new Map();
    }
  }

  add(key: K, value: V): void {
    const map = this.#data[this.$hash(key)];
    if (map.has(key)) {
      map.set(key, value);
    } else {
      map.set(key, value);
      this.#size++;
      if (this.#size >= UpperTol * this.#capacity) {
        this.$resize(this.#capacity * 2);
      }
    }
  }

  delete(key: K): V | null {
    let res = null;
    const map = this.#data[this.$hash(key)];
    if (map) {
      const val = map.get(key);
      if (val !== undefined) {
        res = val;
        map.delete(key);
        this.#size--;
        if (this.#size < LowerTol * this.#capacity && this.#capacity > 7) {
          this.$resize(this.#capacity / 2);
        }
      }
    }
    return res;
  }

  get(key: K): V | null {
    const res = this.#data[this.$hash(key)].get(key);
    return res || null;
  }

  has(key: K): boolean {
    return this.#data[this.$hash(key)].has(key);
  }

  set(key: K, value: V): void {
    const map = this.#data[this.$hash(key)];
    if (map && map.has(key)) {
      map.set(key, value);
    } else {
      throw new RangeError(`key: ${key} doesn't exist!`);
    }
  }

  private $hash(key: K) {
    return (key.hashCode() & 0x7fffffff) % this.#capacity;
  }

  private $resize(capacity: number) {
    const newData: Map<K, V>[] = new Array(capacity);
    for (let i = 0; i < capacity; i++) {
      newData[i] = new Map();
    }
    for (let i = 0; i < this.#capacity; i++) {
      const old = this.#data[i];
      if (old) {
        for (const [k, v] of old.entries()) {
          newData[this.$hash(k)].set(k, v);
        }
      }
    }
    this.#capacity = capacity;
    this.#data = newData;
  }
}
