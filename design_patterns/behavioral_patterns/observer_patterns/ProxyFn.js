/**
 * ProxyFn.js
 * 用于定义基本操作的自定义行为（如属性查找、赋值、枚举、函数调用等）代理整个对象,解决DefinePropoty的问题
 * @Date 2020-06-19
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
const ProxyFn = {
  get: function (obj, prop) {
    return prop in obj ? obj[prop] : "empty";
  },
  set: function (obj, prop, value) {
    if (obj.hasOwnProperty(prop)) {
      obj[prop] = value;
    }
    if (typeof obj.render === "function") {
      obj.render(obj.data);
    }
  },
};

const source = {
  data: "hello proxy",
  render: (data) => {
    console.log(`<div>${data}</div>`);
  },
};

const proxy = new Proxy(source, ProxyFn);
proxy.data = "changed";
proxy.data = "changed2";
