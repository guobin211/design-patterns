/**
 * UserView.ts
 * @Date 2020-06-19
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
import { UserModel } from "./UserModel.ts";

export class UserView {
  constructor(private model: UserModel) {}

  render() {
    const dom =
      `<div><h1>Name: ${this.model.name}</h1><span>Age: ${this.model.age}</span></div>`;
    console.log(dom);
    return dom;
  }
}
