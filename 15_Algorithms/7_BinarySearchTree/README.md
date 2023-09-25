# Introduction

A binary tree is an efficient data structure for fast data storage and retrieval due to its O(log N) runtime. It is a specialized tree data structure that is made up of a root node, and at most two child branches or subtrees. Each child node is itself a binary tree.

Each node has the following properties:

data
a depth value, where depth of 1 indicates the top level of the tree and a depth greater than 1 is a level somewhere lower in the tree
a left pointer that points to a left child which is itself a binary tree, and must have a data lesser than the root node’s data
a right pointer that points to a right child which is itself a binary tree, and must have a data greater than the root node’s data

![asd](./Binary_Search_Tree_Visualization_Updated_1.svg)

## Inserting a Value

When inserting a new value into a binary tree, we compare it with the root node’s value:

```
If the new value is less than the root node's value
  If a left child node doesn't exist
    Create a new BinaryTree with the new value at a greater depth and assign it to the left pointer
  Else
    Recursively call .insert() on the left child node  
Else
  If a right child node doesn't exist
    Create a new BinaryTree with the new value at a greater depth and assign it to a right pointer
  Else
    Recursively call .insert() on the right child node
```

Let’s illustrate the insertion procedure with a tree whose root node has the data 100.

```
Insert 50
50 < 100, left child node doesn't exist, create a left child node
       100
       /
     50
Insert 125
125 > 100, right child node doesn't exist, create a right child node
        100
       /   \
      50    125
Insert 75
75 < 100, left child node of 50 exists, recursive insert at left child
75 > 50, right child node doesn't exist, create a right child node
        100
       /   \
      50    125
       \
       75
Insert 25
25 < 100, left child node of 50 exists, recursive insert at left child
25 < 50, left child node doesn't exist, create a left child node
        100
       /   \
      50    125
     /  \
    25  75
```

## Retrieve a Node by Value

Recall that a binary search tree provides a fast and efficient way to store and retrieve values. Like with .insert(), the procedure to retrieve a tree node by its value is recursive. We want to traverse the correct branch of the tree by comparing the target value to the current node’s value.

The base case for our recursive method is that when the values match, we return the current node. The recursive step is to call itself from an existing left or right child node with the value.

```
If target value is the same as the current node value
  Return the current node
Else
  If target value is less than the root node's value and there is a left child node
    Recursively search from the left child node
  Else if there is a right child node
    Recursively search from the right child node
Given the following tree:

        100
       /   \
      50    125
     /  \
    25  75
```

To retrieve 75, the algorithm would proceed as follows:

```
At root node, 75 < 100 and there is a left child

        100
       /   \
 ==>  50    125
     /  \
    25  75

At the node 50, 75 > 50 and there is a right child

        100
       /   \
      50    125
     /  \
    25  75 <== 

Node 75 = 75, return this node
```

## Traversing a Binary Tree

There are two main ways of traversing a binary tree: breadth-first and depth-first. With breadth-first traversal, we begin traversing at the top of the tree’s root node, displaying its data and continuing the process with the left child node and the right child node. Descend a level and repeat this step until we finish displaying all the child nodes at the deepest level from left to right.

With depth-first traversal, we always traverse down each left-side branch of a tree fully before proceeding down the right branch. However, there are three traversal options:

- Preorder is when we perform an action on the current node first, followed by its left child node and its right child node
- Inorder is when we perform an action on the left child node first, followed by the current node and the right child node
- Postorder is when we perform an action on the left child node first, followed by the right child node and then the current node
For this lesson, we will implement the inorder option. The advantage of this option is that the data is displayed in a sorted order from the smallest to the biggest.

To illustrate, let’s say we have a binary tree that looks like this:

```
           15
     /------+-----\
    12            20
   /   \         /   \
 10     13     18     22
 / \   /  \    / \   /  \
8  11 12  14  16 19 21  25
```

We begin by traversing the left subtree at each level, which brings us to 8, 10 and 11 reside. The inorder traversal would be:

```
8, 10, 11
```

We ascend one level up to visit root node 12 before we descend back to the bottom where the right subtree of 12, 13, and 14 resides. Inorder traversal continues with:

```
12, 12, 13, 14
```

We again ascend one level up to visit root node 15 before we traverse the right subtree starting at the bottom level again. We continue with the bottom leftmost subtree where 16, 18 and 19 reside. The inorder traversal continues with:

```
15, 16, 18, 19
```

We ascend one level up to visit root node 20 before we descend back to the bottom where the rightmost subtree of 21, 22 and 25 resides.

Traversal finishes with:

```
20, 21, 22, 25
```

The entire traversal becomes:

```
8, 10, 11, 12, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 25
```

Notice that all the values displayed are sorted in ascending order.

## Review

In this lesson, you have successfully built a binary tree data structure in JavaScript. You have implemented:

- a BinaryTree class containing value, left and right child nodes and a depth
- an .insert() method to add and place a value at the correct location in the binary tree
- a .getNodeByValue() method to retrieve a child node by its value or null
- a .depthFirstTraversal() method to traverse the binary tree using the inorder traversal option
