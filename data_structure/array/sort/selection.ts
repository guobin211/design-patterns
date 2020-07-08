/**
 * selection.ts 选择排序 第二层循环n-i
 * On2
 * @author GuoBin 2020-07-05
 */
import { SortHelper } from "./SortHelper.ts";

export function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    // 选在最小的元素位置
    let minIndex = i, j = i + 1;
    for (; j < arr.length - 1; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        SortHelper.swap(arr, i, j);
      }
    }
  }
}

const arr = SortHelper.randomArray(10, 0 ,10);
selectionSort(arr);
console.log(arr);
