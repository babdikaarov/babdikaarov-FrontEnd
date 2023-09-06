import Node from "./Node.js";
import LinkedList from "./LinkedList.js";

const myList = new LinkedList();

myList.addToHead("Node 1");
myList.addToHead("Node 2");
myList.addToHead("Node 3");
myList.addToHead("Node 4");

const foundNode = myList.findNodeIteratively("Node 3");
const myNodeRecursive = myList.findNodeRecursively("Node 2");

console.log(foundNode);
console.log(myNodeRecursive);
