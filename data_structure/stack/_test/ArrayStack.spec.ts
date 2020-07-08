/**
 * ArrayStack.spec.ts
 * @Date 2020-06-21
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
import { ArrayStack } from "../_impl/ArrayStack.ts";

function isValid(s: string): boolean {
  const stack = new ArrayStack();
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (["(", "{", "["].includes(c)) {
      stack.push(c);
    } else {
      const top = stack.pop();
      if (c === "(" && top !== ")") {
        return false;
      }
      if (c === "{" && top !== "}") {
        return false;
      }
      if (c === "[" && top !== "]") {
        return false;
      }
    }
  }
  return stack.isEmpty;
}

console.log(isValid("{[()]]"));
console.log(isValid("{[(]]"));
