function read_self() {
  const text = Deno.readTextFileSync("read_write.ts");
  const uint8Array = Deno.readFileSync("read_write.ts");
  console.log(text);
  console.log(uint8Array);
}

function write_text(str: string) {
  Deno.writeTextFileSync("demo.txt", str);
}

read_self();
write_text("hello deno");
