/**
 * leet_code_349.ts
 * @Date 2020-06-23
 * @Author GuoBin<guobin201314@gmail.com>
 */

function intersection(nums1: number[], nums2: []): number[] {
  const set: Set<number> = new Set();
  for (const n of nums1) {
    set.add(n);
  }
  const arr: number[] = [];
  for (const n of nums2) {
    if (set.has(n)) {
      arr.push(n);
      set.delete(n);
    }
  }
  return arr;
}
