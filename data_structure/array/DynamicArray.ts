/**
 * DynamicArray.ts
 * @Date 2020-06-21
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
class DynamicArray<E> {
  #length: number;
  #data: Map<number, E>;

  get length() {
    return this.#length;
  }

  get(index: number) {
    return this.#data.get(index);
  }

  set(index: number, e: E) {
    this.$checkIndex(index);
    this.#data.set(index, e);
  }

  constructor(private capacity: number = 100) {
    this.#length = 0;
    this.#data = new Map();
  }

  /**
   * 插入元素
   * @param index
   * @param e
   */
  insert(index: number, e: E) {
    this.$checkIndex(index);
    for (let i = this.length - 1; i >= this.length; i--) {
      this.#data.set(i + 1, this.#data.get(i)!);
    }
    this.#data.set(index, e);
    this.#length++;
  }

  push(e: E) {
    this.insert(this.length, e);
  }

  unshift(e: E) {
    this.insert(0, e);
  }

  /**
   * 移除元素
   * @param index
   */
  remove(index: number): E | undefined {
    this.$checkIndex(index);
    const res = this.#data.get(index);
    for (let i = index + 1; i < this.length; i++) {
      this.#data.set(i - 1, this.#data.get(i)!);
    }
    this.#length--;
    if (this.length < this.capacity / 2 && this.length > 200) {
      // 清理Map
      for (let i = this.capacity; i > this.length; i++) {
        this.#data.delete(i);
      }
      this.resize(this.capacity / 2);
    }
    return res;
  }

  shift() {
    return this.remove(0);
  }

  pop() {
    return this.remove(this.length);
  }

  /**
   * 查找索引
   * @param e
   */
  indexOf(e: any): number {
    for (let i = 0; i < this.length; i++) {
      if (this.#data.get(i) === e) {
        return i;
      }
    }
    return -1;
  }

  /**
   * 截取数据
   * @param start
   * @param end
   */
  slice(start: number, end: number = this.length): E[] {
    const res: E[] = [];
    this.$checkIndex(start);
    if (end > this.length) {
      end = this.length;
    }
    for (let i = start; i < end; i++) {
      res.push(this.#data.get(i)!);
    }
    return res;
  }

  /**
   * 修改替换数组元素
   * @param index
   * @param deleteCount
   * @param arr
   * Return 数组现在的长度
   */
  splice(index: number, deleteCount: number = 0, ...arr: E[]): number {
    this.$checkIndex(index);
    const endSize = this.length - deleteCount + arr.length;
    const offset = deleteCount - arr.length;
    if (offset > 0) {
      // 删除
      for (let i = index; i < endSize; i++) {
        const el = arr.shift();
        if (el) {
          this.#data.set(i, el);
        } else {
          this.#data.set(i, this.#data.get(i + offset)!);
        }
      }
    } else {
      // 增加
      for (let i = endSize; i >= index; i--) {
        if (i >= index + arr.length) {
          this.#data.set(i, this.#data.get(i + offset)!);
        } else {
          const el = arr.pop();
          if (el) {
            this.#data.set(i, el);
          }
        }
      }
    }

    if (this.length < endSize) {
      for (let i = endSize; i > this.length; i--) {
        this.#data.delete(i);
      }
    }
    this.#length = endSize;
    return endSize;
  }

  toString() {
    let res = "[ ";
    for (let i = 0; i < this.length; i++) {
      res += `${this.#data.get(i)}`;
      if (i !== this.length - 1) {
        res += ", ";
      }
    }
    res += " ]";
    return res;
  }

  /**
   * 迭代器
   */
  [Symbol.iterator]() {
    const that = this;
    let index = 0;
    return {
      next() {
        let nextIndex = index;
        index++;
        if (index <= that.length) {
          return { value: that.#data.get(nextIndex), done: false };
        } else {
          return { value: that.#data.get(nextIndex), done: true };
        }
      },
    };
  }

  private $checkIndex(index: number) {
    if (this.length === this.capacity) {
      this.resize(this.length * 2);
    }
    if (index < 0 || index > this.capacity) {
      throw new Error(
        `DynamicArray index must be:  0 <= index <= ${this.capacity}`,
      );
    }
  }

  private resize(size: number) {
    this.capacity = size;
  }
}

export default DynamicArray;
