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

const BigName = new RegExp("^[A-Z][a-z]+,", "g");

console.log(BigName.test("Jack"));
console.log(BigName.test("tom"));
// 多个匹配
const res = BigName.exec("Jack, Tom, Mary");
console.log(res);
res?.forEach((value, index, array) => {
  console.log(value);
});
