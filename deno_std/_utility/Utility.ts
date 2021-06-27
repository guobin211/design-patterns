//
// 内置的类型转换工具
//
interface PageInfo {
  title: string;
  path?: string;
  description?: string;
}

// 类型
type PageType = "Home" | "About" | "Contact";

// 属性可选
type CanUndefined = Partial<PageInfo>;
// 属性只读
type ReadonlyProps = Readonly<PageInfo>;
// 组合记录类型和接口
const pages: Record<PageType, PageInfo> = {
  Home: {
    title: "主页",
  },
  About: {
    title: "关于",
  },
  Contact: {
    title: "联系",
  },
};
// 提取属性
type PageTitle = Pick<PageInfo, "title" | "path">;
const homePage: PageTitle = {
  title: "主页",
  path: "/home",
};
// 剔除属性
const ignoreHome: Omit<PageInfo, "title" | "description"> = {
  path: "/home",
};
// 排除类型 "Home"
type Home = Exclude<Page, "About" | "Contact">;
// 提取交集 "c"
type Mixed = Extract<"a" | "b" | "c", "c" | " d">;

declare function f1(): { a: number; b: string };

type T0 = Parameters<() => string>; // []
type T1 = Parameters<(s: string) => void>; // [string]
type T2 = ConstructorParameters<ErrorConstructor>; // [(string | undefined)?]
type T3 = ConstructorParameters<FunctionConstructor>; // string[]
type T4 = ReturnType<(<T extends U, U extends number[]>() => T)>; // number[]
type T5 = ReturnType<typeof f1>; // { a: number, b: string }

function toHex(this: Number) {
  return this.toString(16);
}

// ThisParameterType
function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}

// ThisType
type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

// mixin混合属性
function applyMixins(derivedCtor: any, constructs: any[]) {
  constructs.forEach((constructs) => {
    Object.getOwnPropertyNames(constructs.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(constructs.prototype, name) as any,
      );
    });
  });
}
// 合并对象
function extend<First extends Object, Second extends Object>(
  first: First,
  second: Second,
): First & Second {
  const result = {} as First & Second;
  for (const prop in first) {
    if (first.hasOwnProperty(prop)) {
      (result as First)[prop] = first[prop];
    }
  }
  for (const prop in second) {
    if (second.hasOwnProperty(prop)) {
      (result as Second)[prop] = second[prop];
    }
  }
  return result as First & Second;
}

export {}
