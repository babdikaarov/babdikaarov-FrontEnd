import LinkedList from "../LinkedList.js";

/* Consider the following problem:
Create a function that returns the nth last element of a singly linked list. */

const testList = new LinkedList();
for (let i = 0; i < 10; i++) {
  testList.addToTail(i);
}

function arrayNthLast(list, n) {
  const linkedListArray = [];
  let currentNode = list.head;
  while (currentNode) {
    linkedListArray.push(currentNode);
    currentNode = currentNode.getNextNode();
  }
  console.log(linkedListArray);
  return linkedListArray[n];
}
// let nth = arrayNthLast(testList, 6);
// console.log(nth);

/* Consider this problem:

Find the middle node of a linked list. */
const findMiddle = (linkedList) => {
  let fast = linkedList.head;
  let slow = linkedList.head;

  // As long as the end of the list is not reached
  while (fast !== null) {
    // Move the fast pointer at least one step
    fast = fast.getNextNode();
    // If it isn't at the end of the list
    if (fast !== null) {
      // Move both pointers forward once
      fast = fast.getNextNode();
      slow = slow.getNextNode();
    }
  }
  // At this point, the slow pointer is in the middle
  return slow;
};

// let middle = findMiddle(testList);
// console.log(middle);

/* Half-Speed

Another equally valid solution is to move the fast pointer once with each loop iteration but only move the slow pointer every-other iteration. */

const findMiddleAlternate = (linkedList) => {
  let count = 0;
  let fast = linkedList.head;
  let slow = linkedList.head;

  while (fast !== null) {
    fast = fast.getNextNode();
    if (count % 2 !== 0) {
      slow = slow.getNextNode();
    }
    count++;
  }
  return slow;
};

// let middle = findMiddleAlternate(testList);
// console.log(middle);
