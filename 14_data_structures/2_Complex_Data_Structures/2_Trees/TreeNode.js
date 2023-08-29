class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Trees {
  constructor(data) {
    this.root = null;
    this.count = 0;
  }

  size() {
    return this.count;
  }

  addChild(value) {
    this.count++;
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      const searchTree = (node) => {
        if (value < node.value) {
          if (!node.left) {
            node.left = newNode;
          } else {
            searchTree(node.left);
          }
        } else if (value > node.right) {
          if (!node.right) {
            node.right = newNode;
          } else {
            searchTree(node.right);
          }
        }
      };
      searchTree(this.root);
    }
  }

  min() {
    let currentNode = this.root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    console.log(currentNode.value);
    return currentNode.value;
  }

  max() {
    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    console.log(currentNode.value);
    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      if (currentNode.value < value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  dFTInOrder() {
    let result = [];
    const travers = (node) => {
      if (node.left) travers(node.left);
      result.push(node.value);
      if (node.right) travers(node.right);
    };
    travers(this.root);
    return result;
  }

  dFTPostOrder() {
    let result = [];
    const travers = (node) => {
      result.push(node.value);
      if (node.left) travers(node.left);
      if (node.right) travers(node.right);
    };
    travers(this.root);

    return result;
  }

  dFTPreOrder() {
    let result = [];
    const travers = (node) => {
      if (node.left) travers(node.left);
      if (node.right) travers(node.right);
      result.push(node.value);
    };
    travers(this.root);

    return result;
  }

  breadthFirstTraversal() {
    let queue = [];
    let result = [];
    queue.push(this.root);
    while (queue.length) {
      let currentNode = queue.shift();
      result.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return result;
  }
}

const tree = new Trees(15);
const randomize = () => Math.floor(Math.random() * 30);

for (let i = 0; i < 7; i++) {
  tree.addChild(randomize());
}

console.log(tree);
tree.min();
tree.max();
// pretty-print the tree
console.log(tree.dFTInOrder());
console.log(tree.dFTPreOrder());
console.log(tree.dFTPostOrder());
console.log(tree.breadthFirstTraversal());

/* below ds show more fundamental and simplified DS */

class TreeNode1 {
  constructor(value) {
    this.value = value;
    this.children = []; // Array to store child nodes
  }

  addChild(value) {
    const newChild = new TreeNode1(value);
    this.children.push(newChild);
    return newChild;
  }
}

class Tree {
  constructor(rootValue) {
    this.root = new TreeNode(rootValue);
  }

  traverseDFS(node = this.root) {
    console.log(node.value); // Visit the current node
    for (const child of node.children) {
      this.traverseDFS(child); // Recursively traverse children
    }
  }
}

// Usage example:
const myTree = new Tree(1);
const root = myTree.root;

const child1 = root.addChild(2);
const child2 = root.addChild(3);

child1.addChild(4);
child1.addChild(5);

child2.addChild(6);

myTree.traverseDFS(); // Outputs: 1 2 4 5 3 6
