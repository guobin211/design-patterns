const state: Record<string | number, unknown> = {};
let key = 0;

const input = function (value: object | string | number, _key?: number) {
  if (_key) {
    if (state[_key] === value) {
      return;
    } else {
      state[_key] = value;
      changeNotification();
    }
  }
  state[key++] = value;
};

const changeNotification = function () {
  for (const [key, val] of Object.entries(state)) {
    console.log(`${key}: ${val}`);
  }
};

for (let i = 0; i < 10; i++) {
  input("https");
}
input("changed", 1);
