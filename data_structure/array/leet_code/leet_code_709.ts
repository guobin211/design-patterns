// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
//
// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
//
// 请找出其中最小的元素。
//
// 你可以假设数组中不存在重复元素。
//

function findMin(nums: number[]): number {
  let minIndex = 0;
  let maxIndex = nums.length - 1;

  while (minIndex < maxIndex) {
    const pivot = Math.trunc(minIndex + (maxIndex - minIndex) / 2);
    if (nums[pivot] < nums[maxIndex]) {
      maxIndex = pivot;
    } else if (nums[pivot] > nums[maxIndex]) {
      minIndex = pivot + 1;
    } else {
      maxIndex -= 1;
    }
  }

  return nums[minIndex];
}

const res = findMin([2, 3, 4, 5, 1]);
console.log(res);
