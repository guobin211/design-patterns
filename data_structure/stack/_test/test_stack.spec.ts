/**
 * test_stack.spec.ts
 * @Date 2020-06-21
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
import { ArrayStack } from "../_impl/ArrayStack.ts";
import { LinkListStack } from "../../linked_list/_impl/LinkListStack.ts";
import { IStack } from "../_base/IStack.ts";

const arrayStack = new ArrayStack<number>();
const linkListStack = new LinkListStack<number>();
const count = 100;

function testTime(s: IStack<number>) {
  console.time("IStack");
  for (let i = 0; i < count; i++) {
    s.push(i);
  }
  console.timeEnd("IStack");
}

testTime(arrayStack);
testTime(linkListStack);
console.log(arrayStack.pop());
console.log(linkListStack.pop());
