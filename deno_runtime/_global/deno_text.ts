const dataBase = "hello world!";
// Decodes a string of data which has been encoded using base-64 encoding
const asciiString = btoa(dataBase);
console.log(asciiString);

// Creates a base-64 ASCII encoded string from the input string
const blobString = atob(asciiString);
console.log(blobString);

fetch("https://www.baidu.com/").then((res) => res.text()).then((html) => {
  console.log(html);
}).catch((e) => {
  console.log(e);
});
