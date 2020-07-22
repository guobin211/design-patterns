// 实现 pow(x, n) ，即计算 x 的 n 次幂函数。
function myPow(x: number, n: number): number {
  let N = n;
  return N > 0 ? quickMul(x, N) : 1.0 / quickMul(x, -N);

  function quickMul(x1: number, n1: number): number {
    let answer = 1.0;
    let start = x1;
    while (n1 > 0) {
      if (n1 % 2 === 1) {
        answer *= start;
      }
      start *= start;
      n1 /= 2;
    }
    return answer;
  }
}
