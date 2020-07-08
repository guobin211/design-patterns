/**
 * FacadePatterns.ts
 * @Date 2020-06-19
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */
interface IFacade {
  sendAll(msg: string): void;
}

abstract class BaseRoom {
  abstract send(msg: string): void;
}

class RoomA extends BaseRoom {
  send(msg: string) {
    console.log("RoomA send message: " + msg);
  }
}

class RoomB extends BaseRoom {
  send(msg: string) {
    console.log("RoomA send message: " + msg);
  }
}

class FacadePatterns implements IFacade {
  private _rooms: BaseRoom[] = [];

  addRoom(r: BaseRoom): FacadePatterns {
    this._rooms.push(r);
    return this;
  }

  deleteRoom(r: BaseRoom): FacadePatterns {
    const index = this._rooms.findIndex((el) => el === r);
    if (index >= 0) {
      this._rooms.splice(index, 1);
    }
    return this;
  }

  sendAll(msg: string): void {
    for (const room of this._rooms) {
      room.send(msg);
    }
  }
}
const a = new RoomA();
const facadePatterns = new FacadePatterns().addRoom(a).addRoom(new RoomB());
facadePatterns.sendAll(
  "Hello Everyone",
);

facadePatterns.deleteRoom(a);
facadePatterns.sendAll(
  "Hello B",
);
