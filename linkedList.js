class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(elem) {
    let node = new Node(elem);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  prepend(elem) {
    let node = new Node(elem);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  find(elem) {
    let current = this.head;
    while (current !== null) {
      if (current.data === elem) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  toArray() {
    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }

  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error(`Not iterable!`);
    }
    let newLinkedList = new LinkedList();
    for (let e of iterable) {
      let newValue = new Node(e);
      if (!newLinkedList.head) {
        newLinkedList.head = newValue;
        newLinkedList.tail = newLinkedList.head;
      }
      newLinkedList.tail.next = newValue;
      newLinkedList.tail = newValue;
    }
    return newLinkedList;
  }
}
