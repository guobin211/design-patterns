/**
 * leet_code_784.ts
 * @Date 2020-06-22
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */

//
//输入: [1,4,3,2]
//
// 输出: 4
// 解释: n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4)
function arrayPairSum(nums: number[]): number {
  const arr = nums.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < arr.length; i += 2) {
    ans += arr[i];
  }
  return ans;
}

{
  const data = [1, 4, 3, 2];
  console.log(arrayPairSum(data));
}
