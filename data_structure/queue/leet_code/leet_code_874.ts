/**
 * queue_and_bfs_874.ts
 * @Date 2020-06-21
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */

// 输入: n = 13
// 输出: 2
// 解释: 13 = 4 + 9  完全平方数
function numSquares(n: number): number {
  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  let max_square_index = parseInt((Math.sqrt(n) + 1).toString());
  let square_nums = new Array(max_square_index);
  for (let i = 0; i < max_square_index; i++) {
    square_nums[i] = i * i;
  }
  for (let i = 0; i <= n ; i++) {
    for (let j = 1; j < max_square_index; j++) {
      if (i < square_nums[j]) {
        break;
      }
      dp[i] = Math.min(dp[i], dp[i - square_nums[j]] + 1);
    }
  }
  return dp[n];
}

console.log(numSquares(12));
console.log(numSquares(13));
