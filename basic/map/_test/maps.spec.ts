/**
 * maps.spec.ts
 * @Date 2020-06-23
 * @Author GuoBin<guobin201314@gmail.com>
 */
import { BSTMap } from "../_impl/BSTMap.ts";
import { LinkedListMap } from "../_impl/LinkedListMap.ts";

{
  const count = 1000000;
  // 原生Map性能 241ms/1.000.000
  const map1 = new Map<string, number>();
  const map2 = new BSTMap<string, number>();
  const map3 = new LinkedListMap<string, number>();

  function testMap1() {
    console.time("Map");
    for (let i = 0; i < count; i++) {
      map1.set(i + "", 1);
    }
    for (let i = 0; i < count; i++) {
      map1.delete(i + "");
    }
    console.timeEnd("Map");
  }

  function testMap2() {
    console.time("BSTMap");
    for (let i = 0; i < count; i++) {
      map2.add(i + "", 1);
    }
    for (let i = 0; i < count; i++) {
      map2.remove(i + "");
    }
    console.timeEnd("BSTMap");
  }

  function testMap3() {
    console.time("LinkedListMap");
    for (let i = 0; i < count; i++) {
      map3.add(i + "", 1);
    }
    for (let i = 0; i < count; i++) {
      map3.remove(i + "");
    }
    console.timeEnd("LinkedListMap");
  }

  testMap1();
  testMap2();
  // testMap3();
}
