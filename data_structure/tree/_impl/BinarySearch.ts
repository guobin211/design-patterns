/**
 * 二分查找
 * @param nums T[]
 * @param target T
 */
function binarySearch<T>(nums: T[], target: T): number {
  if (nums.length === 0) {
    return -1;
  }

  let left = 0, right = nums.length - 1;
  while (left + 1 < right) {
    const mid = left + Math.ceil((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }
  }

  if (nums[left] === target) {
    return left;
  }
  if (nums[right] === target) {
    return right;
  }

  return -1;
}
