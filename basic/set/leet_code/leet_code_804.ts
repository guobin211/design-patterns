/**
 * leet_code_804.ts
 * @Date 2020-06-23
 * @Author GuoBin<guobin201314@gmail.com>
 */

// 唯一摩尔斯密码词
function uniqueMorseRepresentations(words: string[]): number {
  const base = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  const set: Set<string> = new Set();
  for (const word of words) {
    let res = "";
    for (let i = 0; i < word.length; i++) {
      res += word.charAt(i);
    }
    set.add(res);
  }
  return set.size;
}

{
  const words = ["gin", "zen", "gig", "msg"];
  console.log(uniqueMorseRepresentations(words));
}
