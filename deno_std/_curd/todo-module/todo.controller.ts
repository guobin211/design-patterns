import { TodoService } from "./todo.service.ts";
import { TodoPipe } from "./todo.pipe.ts";

export class TodoController {
  constructor(private todoService: TodoService) {}

  async get() {
    return this.todoService.find();
  }

  async add(reqBody: object) {
    const todoModel = TodoPipe(reqBody);
    return this.todoService.add(todoModel);
  }

  async delete(reqId: string) {
    return this.todoService.delete(reqId);
  }
}
