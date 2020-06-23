/**
 * leet_code_1420.ts
 * @Date 2020-06-22
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */

// 输入: haystack = "hello", needle = "ll"
// 输出: 2
function strStr(haystack: string, needle: string): number {
  if (needle.length > haystack.length) {
    return -1;
  }
  if (haystack === needle) {
    return 0;
  }
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substr(i, needle.length) === needle) {
      return i;
    }
  }
  return -1;
}

{
  const haystack = "", needle = "";
  console.log(strStr(haystack, needle));
}
