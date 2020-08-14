(function () {
  class WaveButton {
    private reactiveData: any = {};

    constructor(text: string) {
      this.reactiveData.text = text;
    }

    get text() {
      return this.reactiveData.text;
    }

    set text(val: string) {
      this.reactiveData.text = val;
      // 变更后重绘
      manager.render();
    }

    render() {
      return `<button type="button"
                      style="height: 36px;padding: 0 15px;margin: 0;border: 0;background: #099eda;color: #fff;font-size: 14px;font-weight: 100;outline: none;border-radius: 3px;">
                  ${this.reactiveData.text}
              </button>`;
    }
  }

  const dc = (window as any).document;
  const app = dc.getElementById("app");
  const btn = new WaveButton("Submit");
  // 模拟渲染器
  const manager = {
    el: app,
    component: btn,
    render: () => {
      app.innerHTML = btn.render();
    }
  };
  manager.render();

  setTimeout(() => {
    btn.text = "Changed Button";
  }, 3000);
})();
