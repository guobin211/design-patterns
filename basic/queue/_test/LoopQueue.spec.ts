/**
* LoopQueue.spec.css
* @Date 2020-06-21
* @Author GuoBin<guobin201314@gmail.com>
* @Project design-patterns
*/
import { LoopQueue } from "../_impl/LoopQueue.ts"

const loopQueue = new LoopQueue<number>();
function testQueue() {
  for (let i = 0; i < 20; i++) {
    loopQueue.enqueue(i);
  }
  console.log(loopQueue.toString());
}

testQueue();
loopQueue.enqueue(10);
console.log(loopQueue.toString());
console.log(loopQueue.capacity);
console.log(loopQueue.dequeue());
console.log(loopQueue.capacity);
console.log(loopQueue.dequeue());
console.log(loopQueue.capacity);
