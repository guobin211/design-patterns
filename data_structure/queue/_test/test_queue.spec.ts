/**
 * test_queue.ts
 * @Date 2020-06-21
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
import { IQueue } from "../_base/IQueue.ts";
import { ArrayQueue } from "../_impl/ArrayQueue.ts";
import { LoopQueue } from "../_impl/LoopQueue.ts";
import { LinkListQueue } from "../../linked_list/_impl/LinkListQueue.ts";

export function testQueue(q: IQueue<number>, count: number, key: string) {
  console.time(key);
  for (let i = 0; i < count; i++) {
    q.enqueue(i);
  }
  for (let i = 0; i < count; i++) {
    q.dequeue();
  }
  console.timeEnd(key);
}

const count = 1000000;
// 415ms 数组队列push快, dequeue慢
const arrayQueue = new ArrayQueue<number>();
// testQueue(arrayQueue, count, "arrayQueue");
// 19ms 20倍的性能差距 循环队列增加和删除都快
const loopQueue = new LoopQueue<number>();
testQueue(loopQueue, count, "loopQueue");

// 链表队列比循环队列慢,比数组队列快
const linkListQueue = new LinkListQueue<number>();
testQueue(linkListQueue, count, "linkListQueue");
