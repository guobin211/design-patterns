import { path } from "../mod.ts";
console.log(path);
// 解析路径
const pkgPath = path.resolve("../../format.ts");
console.log(pkgPath);
// reader
const pkg = Deno.readFileSync(pkgPath);
// decoder编码
const decoder = new TextDecoder("utf-8");
// string
console.log(decoder.decode(pkg));
