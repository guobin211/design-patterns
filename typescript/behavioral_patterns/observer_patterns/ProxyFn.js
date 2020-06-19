/**
 * ProxyFn.js
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
