/**
 * index.js
 * @Date 2020-06-19
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
(function () {
  const form = {
    username: ''
  }
  function initListener() {
    let _value = form.username;
    const input = document.getElementById("username");
    const out = document.getElementById("out");
    const btn = document.getElementsByTagName("button")[0];

    Object.defineProperty(form, 'username', {
      get() {
        return _value;
      },
      set(v) {
        _value = v;
        notify();
      }
    })

    btn.addEventListener('click', function (e) {
      form.username = Math.random() * 100;
    }, true);

    input.oninput = function (val) {
      form.username = val.target.value;
    }

    function notify() {
      input.value = form.username;
      out.value = form.username;
    }
  }
  initListener();
})();
