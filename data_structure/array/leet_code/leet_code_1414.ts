/**
 * leet_code_1414.ts
 * @Date 2020-06-22
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */

function merge(intervals: number[][]): number[][] {
  const res: number[][] = [];
  let index: number = -1;
  // 先按照区间起始位置排序
  intervals.sort((a, b) => a[0] - b[0]);
  for (const el of intervals) {
    // 如果结果数组是空的，或者当前区间的起始位置 > 结果数组中最后区间的终止位置，
    // 则不合并，直接将当前区间加入结果数组。
    if (index === -1 || el[0] > res[index][1]) {
      res.push(el);
      index++;
    } else {
      res[index][1] = Math.max(res[index][1], el[1]);
    }
  }
  return res;
}

console.log(merge([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10], [11, 12]]));
