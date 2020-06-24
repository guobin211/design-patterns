/**
 * MaxHeap.ts
 * @author GuoBin 2020-06-24
 */
interface MaxHeapConstructor<E> {
  array?: E[];
  capacity?: number;
}

/**
 * 获取节点的父节点的索引
 * @param index
 */
function $parent(index: number): number {
  if (index === 0) {
    throw new Error("index 0 is root");
  }
  return (index - 1) / 2;
}

/**
 * 获取节点的左child的索引
 * @param index
 */
function $leftChild(index: number): number {
  return index * 2 + 1;
}

/**
 * 获取节点的右child的索引
 * @param index
 */
function $rightChild(index: number): number {
  return index * 2 + 2;
}

export class MaxHeap<E> {
  readonly #data: E[];
  readonly #capacity?: number;

  get size() {
    return this.#data.length;
  }

  constructor(options?: MaxHeapConstructor<E>) {
    if (options?.capacity) {
      this.#capacity = options.capacity >= 2 ? options.capacity : 2;
    }
    if (options?.array) {
      this.#data = new Array(...options.array);
      for (let i = $parent(this.size - 1); i >= 0; i--) {
        this.$siftDown(i);
      }
    } else {
      this.#data = [];
    }
  }

  isEmpty() {
    return this.#data.length === 0;
  }

  add(e: E) {
    if (this.size === this.#capacity) {
      console.warn("MaxHeap is full!");
    }
    this.#data.push(e);
    this.$siftUp(this.size - 1);
  }

  /**
   * 上浮操作, 将子节点上移动到 >= parent的位子
   * @param index
   */
  private $siftUp(index: number): void {
    let parIndex = $parent(index);
    while (index > 0 && this.#data[parIndex] < this.#data[index]) {
      const temp = this.#data[index];
      parIndex = $parent(index);
      this.#data[index] = this.#data[parIndex];
      this.#data[parIndex] = temp;
      index = parIndex;
    }
  }

  /**
   * 移除最大元素
   */
  removeMaxElement(): E {
    const res = this.findMax();
    const last = this.#data[this.size - 1];
    this.#data.splice(0, 1, last);
    this.#data.splice(this.size - 1, 1);
    this.$siftDown(0);
    return res;
  }

  /**
   * 查找最大元素
   */
  findMax(): E {
    if (this.isEmpty()) {
      throw new Error("empty heap!");
    }
    return this.#data[0];
  }

  private $siftDown(index: number) {
    while ($leftChild(index) < this.size) {
      let j = $leftChild(index);
      if (j + 1 < this.size && this.#data[j + 1] > this.#data[j]) {
        j = $rightChild(index);
      }
      if (this.#data[index] >= this.#data[j]) {
        break;
      }
      this.$swap(index, j);
      index = j;
    }
  }

  private $swap(i: number, j: number): void {
    const temp = this.#data[i];
    this.#data[i] = this.#data[j];
    this.#data[j] = temp;
  }

  /**
   * 替换堆定元素
   * @param e
   */
  replace(e: E): E {
    const res = this.findMax();
    this.#data[0] = e;
    this.$siftDown(0);
    return res;
  }
}
