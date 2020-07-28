function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}

console.log(containsDuplicate([1, 1, 2, 3]));

function singleNumber(nums: number[]): number {
  let res = 0;
  // 任何数和 00 做异或运算，结果仍然是原来的数，即 a \oplus 0=aa⊕0=a。
  // 任何数和其自身做异或运算，结果是 00，即 a \oplus a=0a⊕a=0。
  // 异或运算满足交换律和结合律
  for (const num of nums) {
    res ^= num;
  }

  return res;
}

// 二分查找
function search(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1;
  let pivot;
  while (left <= right) {
    pivot = left + Math.ceil((right - left) / 2);
    if (nums[pivot] === target) {
      return pivot;
    }
    if (target < nums[pivot]) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    }
  }
  return -1;
}
