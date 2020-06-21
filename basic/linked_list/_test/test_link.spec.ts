/**
 * test_link.test.ts
 * @Date 2020-06-21
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
import { SimpleLinkList } from "../_impl/SimpleLinkList.ts";

const linkList = new SimpleLinkList<number>();
for (let i = 0; i < 5 ; i++) {
  linkList.addFirst(i);
  console.log(linkList.toString());
}
for (let i = 0; i < 5 ; i++) {
  linkList.set(i , i);
}
console.log(linkList.toString());

linkList.removeFirst();
console.log(linkList.toString());
linkList.removeFirst();
console.log(linkList.toString());
linkList.removeFirst();
console.log(linkList.toString());
linkList.removeFirst();
console.log(linkList.toString());
linkList.removeFirst();
console.log(linkList.toString());
