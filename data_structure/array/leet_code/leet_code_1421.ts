// 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。

{
  function getRow(rowIndex: number): number[] {
    const res = new Array(rowIndex + 1);
    let cur = 1;
    for (let i = 0; i < rowIndex + 1; i++) {
      res[i] = cur;
      cur = Math.ceil(cur * (rowIndex - 1) / (i + 1));
    }
    return res;
  }

  const res = getRow(3);
  console.log(res);
}
