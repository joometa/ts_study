interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

// 무언가를 한단계 감쌀 경우 불변성으로 타입을 정의하는것이 좋음
type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private _size: number = 0; // 내부에서만 사용할 변수에는 _ 를 같이 붙여주곤 함
  private head?: StackNode;

  get size() {
    return this._size;
  }
  push(value: string) {
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): string {
    // null == undefined, null !== undefined
    if (this.head == null) {
      throw new Error("Stack is empty!");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl();
stack.push("A1");
stack.push("A2");
stack.push("A3");
stack.push("A4");
while (stack.size !== 0) {
  console.log(stack.pop());
}
