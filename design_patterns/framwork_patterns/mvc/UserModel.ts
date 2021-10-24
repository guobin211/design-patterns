/**
 * UserModel.ts
 * @Date 2020-06-19
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
export class UserModel {
  constructor(public name: string, public age: number) {}

  static from(name: string) {
    return new UserModel(name, parseInt(Math.random() * 10 + "3", 10));
  }

  static async getModels() {
    return [
      UserModel.from("Jack"),
      UserModel.from("Tom"),
      UserModel.from("Mary"),
    ]
  }
}
