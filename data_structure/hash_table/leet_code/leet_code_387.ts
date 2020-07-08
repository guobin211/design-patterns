/**
 * leet_code_387.ts
 * @author GuoBin 2020-06-24
 */

function firstUniqChar(s: string): number {
  const hash: any = {};
  const result: Map<string, number> = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
      hash[s[i]] = 1;
      result.set(s[i], i);
    } else {
      result.delete(s[i]);
    }
  }
  if (result.size == 0) {
    return -1;
  }
  return result.values().next().value;
}
