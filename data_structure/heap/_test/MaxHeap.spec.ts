/**
 * MaxHeap.spec.ts
 * @author GuoBin 2020-06-24
 */
import { MaxHeap } from "../_impl/MaxHeap.ts";

function testHeap() {
  const n = 1000000;
  const maxHeap = new MaxHeap<number>();
  for (let i = 0; i < n; i++) {
    maxHeap.add((Math.random() * 10) * i);
  }
  const arr: number[] = [];
  while (maxHeap.size > 0) {
    arr.push(maxHeap.removeMaxElement());
  }
  for (let i = 1; i < n; i++) {
    if (arr[i - 1] < arr[i]) {
      console.error("maxHeap error");
    }
  }
  const arr1: number[] = Array.from(
    [1, 11, 12, 2, 13, 14, 3, 15, 16, 4, 18, 175, 6, 7, 8, 9, 10],
  );
  const maxHeap1 = new MaxHeap({ array: arr1 });
}
