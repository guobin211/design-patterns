/**
 * leet_code_878.ts
 * @Date 2020-06-23
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */

// 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
//
// 有效字符串需满足：
//
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
function isValid(s: string): boolean {
  const left = ["(", "{", "["];
  const right = [")", "}", "]"];
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const el = s[i];
    if (left.includes(el)) {
      stack.push(el);
    }
    if (right.includes(el)) {
      if (stack[stack.length - 1] !== left[right.indexOf(el)]) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}
