/**
 * hash.ts
 * @author GuoBin 2020-06-24
 */

export function hash(obj: any): number {
  const type = typeof obj;
  switch (type) {
    case "bigint":
      return JSHash(obj.toString(10));
    case "string":
      return JSHash(obj);
    case "number":
      return JSHash(obj.toString(10));
    case "object":
      if (obj === null) {
        throw new Error(`${obj} not support hash`);
      } else {
        return JSHash(obj.toString());
      }
    default:
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
