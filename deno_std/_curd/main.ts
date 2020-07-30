import { TodoController } from "./todo-module";

async function run() {
  const todoController = new TodoController();

  await todoController.add({});

  await todoController.get();

  await todoController.delete("1");
}

run().then(() => {
  console.log("run start");
}).catch((e) => {
  console.log(e);
}).finally(() => {
  console.log("run finally");
});
