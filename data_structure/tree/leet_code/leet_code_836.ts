// x 的平方根
function mySqrt(x: number): number {
  let res = -1, l = 0, r = x;
  while (l <= r) {
    let mid = l + Math.ceil((r - l) / 2);
    if (mid * mid <= x) {
      res = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return res;
}
