/**
 * leet_code_770.ts
 * @Date 2020-06-22
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
// 给定一个整数类型的数组 nums，请编写一个能够返回数组 “中心索引” 的方法。
function pivotIndex(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    if (sum(0, i - 1) === sum(i + 1, nums.length - 1)) {
      return i;
    }
  }

  function sum(start: number, end: number): number {
    let res = 0;
    for (let i = start; i <= end; i++) {
      res += nums[i];
    }
    return res;
  }

  return -1;
}
