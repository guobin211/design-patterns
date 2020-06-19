/**
 * StatePatterns.ts
 * @Date 2020-06-19
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
enum StateEnum {
  Pending = "pending",
  Success = "success",
  Field = "field",
}

class StatePatterns {
  private _exe: Function[] = [];
  private _state: StateEnum = StateEnum.Pending;

  executor(fn: Function) {
    this._exe.push(fn);
    return this;
  }

  setState(s: StateEnum) {
    this._state = s;
    return this.next();
  }

  next(): StatePatterns {
    switch (this._state) {
      case StateEnum.Pending:
        return this;
      case StateEnum.Success:
        this._exe.forEach((fn) => fn("success"));
        return this;
      case StateEnum.Field:
        this._exe.forEach((fn) => fn("field"));
        return this;
      default:
        return this;
    }
  }
}
function LOG(S: string) {
  console.log(S);
}

const stateAction = new StatePatterns();
stateAction.executor(LOG);
stateAction.next().setState(StateEnum.Success).next().setState(
  StateEnum.Pending,
).executor(LOG).setState(StateEnum.Success);
