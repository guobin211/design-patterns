let times = 1;

function print() {
  console.log(`print: ${times++}`);
}

const timer = setTimeout(() => {
  console.log("setTimeout");
  print();
}, 0);

const interval = setInterval(() => {
  console.log("setInterval");
  print();
  if (times > 5) {
    Deno.exit(0);
  }
}, 2000);

// 微任务队列-优先执行
queueMicrotask(() => {
  console.log("queueMicrotask");
  print();
});
