import Node from "./Node.js";

export default class LinkedList {
  /* Constructor  */
  constructor() {
    this.head = null;
  }
  /* Adding to Head */
  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead !== null) {
      this.head.setNextNode(currentHead);
    }
  }
  /* Adding to Tail */
  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }
  /* Removing the Head */
  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  /* Printing */
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

const List = new LinkedList();
List.addToHead("1 head");
List.addToTail("1 tail");
List.addToTail("2 tail");
List.addToHead("2 head");
// List.printList();
