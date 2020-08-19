const data: any = {
  name: "define data"
}

const proxyData = new Proxy(data, {
  defineProperty(target: { name: string }, p: PropertyKey, attributes: PropertyDescriptor): boolean {
    if (p === "name") {
      console.warn("PropertyKey name cannot be defined")
      return false;
    }
    Object.defineProperty(target, p, attributes);
    return true;
  },
  has(target: { name: string }, p: PropertyKey): boolean {
    return p in target;
  },
  // get(target: { name: string }, p: PropertyKey, receiver: any): any {
  //   // console.log(receiver);
  //   return "target.name"
  // },
  // set(target: { name: string }, p: PropertyKey, value: any, receiver: any): boolean {
  //   console.log(receiver);
  //   (target as any)[p] = value;
  //   return true;
  // }
})

console.log(proxyData.hasOwnProperty("name"));
Object.defineProperty(data, "age", { value: 22 });
console.log(proxyData);
console.log(data);
