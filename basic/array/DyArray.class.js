/**
 * DyArray.class.js
 * @Date 2020-06-21
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
function DyArray() {
  this.lenth = 0;
  this.data = Object.create(null);
}

DyArray.prototype.toString = function () {
  let res = "[";
  for (let i = 0; i < this.lenth; i++) {
    res += this.data[i];
    if (i < this.lenth - 1) {
      res += ", ";
    }
  }
  res += "]";
  return res;
};

DyArray.prototype.push = function (e) {
  this.data[this.lenth] = e;
  this.lenth++;
  return this;
};

DyArray.prototype[Symbol.iterator] = function* () {
  let index = 0;
  const that = this;
  return {
    next() {
      let nextIndex = index;
      index++;
      if (nextIndex < that.data.lenth) {
        return { value: that.data[nextIndex], done: false };
      } else {
        return { value: that.data[nextIndex], done: true };
      }
    },
  };
};

const arr = new DyArray();
arr.push(1).push(2).push(3);
console.log(arr.toString());
