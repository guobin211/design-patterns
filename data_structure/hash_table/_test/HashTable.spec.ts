/**
 * HashTable.spec.ts
 * @author GuoBin 2020-06-24
 */
import { BaseHash } from "../_base/BaseHash.ts";
import { hash } from "../_impl/hash.ts";
import { HashTable } from "../_impl/HashTable.ts";

class Person extends BaseHash {
  constructor(public name: string, public age: number, public sex: string) {
    super();
  }

  hashCode(): number {
    return hash(this);
  }
}

function testHashTable() {
  const count = 16;
  const persons: Person[] = [];
  const hashTable = new HashTable<Person, Person>(count);
  for (let i = 0; i < count; i++) {
    const person = new Person("JACK" + i, i, i % 2 === 0 ? "Man" : "Women");
    persons.push(person);
    hashTable.add(person, person);
  }
  console.log(persons.length === hashTable.size);
  const p = persons[15];
  const t = hashTable.get(p);
  console.log(p, t);
}

testHashTable();
