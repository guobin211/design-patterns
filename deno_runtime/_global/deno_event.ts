class Person implements EventListenerObject {
  constructor(public name = "jack", public age = 22) {}

  handleEvent(evt: Event): void | Promise<void> {
    return new Promise((resolve) => {
      console.log(evt);
      resolve();
    });
  }
}

const jack = new Person();

addEventListener("click", (e) => jack.handleEvent(e));

dispatchEvent(new Event("click"));
