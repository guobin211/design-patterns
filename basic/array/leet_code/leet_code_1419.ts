/**
 * leet_code_1419.ts
 * @Date 2020-06-22
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
//
// 翻转字符串里的单词
// 输入: "  hello world!  "
// 输出: "world! hello"
// 解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括

function reverseWords(s: string): string {
  const arr = s.split(" ");
  arr.forEach((s) => {
    s.trim();
  });
  arr.reverse();
  console.log(arr);
  return arr.filter((s) => s.length !== 0).join(" ");
}

{
  const data = "  hello world!  ";
  console.log(reverseWords(data));
}
