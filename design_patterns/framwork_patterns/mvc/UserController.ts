/**
 * UserController.ts
 * @Date 2020-06-19
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
import { UserView } from "./UserView.ts";
import { UserModel } from "./UserModel.ts";

export class UserController {
  async getUserList(): Promise<UserView[]> {
    const models = [
      UserModel.from("Jack"),
      UserModel.from("Tom"),
      UserModel.from("Mary"),
    ];
    const res: UserView[] = [];
    for (const model of models) {
      res.push(new UserView(model));
    }
    return Promise.resolve(res);
  }

  async getUser() {
    const model = new UserModel("Jack", 22);
    return Promise.resolve(new UserView(model));
  }
}

const userController = new UserController();
userController.getUserList().then((res) => res.forEach((el) => el.render()));
