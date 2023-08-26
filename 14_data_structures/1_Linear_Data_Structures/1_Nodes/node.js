/* Node in JS */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  /* Node Methods: Set Next Node */
  setNextNode(newNext) {
    /* this.next = newNext; */
    /* Node Methods: Set Next Node Validation */
    if (newNext instanceof Node || newNext === null) {
      this.next = newNext;
    } else {
      throw new Error();
    }
  }

  /* Node Methods: Get Next Node */

  getNextNode() {
    return this.next;
  }
}

const firstNode = new Node("first");
const secondNode = new Node("second");
const thirdNode = new Node("third");

firstNode.setNextNode(secondNode);
secondNode.setNextNode(thirdNode);
console.log(firstNode.getNextNode());
console.log(secondNode.getNextNode());
console.log(thirdNode.getNextNode());
// console.log(firstNode);
// console.log(secondNode);
// console.log(thirdNode);
