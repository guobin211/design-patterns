// @ts-ignore
import * as parse5 from "https://deno.land/x/parse5/parse5/lib/index.js";

function parseHtml(code: string) {
  return parse5.parse(code, {});
}

const buf = Deno.readFileSync("./source_code/index.html");
const decoder = new TextDecoder("utf-8");
const str = decoder.decode(buf);

console.log(str);
const node = parseHtml(str);

console.log(node);

function logNode(astNode: any) {
  for (const nodeElement of astNode.childNodes) {
    console.log(nodeElement);
    if (nodeElement.childNodes && nodeElement.childNodes.length !== 0) {
      logNode(nodeElement);
    }
  }
}

logNode(node);
