/**
 * leet_code_59.ts
 * @Date 2020-06-22
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈
class MinStack {
  private readonly stackData: any[];
  private readonly stackMin: any[];

  constructor() {
    this.stackData = [];
    this.stackMin = [];
  }

  push(x: any): void {
    if (this.stackMin.length === 0) {
      this.stackMin.push(x);
    } else if (x <= this.getMin()) {
      this.stackMin.push(x);
    } else {
      const minEl = this.getMin();
      this.stackMin.push(minEl);
    }
    this.stackData.push(x);
  }

  pop(): void {
    if (this.stackData.length !== 0) {
      this.stackData.pop();
      this.stackData.pop();
    }
  }

  top(): any {
    return this.stackData[this.stackData.length - 1];
  }

  getMin(): any {
    if (this.stackMin.length !== 0) {
      return this.stackMin[this.stackMin.length - 1];
    }
  }
}

const data = [[], [-2], [0], [-3], [], [], [], []];
const action = ["push", "push", "push", "getMin", "pop", "top", "getMin"];
const minStack = new MinStack();
console.log(minStack.pop());
console.log(minStack.top());
console.log(minStack.getMin());
console.log([] < [-1]);
