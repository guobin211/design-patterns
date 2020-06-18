/**
 *  Prototype.ts 原型链
 * @Date 2020-06-18
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
Array.prototype.swap = function (l, r) {
  if (l === r) {
    return;
  }
  if (l >= 0 && l < this.length && r >= 0 && r < this.length) {
    const temp = this[r];
    this[r] = this[l];
    this[l] = temp;
  }
};

const arr = [1, 2, 3, 4];
arr.swap(2,3);
console.log(arr);
