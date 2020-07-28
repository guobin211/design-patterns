/**
 * DefinePropoty.js
 * 问题1.删除或者增加对象属性无法监听到
 * 问题2.数组的变化无法监听到
 * 问题3.由于是使用递归遍历对象，使用 Object.defineProperty 劫持对象的属性，如果遍历的对象层级比较深，花的时间比较久，甚至有性能的问题
 * @Date 2020-06-19
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
function Watch(obj) {
  this._data = JSON.parse(JSON.stringify(obj.data || {}));
  console.log(this._data);
  Object.defineProperty(obj, "data", {
    enumerable: true,
    configurable: false,
    get: () => {
      return this._data;
    },
    set: (v) => {
      this._data = v;
      obj.render(this._data);
    },
  });
  obj.render(this._data);
}

const component = {
  id: "header",
  tag: "div",
  data: "标题",
  render: (data) => {
    console.log(`<div>${data}</div>`);
  },
};

const wc = new Watch(component);
component.data = "Hello";
