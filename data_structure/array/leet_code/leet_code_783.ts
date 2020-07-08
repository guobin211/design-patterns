/**
 * leet_code_783.ts
 * @Date 2020-06-22
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
//  反转字符串
function reverseString(s: string[]): void {
  if (s.length <= 1) {
    return;
  }
  let i = 0, j = s.length - 1;
  while (i < s.length / 2) {
    const temp = s[j];
    s[j] = s[i];
    s[i] = temp;
    i++;
    j--;
  }
}

{
  const data = ["h", "e", "l", "l", "o", "a"];
  reverseString(data);
  console.log(data);
}
