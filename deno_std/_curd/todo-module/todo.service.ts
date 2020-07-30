import { TodoModel } from "./todo.model.ts";

export class TodoService {
  private readonly todos: TodoModel[];

  constructor() {
    this.todos = [];
  }

  async add(todo: TodoModel) {
    this.todos.push(todo);
  }

  async delete(id: string) {
    const index = this.todos.findIndex((t) => t._id === id);
    if (index >= 0) {
      this.todos.splice(index, 1);
    }
  }

  async find() {
    return this.todos;
  }
}
