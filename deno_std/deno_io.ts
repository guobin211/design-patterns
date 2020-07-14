const {stdout, stdin, open, copy, args} = Deno;

const MAX_COUNT = 10;
let cin: string;
let out: string;
let wait = true;
let current = 0;

function countLog(proxy: any) {
  if (current > MAX_COUNT) {
    wait = false;
  }
  console.log(proxy);
  current++;
}

function main() {
  countLog("请输入名称: ");
  while (wait) {
    if (args.length > 0) {
      countLog(args);
    }
  }
}

main();
