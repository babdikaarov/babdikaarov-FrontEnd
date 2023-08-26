import LinkedList from "./LinkedList.js";

export default class Stack {
  /* Stack size defined: defualt infinity */
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }
  /* Detect limits of stack */
  hasRoom() {
    return this.size < this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }
  /* peek */
  peek() {
    return this.stack.head.data;
  }
  /* push */
  push(value) {
    /* Stack overflow condition */
    if (this.hasRoom()) {
      this.stack.addToHead(value);
      this.size++;
    } else {
      /* Overflow detected */
      throw new Error("Stack is full.");
    }
  }

  /* pop */
  pop() {
    /* Stack underflow condition */
    if (this.size > 0) {
      const value = this.stack.removeHead();
      this.size--;
      return value;
    } else {
      /* underflow detected */
      console.log("Stack is empty");
    }
  }
}
