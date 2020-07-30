export class TodoModel {
  constructor(
    public readonly _id: string,
    public title: string,
    public content: string,
    public completed: boolean,
  ) {
    this._id = "uuid" + new Date().getTime() + Math.random() * 10 +
      Math.random() * 100;
  }
}
