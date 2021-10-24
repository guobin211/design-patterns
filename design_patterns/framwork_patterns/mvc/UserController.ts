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
    return UserModel.getModels().then(models => models.map(model => new UserView(model)));
  }

  async getUser() {
    const model = new UserModel("Jack", 22);
    return Promise.resolve(new UserView(model));
  }
}

const userController = new UserController();
userController.getUserList().then((res) => res.forEach((el) => el.render()));
