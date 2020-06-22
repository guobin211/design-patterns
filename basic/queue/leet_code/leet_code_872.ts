// 岛屿数量
// 输入:
// 11000
// 11000
// 00100
// 00011
// 输出: 3
// 解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。
function numIslands(grid: string[][]): number {
  let res = 0;
  if (grid.length === 0) {
    return 0;
  }
  const row = grid.length;
  const col = grid[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === "1") {
        def(grid, i, j, row, col);
        res++;
      }
    }
  }

  function def(
    grid: string[][],
    i: number,
    j: number,
    row: number,
    col: number,
  ) {
    if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] === "0") {
      return;
    }
    grid[i][j] = "0";
    def(grid, i + 1, j, row, col);
    def(grid, i, j + 1, row, col);
    def(grid, i - 1, j, row, col);
    def(grid, i, j - 1, row, col);
  }

  return res;
}

const data = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
console.log(numIslands(data));
