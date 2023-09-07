# Binary Search and Search Trees

Get started with binary search and search trees!

Binary Search
When given a sorted array of data, binary search is a way of searching through that data to find an element in O(log n) time using a divide and conquer approach. It doesn’t require you to look through the entire array in a linear way, which would have a linear big O runtime of O(n).

Binary Search Trees
Binary search trees are a type of tree data structure with the added condition that each element to the left of a node must be less than that parent node, and each element to the right of a node must be greater than that parent node. Each left and right subtree is also itself a binary search tree, which makes searching for elements more efficient.

Binary search and binary search trees (BST) are related concepts, but they are not the same thing. They both involve searching for a specific value in a collection of data, but they operate differently and have distinct purposes.

1. **Binary Search:**
   - Binary search is an efficient algorithm for finding a specific element in a sorted array or list.
   - It works by repeatedly dividing the search interval in half and comparing the target value with the middle element until the element is found or the search interval becomes empty.
   - Binary search has a time complexity of O(log n), making it very efficient for large datasets.

2. **Binary Search Tree (BST):**
   - A binary search tree is a data structure used for organizing and storing a collection of elements.
   - In a BST, each node has at most two child nodes: a left child and a right child.
   - The key property of a BST is that for any given node, all nodes in its left subtree have values less than the node's value, and all nodes in its right subtree have values greater than the node's value.
   - BSTs are often used for efficient searching, insertion, and deletion of elements.
   - The time complexity of operations on a balanced BST (e.g., searching) is O(log n) on average, but it can degrade to O(n) in the worst case if the tree becomes unbalanced.

In summary, binary search is an algorithm for searching in a sorted collection, while a binary search tree is a data structure that maintains a hierarchical ordering of elements, making it efficient for various operations, including searching. They are related in the sense that binary search can be applied to a sorted array, and a balanced binary search tree can provide efficient searching capabilities.
