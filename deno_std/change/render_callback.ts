interface Renderer {
  elements: Record<string, unknown>[];
  setAttribute(
    el: Record<string, unknown>,
    name: string,
    value: string,
  ): Renderer;
  mainTask(): void;
}

const renderer: Renderer = {
  elements: [],
  setAttribute(el: Record<string, unknown>, name: string, value: string) {
    if (this.elements.includes(el)) {
      for (const element of this.elements) {
        if (element === el) {
          element[name] = value;
        }
      }
    } else {
      el[name] = value;
      this.elements.push(el);
    }
    return this;
  },
  mainTask() {
    // 模拟浏览器requestAnimationFrame
    setInterval(() => {
      while (this.elements.length) {
        const el = this.elements.shift();
        console.log(el);
      }
    }, 16);
  },
};

const div1 = {
  text: "div1",
  color: "#000",
};

const div2 = {
  text: "div2",
  color: "#f9f",
};

renderer.mainTask();

renderer
  .setAttribute(div1, "color", "#ccc")
  .setAttribute(div1, "color", "#ddd")
  .setAttribute(div1, "color", "#eee");

renderer.setAttribute(div2, "color", "#ddd");
