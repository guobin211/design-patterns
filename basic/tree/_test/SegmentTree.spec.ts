/**
 * SegmentTree.ts
 * @author GuoBin 2020-06-24
 */
import { SegmentTree } from "../_impl/SegmentTree.ts";
import { IMerge } from "../_base/IMerge.ts";

class Merge implements IMerge<number> {
  merge(e1: number, e2: number): number {
    return e1 + e2;
  }
}

function testSegment() {
  const arr: number[] = [-1, -2, 1, 2, 4, 3, -5];
  const sg: SegmentTree<number> = new SegmentTree<number>(arr, new Merge());
  console.log(sg.toString());
  console.log(sg.query(1, 3));
}

testSegment();
