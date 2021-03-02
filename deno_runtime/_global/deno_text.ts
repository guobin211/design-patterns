const data = "hello world!";
// Decodes a string of data which has been encoded using base-64 encoding
const a = btoa(data);
console.log(a);

// Creates a base-64 ASCII encoded string from the input string
const b = atob(a);
console.log(b);

fetch("https://www.baidu.com/").then((res) => res.text()).then((html) => {
  console.log(html);
}).catch((e) => {
  console.log(e);
});
