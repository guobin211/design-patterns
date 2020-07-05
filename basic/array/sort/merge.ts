import { SortHelper } from "./SortHelper.ts";

/**
 * merge.ts 归并排序
 * O(N)LogN
 * @author GuoBin 2020-07-05
 */

export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(arr1: number[], arr2: number[]): number[] {
  const res: number[] = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      res.push(arr1.shift()!);
    } else {
      res.push(arr2.shift()!);
    }
  }
  return res.concat(arr1.slice().concat(arr2.slice()));
}

const arr = SortHelper.randomArray(3, 0, 10);
console.log(arr);
const res = mergeSort(arr);
console.log(res);
