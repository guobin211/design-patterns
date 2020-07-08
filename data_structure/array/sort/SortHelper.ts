/**
 * SortHelper.ts
 * @author GuoBin 2020-07-05
 */
export class SortHelper {
  static randomArray(n: number, min: number, max: number): number[] {
    console.assert(min < max);
    const res = new Array(n);
    for (let i = 0; i < n; i++) {
      res[i] = Math.random() * (max - min + 1) + min;
    }
    return res;
  }

  static isSortArray(arr: number[], descending = false) {
    for (let i = 1; i < arr.length; i++) {
      // 降序-从大到小
      if (descending) {
        if (arr[i] > arr[i - 1]) {
          console.warn("not reverse sort");
          return false;
        }
      } else {
        if (arr[i] < arr[i - 1]) {
          console.warn("not sort");
          return false;
        }
      }
    }
    return true;
  }

  static swap(arr: number[], i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

const arr = SortHelper.randomArray(100, 10, 100);
console.log(SortHelper.isSortArray(arr));
arr.sort();
console.log(SortHelper.isSortArray(arr));

