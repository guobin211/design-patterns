/**
 * 性别枚举
 */
export enum Gender {
  MAN,
  WOMEN,
}

/**
 * 枚举格式化
 * @param g Gender
 */
function formatGender(g: Gender): string {
  switch (g) {
    case Gender.MAN:
      return "男性";
    case Gender.WOMEN:
      return "女性";
  }
}

export interface SelfIntroduction {
  introduce(): void;
}

/**
 * 实现接口
 */
export class Person implements SelfIntroduction {
  constructor(
    public name: string,
    public age: number,
    public readonly gender: Gender,
  ) {}

  public introduce(): void {
    console.log(
      `${this.name}，${formatGender(this.gender)}, age is ${this.age}.`,
    );
  }
}

/**
 * 继承
 */
export class Man extends Person implements SelfIntroduction {
  constructor(public name: string, public age: number) {
    super(name, age, Gender.MAN);
  }
}

export class WoMen extends Person implements SelfIntroduction {
  constructor(public name: string, public age: number) {
    super(name, age, Gender.WOMEN);
  }
}

new Man("jack", 30).introduce();
new WoMen("mary", 30).introduce();
