/**
 * leet_code_1417.ts
 * @Date 2020-06-22
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }
  let ans = strs[0];
  for (let i = 0; i < strs.length; i++) {
    let j = 0;
    for (; j < ans.length; j++) {
      if (ans[j] !== strs[i][j]) {
        break;
      }
    }
    ans = ans.substr(0, j);
    if (ans === "") {
      return "";
    }
  }
  return ans;
}

{
  const data1 = ["flower", "flow", "flight"];
  const data2 = ["dog", "racecar", "car"];
  console.log(longestCommonPrefix(data1));
  console.log(longestCommonPrefix(data2));
}
