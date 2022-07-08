class Stack {
  constructor(capacity = 10) {
    if (typeof capacity !== 'number') {
      throw new Error('Capacity of stack is not a number!');
    }
    this.capacity = capacity;
    this.elements = [];
    this.length = 0;
  }

  push(elem) {
    if (this.length === this.capacity) {
      throw new Error('Stack overflow!');
    }
    this.elements[this.length] = elem;
    this.length++;
  }
  pop() {
    if (!this.length) {
      throw new Error('Stack is empty!!!');
    }
    this.length--;
    this.deleted = this.elements[this.length];
    delete this.elements[this.length];
    return this.deleted;
  }
  peek() {
    if (!this.length) {
      return null;
    }
    return this.elements[this.length - 1];
  }

  isEmpty() {
    return !this.length;
  }

  toArray() {
    let result = [];
    let copy = Object.assign(new Stack(), structuredClone(this));
    while (copy.peek()) {
      result.push(copy.pop());
    }
    return result;
  }

  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error(`Not iterable!`);
    }
    let newStack = new Stack();
    for (let e of iterable) {
      newStack.push(e);
    }
    return newStack;
  }
}

module.exports = { Stack };
