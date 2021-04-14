/**
 * index
 *
 * @author michaelbguo@tencent.com
 * @time 2021/4/14 14:03
 * @version 0.0.1
 */
const _window = window as any;

function asyncTask() {
  fetch('/data.json').then(res => res.json()).then(console.log);
}

function init() {
  _window.document.body.innerText = 'dom init'
}

function bootstrap() {
  init();
  _window.requestAnimationFrame(() => {
    asyncTask();
  })
}

bootstrap();
