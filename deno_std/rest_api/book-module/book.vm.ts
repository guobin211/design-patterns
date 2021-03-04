import { BaseVm } from "./base.vm.ts";

export interface BookVm extends BaseVm {
  title: string;
  author: string;
}
