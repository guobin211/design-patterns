/**
 Do not return anything, modify matrix in-place instead.
 给定 matrix =
 [
 [ 5, 1, 9,11],
 [ 2, 4, 8,10],
 [13, 3, 6, 7],
 [15,14,12,16]
 ],

 原地旋转输入矩阵，使其变为:
 [
 [15,13, 2, 5],
 [14, 3, 4, 1],
 [12, 6, 8, 9],
 [16, 7,10,11]
 ]
 */
function rotate(matrix: number[][]): void {
  const n = matrix.length;
  // 先以对角线（左上-右下）为轴进行翻转
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  // 再对每一行以中点进行翻转
  const mid = n >> 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < mid; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = temp;
    }
  }
}

{
  const data: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  rotate(data);
  console.log(data);
}
