// 工作路径
const workPath = Deno.cwd();

// 读取文件
function read_self() {
  const text = Deno.readTextFileSync(workPath + "/deno_std/read_write.ts");
  const uint8Array = Deno.readFileSync(workPath + "/deno_std/read_write.ts");
  console.log(text);
  console.log(uint8Array);
}

// 写入文件
function write_text(str: string) {
  Deno.writeTextFileSync(workPath + "/deno_std/demo.local.txt", str);
}

read_self();
write_text("hello deno");
