type Callback = () => void;

export class Component {
  data: Record<string, any>;

  constructor(data: Record<string, any>, render: () => string) {
    this.data = defineComponentData(data, render);
  }

  beforeUpdate(call: Callback) {
    call();
  }

  onMount(call: Callback) {
    call();
  }

  afterUpdate(call: Callback) {
    call();
  }
}

export interface ComponentProps {
  data: Record<string, any>;
  render: () => string;
}

export function defineComponentData(data: Record<string, any>, render: () => string): Record<string, any> {
  return new Proxy(data, {
    set(target: Record<string, any>, p: string | symbol, value: any, receiver: any): boolean {
      render();
      return true;
    }
  });
}

export function defineComponent(props: ComponentProps) {}
