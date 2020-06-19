interface IMainAction {
  run: (...args: string[]) => void;
}

class Main implements IMainAction {
  run(...args: string[]): void {
    console.log(args);
  }
}
const mainTask = new Main();
let name = "Hello";
mainTask.run(name);
name = "jack";
mainTask.run(name);
