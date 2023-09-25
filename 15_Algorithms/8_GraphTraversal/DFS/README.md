# Depth-First Traversal (One path)

Traversals are incredibly useful when you are trying to find a particular value or a particular path in a graph. We’ll first explore the depth-first traversal function for traversing through a directed graph. To recap, depth-first traversals iterate down each vertex, one neighbor at a time, before going back up and looking at the neighbor’s connected vertices. In this exercise, we will focus on traversing down the full length of one path and logging each vertex’s data value.

For simplicity, we’ll implement the traversal iterator as a separate function instead of as a method on the Graph class. In other implementations, the iterator can be seen as a class method.

We have also set up a sample graph in testGraph.js for you to test the traversals against. Feel free to take a look at the file to familiarize yourself with the structure of the graph.
