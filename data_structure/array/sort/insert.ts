/**
 * insert.ts 插入排序 第二层循环可以提前结束
 * On2
 * @author GuoBin 2020-07-05
 */
import { SortHelper } from "./SortHelper.ts";
import { selectionSort } from "./selection.ts";

export function insertSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        SortHelper.swap(arr, j, j - 1);
      } else {
        break;
      }
    }
  }
}

const arr = SortHelper.randomArray(10, 0, 10);
insertSort(arr);
console.log(arr);
