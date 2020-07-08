/**
 * queue_and_bfs_874.ts
 * @Date 2020-06-21
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */

// 输入: n = 13
// 输出: 2
// 解释: 13 = 4 + 9
function numSquares(n: number): number {
  let count = 0;
  if (Math.sqrt(n) % 1 === 0) {
    count++;
    return count;
  } else {
    for (let i = 1; i < n / 2; i++) {
      if (Math.sqrt(n) % 1 === 0 && Math.sqrt(n - 1) % 1 === 0) {
        count++;
        return count;
      }
    }
  }

  function isInt(n: number) {
    return !isNaN(n) && n % 1 === 0;
  }

  return count;
}
