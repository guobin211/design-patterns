/**
 * leet_code_58.ts
 * @Date 2020-06-22
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */

// 打乱一个没有重复元素的数组
class Solution {
  private readonly data: number[];
  constructor(nums: number[]) {
    this.data = nums;
  }

  reset(): number[] {
    return this.data;
  }

  shuffle(): number[] {
    const res = [...this.data];
    for (let i = res.length - 1; i > 0; i--) {
      const select = parseInt(Math.random() * (i + 1) + "", 10);
      const temp = res[select];
      res[select] = res[i];
      res[i] = temp;
    }
    return res;
  }
}

const arr = [1, 2, 3, 4];

const solution = new Solution(arr);
console.log(solution.shuffle());
console.log(solution.reset());
console.log(solution.shuffle());
for (let i = 0; i < 10; i++) {
  console.log(solution.shuffle());
}
