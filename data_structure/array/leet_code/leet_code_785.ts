/**
 * leet_code_785.ts
 * @Date 2020-06-22
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
//
// 输入: numbers = [2, 7, 11, 15], target = 9
// 输出: [1,2]
// 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2
function twoSum(numbers: number[], target: number): number[] {
  let index1 = 0;
  let index2 = 0;
  for (; index1 < numbers.length; index1++) {
    index2 = index1 + 1;
    for (; index2 < numbers.length; index2++) {
      if (numbers[index1] + numbers[index2] === target) {
        return [index1 + 1, index2 + 1];
      }
    }
  }
  return [index1 + 1, index2 + 1];
}

{
  const data = [2, 7, 11, 15];
  const target = 13;
  console.log(twoSum(data, target));
}
