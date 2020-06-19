/**
 * DefinePropoty.js
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
