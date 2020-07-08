/**
 * leet_code_789.ts
 * @Date 2020-06-22
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */

// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组，并返回其长度。如果不存在符合条件的连续子数组，返回 0
// 输入: s = 7, nums = [2,3,1,2,4,3]
// 输出: 2
// 解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
function minSubArrayLen(s: number, nums: number[]): number {
  const n = nums.length;
  let ans = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    while (sum >= s) {
      ans = Math.min(ans, i + 1 - left);
      sum -= nums[left++];
    }
  }
  return ans === Number.MAX_SAFE_INTEGER ? 0 : ans;
}

{
  const s = 7, nums = [2, 3, 1, 2, 4, 3, 7];
  console.log(minSubArrayLen(s, nums));
}
