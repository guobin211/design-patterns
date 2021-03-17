/**
 * mod
 * design-patterns
 * @author michaelbguo@tencent.com
 * @time 2021/3/11 11:08
 * @version
 * deno run --import-map=./import_map.json ./mod.ts
 */
// @ts-ignore
import { deferred, delay } from "async";

const p = deferred<number>();
const delayedPromise = delay(1000);
await delayedPromise;

console.log("1000");
console.log(p);
p.resolve(2000);
console.log(p);

export { deferred };
