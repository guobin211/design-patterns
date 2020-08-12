interface TypeOrInterface {
  typeName: DataTypes;
  parsedType: (input: unknown) => DataTypes;
}

type DataTypes = "String" | "Number" | "Boolean" | "Object";

type parseFn = Pick<TypeOrInterface, "parsedType">;

/**
 * type: 类型,基于基本数据类型,可以联合和交叉
 * interface: 接口,可以继承和实现,优先使用接口,实现单一职责原则
 */
export class MapTypeParser implements TypeOrInterface {
  public typeName: DataTypes;

  constructor(type: DataTypes = "String") {
    this.typeName = type;
  }

  public parsedType(input: unknown): DataTypes {
    const t = typeof input;
    switch (t) {
      case "string":
        return "String";
      case "number":
        return "Number";
      case "boolean":
        return "Boolean";
      default:
        return "Object";
    }
  }
}

const res = new MapTypeParser().parsedType("Hello");
console.log(res);
