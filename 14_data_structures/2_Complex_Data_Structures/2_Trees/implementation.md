# Introduction

Trees are wonderful data structures that can model real life hierarchical information, including organizational charts, genealogical trees, computer file systems, HTML elements on a web page (also known as the Document Object Model, or DOM), state diagrams, and more.

A tree is composed of tree nodes. A tree node is a very simple data structure that contains:

Data
A list of children, where each child is itself a tree node
We can add data to and remove data from a tree and traverse it in two different ways:

Depth-first, or
Breadth-first
In this lesson, we’re going to implement the tree node data structure as a class in JavaScript.

```js
class TreeNode {
  constructor(data){
    this.data = data;
    this.children = [];
  }
};
```

## Adding a Child

The next task is to add a child to our tree. Each child in our children array has to be an instance of a TreeNode, however we want to allow our user interface to accept adding data in other forms as well.

For instance, if our method to add a child is .addChild(), we want to accommodate calling tree.addChild(3) as well as tree.addChild(new TreeNode(3)).

```js
addChild(child){
    if(child instanceof TreeNode){
      this.children.push(child);
    }else {
      const newChild = new TreeNode(child);
      this.children.push(newChild);
    }
  }
```

## Removing a Child

Like with .addChild(), we want to provide a flexible interface for removing a child from a tree based on either its data or a TreeNode match. For example, if our method to remove a child is .removeChild(), we want to be able to execute the following:

```js
const blue = 'blue';
const green = new TreeNode('green');
tree.addChild(blue);        // add data
tree.addChild(green);       // add TreeNode
tree.removeChild('blue');   // remove by data
tree.removeChild(green);    // remove by TreeNode
```

The generic steps to execute in removing a child from a tree are as follows:

```txt
If target child is an instance of TreeNode,
  Compare target child with each child in the children array
  Update the children array if target child is found
Else
  Compare target child with each child's data in the children array
  Update the children array if target child is found
If target child is not found in the children array
  Recursively call .removeChild() for each grandchild.
  ```

Because we implemented the children as an array, we can use the array .filter() method to update children. Like with .addChild(), we can also use instanceof to check if our target child is an instance of a TreeNode.

## Pretty Print

Wouldn’t it be nice to be able to display the structure of our tree in a captivating visual way? We have provided a helpful method, .print() that will give you a formatted text display of our tree.

For example, a tree with 3 levels starting with root node 15, children 3, 12, 0, and grandchildren 6, 9, 19, 8, 10, 19 is displayed below:

```txt
15
-- 3
-- -- 6
-- -- 9
-- 12
-- -- 19
-- -- 8
-- 0
-- -- 10
-- -- 19
```

This method takes one parameter, level, which is initialized to 0, to enable printing the entire tree structure from the top to the bottom.

## Depth-first Tree Traversal

Now that we can add nodes to our tree, the next step is to be able to traverse the tree and display its content. We can do this in one of two ways: depth-first or breadth-first.

Depth-first traversal visits the first child in the children array and that node’s children recursively before visiting its siblings and their children recursively. The algorithm is as follows:

```txt
For each node
  Display its data
  For each child in children, call itself recursively
```

Based on this tree displayed using .print():

```txt
15
-- 3
-- -- 6
-- -- 9
-- 12
-- -- 19
-- -- 8
-- 0
-- -- 10
-- -- 19
```

we can traverse it depth-wise to produce this result:

```txt
15
3
6
9
12
19
8
0
10
19
```

## Breadth-first Tree Traversal

Breadth-first traversal visits each child in the children array starting from the first child before visiting their children and further layers until the bottom level is visited. The algorithm is as follows:

```txt
Assign an array to contain the current root node
While the array is not empty
  Extract the first tree node from the array
  Display tree node's data
  Append tree node's children to the array
```

Based on this tree displayed using .print():

```js
15
-- 3
-- -- 6
-- -- 9
-- 12
-- -- 19
-- -- 8
-- 0
-- -- 10
-- -- 19
```

we can traverse it breadth-wise to produce this result:

```js
15
3
12
0
6
9
19
8
10
19
```

Let’s implement our breadth-first traversal for TreeNode.

## Review

In this lesson, you have successfully built a tree data structure in JavaScript. You have implemented:

a TreeNode class that contains data and maintains a collection of TreeNode classes called children.
an .addChild() method that adds a child to the tree as either data or TreeNode
a .removeChild() method that removes a child from the tree as either data or TreeNode
a .depthFirstTraversal() recursive method that fully traverses the tree with a top-down approach for each child of the tree
a .breadthFirstTraversal() iterative method that fully traverses the tree a level at a time, instead of a child at a time
Congratulations!!
