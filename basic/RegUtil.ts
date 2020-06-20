/**
 * RegUtil.ts
 * @Date 2020-06-20
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
const reg = /[0-9]{2,}/g;

const source = "The number was 9.9997 but we rounded it off to 10.0.";
console.log(
  source.match(reg),
);

const regs = {
  phone: /^+?[\d\s]{3,}$/,
  int: /^-?\d+$/,
  email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/,
  visa: /^(4[0-9]{12}(?:[0-9]{3})?)*$/,
};
