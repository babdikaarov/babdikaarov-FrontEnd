import DoublyLinkedList from "../DoublyLinkedList.js";

function removeByData(list, data) {
  let nodeToRemove;
  let currentNode = list.head;
  while (currentNode !== null) {
    if (currentNode.data === data) {
      nodeToRemove = currentNode;
      break;
    }
    currentNode = currentNode.getNextNode();
  }
  if (!nodeToRemove) {
    return null;
  }
  // Continue your .removeByData() method below:
  if (nodeToRemove === list.head) {
    list.removeHead();
  } else if (nodeToRemove === list.tail) {
    list.removeTail();
  } else {
    const nextNode = nodeToRemove.getNextNode();
    const previousNode = nodeToRemove.getPreviousNode();
    nextNode.setPreviousNode(previousNode);
    previousNode.setNextNode(nextNode);
  }
  return nodeToRemove;
}

const subway = new DoublyLinkedList();
subway.addToHead("TimesSquare");
subway.addToHead("GrandCentral");
subway.addToHead("CentralPark");
subway.printList();
subway.addToTail("PennStation");
subway.addToTail("WallStreet");
subway.addToTail("BrooklynBridge");
subway.printList();
subway.removeHead();
subway.removeTail();
subway.printList();
removeByData(subway, "TimesSquare");
subway.printList();
