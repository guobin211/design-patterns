/**
 * leet_code_203.ts
 * @Date 2020-06-22
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */

function sum(arr: number[]): number {
  function _sum(_arr: number[], l: number): number {
    if (l === _arr.length) {
      return 0;
    } else {
      return _arr[l] + _sum(arr, l + 1);
    }
  }

  return _sum(arr, 0);
}
