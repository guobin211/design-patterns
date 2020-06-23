/**
 * leet_code_788.ts
 * @Date 2020-06-22
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
//
// 输入: [1,1,0,1,1,1]
// 输出: 3
// 解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
function findMaxConsecutiveOnes(nums: number[]): number {
  let ans = 0;
  let index = 0;
  let curr = 0;
  for (; index < nums.length; index++) {
    if (nums[index] === 1) {
      curr++;
    } else {
      ans = Math.max(ans, curr);
      curr = 0;
    }
  }
  return Math.max(ans, curr);
}

{
  const data = [1, 1, 0, 1, 1, 0, 1, 1, 1];
  console.time("time");
  console.log(findMaxConsecutiveOnes(data));
  console.timeEnd("time");
}
