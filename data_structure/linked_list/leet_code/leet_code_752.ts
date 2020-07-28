// 移除链表元素
// 删除链表中等于给定值 val 的所有节点。
//
// 示例:
//
// 输入: 1->2->6->3->4->5->6, val = 6
// 输出: 1->2->3->4->5

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const simple = new ListNode(0);
  simple.next = head;
  let prev = simple;
  let current = head;
  while (current !== null) {
    if (current.val === val) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }
  return simple.next;
}
