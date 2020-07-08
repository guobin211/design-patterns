/**
 * leet_code_1412.ts
 * @Date 2020-06-22
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */

function searchInsert(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (target <= num) {
      return i;
    }
  }
  return nums.length;
}
