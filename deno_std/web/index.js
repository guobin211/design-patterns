(function() {
    class WaveButton {
        reactiveData = {
        };
        constructor(text){
            this.reactiveData.text = text;
        }
        get text() {
            return this.reactiveData.text;
        }
        set text(val) {
            this.reactiveData.text = val;
            manager.render();
        }
        render() {
            return `<button type="button"\n                      style="height: 36px;padding: 0 15px;margin: 0;border: 0;background: #099eda;color: #fff;font-size: 14px;font-weight: 100;outline: none;border-radius: 3px;">\n                  ${this.reactiveData.text}\n              </button>`;
        }
    }
    const dc = window.document;
    const app = dc.getElementById("app");
    const btn = new WaveButton("Submit");
    const manager = {
        el: app,
        component: btn,
        render: ()=>{
            app.innerHTML = btn.render();
        }
    };
    manager.render();
    setTimeout(()=>{
        btn.text = "Changed Button";
    }, 3000);
})();
