/**
 * CommandPatterns.ts
 * @Date 2020-06-19
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
enum CommandEnum {
  Start,
  Stop,
  Reload,
}

interface ICommand {
  execute(ac: CommandEnum): void;
}

class Client {
  start() {
    console.log(`Client start`);
  }

  stop() {
    console.log(`Client stop`);
  }

  reload() {
    console.log(`Client reload`);
  }
}

class CommandPatterns implements ICommand {
  private _c = new Client();
  execute(ac: CommandEnum): void {
    switch (ac) {
      case CommandEnum.Start:
        this._c.start();
        return;
      case CommandEnum.Stop:
        this._c.stop();
        return;
      case CommandEnum.Reload:
        this._c.reload();
        return;
      default:
        return;
    }
  }
}

const command = new CommandPatterns();
command.execute(CommandEnum.Start);
