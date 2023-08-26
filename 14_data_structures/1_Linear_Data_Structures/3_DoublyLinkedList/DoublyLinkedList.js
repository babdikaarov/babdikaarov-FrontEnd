import Node from "./Node.js";

export default class DoublyLinkedList {
  // Create your constructor below:
  constructor() {
    this.head = null;
    this.tail = null;
  }
  /* Add To Head */
  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    this.head = newHead;
    if (!this.tail) {
      this.tail = newHead;
    }
  }

  /* Add To Tail */
  addToTail(data) {
    const newTail = new Node(data);
    const currentTail = this.tail;
    if (currentTail) {
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    }
    if (!this.head) {
      this.head = newTail;
    }
  }
  /* Remove Head */
  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    if (this.head) {
      this.head.setPreviousNode(null);
    }
    if (removedHead === this.tail) {
      this.removeTail();
    }
    return removedHead.data;
  }

  /* Remove Tail */
  removeTail() {
    const removedTail = this.tail;
    if (!removedTail) {
      return;
    } else {
      this.tail = this.tail.getPreviousNode();
    }
    if (this.tail) {
      this.tail.setNextNode(null);
    }
    if (removedTail === this.head) {
      this.removeHead();
    }
    return removedTail.data;
  }
  /* PrintList */
  printList() {
    let currentNode = this.head;
    let output = "<head> ";
    while (currentNode !== null) {
      output += currentNode.data + " ";
      currentNode = currentNode.getNextNode();
    }
    output += "<tail>";
    console.log(output);
  }
}
