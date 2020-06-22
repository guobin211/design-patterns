/**
 * leet_code_1415.ts
 * @Date 2020-06-22
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
/**
 Do not return anything, modify matrix in-place instead
 编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。
 */
function setZeroes(matrix: number[][]): void {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const rowState = new Array(rows);
  const colState = new Array(cols);
  // 找出要清理的行与列
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        rowState[i] = true;
        colState[j] = true;
      }
    }
  }
  // 清理行
  for (let i = 0; i < rows; i++) {
    if (rowState[i]) {
      for (let j = 0; j < cols; j++) {
        matrix[i][j] = 0;
      }
    }
  }
  // 清冽列
  for (let i = 0; i < cols; i++) {
    if (colState[i]) {
      for (let j = 0; j < rows; j++) {
        matrix[j][i] = 0;
      }
    }
  }
}
