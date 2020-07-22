/**
 * BST.spec.ts
 * @Date 2020-06-22
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
import { BSTree } from "../_impl/BST.ts";

{
  const bst = new BSTree(3);
  const arr = [1, 2, 4, 5];
  for (const n of arr) {
    bst.add(n);
  }
  console.log(bst.toString());

  // bst.preOrder()
  // bst.inOrder();
  // bst.postOrder();

  // bst.levelOrder();
  console.log(bst.includes(3));

  const count = 1000;
  for (let i = 0; i < count; i++) {
    bst.add(Math.ceil(Math.random() * count + 1));
  }
  console.log(bst.removeMin());
  console.log(bst.remove(2));
  const arr1: number[] = [];
  while (!bst.isEmpty()) {
    arr1.push(bst.removeMin());
  }
  console.log(arr1.length);
  console.log(arr1[0], arr1[arr1.length - 1]);
}
