/**
 * Trie.spec.ts
 * @author GuoBin 2020-06-24
 */
import { Trie } from "../_impl/Trie.ts";

function testTrie() {
  const words = ["hello", "word", "java", "kotlin", "swift"];
  const trie = new Trie();
  for (const word of words) {
    trie.add(word);
  }
  console.log(trie.size);
}

testTrie();
