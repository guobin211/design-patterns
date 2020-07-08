/**
 * hash.ts 计算对象hash值
 * @author GuoBin 2020-06-24
 */
export function hash(obj: any): number {
  const type = typeof obj;
  if (["bigint", "string", "number"].includes(type)) {
    return JSHash(obj.toString(10));
  } else if (type === "object" && obj !== null) {
    return JSHash(JSON.stringify(obj));
  } else {
    throw new Error(`${obj} not support hash`);
  }
}

function JSHash(str: string): number {
  let hash = 1315423911;
  for (let i = 0; i < str.length; i++) {
    hash ^= ((hash << 5) + str.charCodeAt(i) + (hash >> 2));
  }
  return hash;
}
