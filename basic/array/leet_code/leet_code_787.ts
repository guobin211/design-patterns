/**
 * leet_code_787.ts
 * @Date 2020-06-22
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */

function removeElement(nums: number[], val: number): number {
  let index = 0;
  for (; index < nums.length;) {
    if (nums[index] === val) {
      nums.splice(index, 1);
    } else {
      index += 1;
    }
  }
  return nums.length;
}

{
  const data = [3, 2, 2, 3];
  console.log(removeElement(data, 2));
  const data1 = [0, 1, 2, 2, 3, 0, 4, 2];
  console.log(removeElement(data1, 2));
}
