// 给定一个二叉树，找出其最大深度。
//
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
//
// 说明: 叶子节点是指没有子节点的节点。

class TreeNode {
  val: number | undefined;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val;
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

function maxDepth(root: TreeNode | null): number {
  return root ? Math.max(maxDepth(root!.left), maxDepth(root!.right)) + 1 : 0;
  // if (root === null) {
  //   return 0;
  // } else {
  //   if (root.left === null && !root.right === null) {
  //     return 1;
  //   } else {
  //     return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  //   }
  // }
}
