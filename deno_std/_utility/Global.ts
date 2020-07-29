(function () {
  function printGlobalThis() {
    console.log("Nodejs is global");
    console.log("Browser is window");
    console.log("WebWorker is self");
    console.log("EcmaScript is globalThis");
    console.log("Deno is Deno");
  }

  printGlobalThis();
})();
