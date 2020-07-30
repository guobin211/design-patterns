import { TodoModel } from "./todo.model.ts";

export function TodoPipe(data: object): TodoModel {
  return data as TodoModel;
}
