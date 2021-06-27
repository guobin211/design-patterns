/**
 * DyArray.class.js es5 Array
 * @Date 2020-06-21
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
function DyArray(length) {
  "use strict";
  this.length = 0;
  this.__proto__= DyArray.prototype;
  this.data = Object.create(null);
  if (Number(length) >= 0) {
    this.length = length;
  }
}

DyArray.isArray = function (arr) {
  if (arr) {
    return arr.__proto__ === this.prototype;
  }
  return false;
};

DyArray.prototype.get = function (index) {
  return this.data[index];
};

DyArray.prototype.set = function (index, value) {
  if (index < 0 || index >= this.length) {
    throw new RangeError("index is out of length");
  }
  this.data[index] = value;
};

DyArray.prototype.toString = function () {
  let res = "[";
  for (let i = 0; i < this.length; i++) {
    res += this.data[i];
    if (i < this.length - 1) {
      res += ", ";
    }
  }
  res += "]";
  return res;
};

DyArray.prototype.concat = function (arr) {
  if (!arr || !!arr.isArray()) {
    throw new TypeError("arr must be DyArray");
  }
  const size = this.length + arr.length;
  const res = new DyArray();
  for (let i = 0; i < size; i++) {
    if (i < this.length) {
      res.push(this.data[i]);
    } else {
      res.push(arr.get(i - this.length));
    }
  }
  return res;
};

DyArray.prototype.every = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this.data[i])) {
      return false;
    }
  }
  return true;
};

DyArray.prototype.push = function (e) {
  this.data[this.length] = e;
  this.length++;
  return this;
};

DyArray.prototype.fill = function (value, start, end) {
  if (start < 0 || start > end) {
    throw new RangeError("start must <= end and >=0 ");
  }
  if (end > this.length) {
    end = this.length;
  }
  for (let i = start; i < end; i++) {
    this.data[i] = value;
  }
};

DyArray.prototype.filter = function (callbackFn) {
  const res = new DyArray();
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this.data[i])) {
      res.push(this.data[i]);
    }
  }
  return res;
};

DyArray.prototype.findIndex = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (this.data[i] === value) {
      return i;
    }
  }
  return -1;
};

DyArray.prototype.forEach = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    callbackFn(this.data[i]);
  }
};

DyArray.prototype.pop = function () {
  const res = this.data[this.length - 1];
  delete this.data[this.length - 1];
  this.length--;
  return res;
};

DyArray.prototype.shift = function () {
  const res = this.data[0];
  for (let i = 0; i < this.length - 1; i++) {
    this.data[i] = this.data[i + 1];
  }
  delete this.data[this.length - 1];
  this.length--;
  return res;
};

DyArray.prototype.unshift = function (value) {
  this.length++;
  for (let i = this.length - 1; i >= 0; i--) {
    if (i === 0) {
      this.data[i] = value;
    } else {
      this.data[i] = this.data[i - 1];
    }
  }
};

DyArray.prototype[Symbol.iterator] = function* () {
  let index = 0;
  const that = this;
  return {
    next() {
      let nextIndex = index++;
      if (nextIndex < that.data.length) {
        return { value: that.data[nextIndex], done: false };
      } else {
        return { value: that.data[nextIndex], done: true };
      }
    },
  };
};

DyArray.prototype[Symbol.toStringTag] = function () {
  return "[Object DyArray]";
};

module.exports = {
  DyArray,
};
