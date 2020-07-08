/**
 * leet_code_1416.ts
 * @Date 2020-06-22
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */

function findDiagonalOrder(matrix: number[][]): number[] {
  if (matrix.length === 0) {
    return [];
  }
  if (matrix.length === 1) {
    return matrix[0];
  }
  const rows = matrix.length;
  const cols = matrix[0].length;
  const ret: number[] = [];
  let flag = true;
  for (let i = 0; i < rows + cols - 1; i++) {
    const pm = flag ? rows : cols;
    const pn = flag ? cols : rows;
    let x = i < pm ? i : pm - 1;
    let y = i - x;
    while (x >= 0 && y < pn) {
      ret.push(flag ? matrix[x][y] : matrix[y][x]);
      x--;
      y++;
    }
    flag = !flag;
  }
  return ret;
}

{
  const data: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  console.log(findDiagonalOrder(data));
}
