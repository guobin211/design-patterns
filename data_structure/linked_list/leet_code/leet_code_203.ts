/**
 * leet_code_203.ts
 * @Date 2020-06-22
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */

interface ListNode {
  val: number;
  next: ListNode | null;
}

function removeElements(val: number, head: ListNode | null): any {
  if (head === null) {
    return head;
  }
  head.next = removeElements(val, head.next);
  return head.val === val ? head.next : head;
}
