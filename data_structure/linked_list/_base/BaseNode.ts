/**
 * BaseNode.ts
 * @Date 2020-06-21
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project design-patterns
 */

export abstract class BaseNode<E> {
  abstract node: E | undefined;
  abstract next: BaseNode<E> | undefined;
}

export abstract class BaseDoubleNode<E> {
  abstract node: E | undefined;
  abstract left: BaseNode<E> | undefined;
  abstract right: BaseNode<E> | undefined;
}
