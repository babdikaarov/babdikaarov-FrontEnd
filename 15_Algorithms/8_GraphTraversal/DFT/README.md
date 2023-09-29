# Depth-First Traversal (One path)

Traversals are incredibly useful when you are trying to find a particular value or a particular path in a graph. We’ll first explore the depth-first traversal function for traversing through a directed graph. To recap, depth-first traversals iterate down each vertex, one neighbor at a time, before going back up and looking at the neighbor’s connected vertices. In this exercise, we will focus on traversing down the full length of one path and logging each vertex’s data value.

For simplicity, we’ll implement the traversal iterator as a separate function instead of as a method on the Graph class. In other implementations, the iterator can be seen as a class method.

We have also set up a sample graph in testGraph.js for you to test the traversals against. Feel free to take a look at the file to familiarize yourself with the structure of the graph.

## **Depth-First Traversal (All Paths) Documentation**

**Introduction:**
Depth-First Traversal (All Paths) is a modification of the standard Depth-First Search (DFS) algorithm. Instead of exploring only the first possible path, it explores all paths within a graph. This modification allows for a comprehensive examination of all possible routes within the graph.

**Implementation:**
The algorithm is implemented by iterating through all of the edges connected to a starting vertex. A `forEach()` loop is used to iterate through these edges, ensuring that all paths are considered.

```javascript
// Pseudocode:
function depthFirstTraversal(startVertex, visitedVertices) {
  // Iterate through all edges of the start vertex
  startVertex.edges.forEach(function(edge) {
    const neighbor = edge.endVertex;
    // Check if the neighbor has not been visited
    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      // Recursive call to explore the neighbor's paths
      depthFirstTraversal(neighbor, visitedVertices);
    }
  });
}
```

**Usage:**
To use this algorithm, you call `depthFirstTraversal()` with a starting vertex and an array to track visited vertices. The algorithm will traverse down each path until it reaches a dead end, then it continues down the next path at the neighboring vertex, and so on.

**Example:**

```javascript
// Example usage with a sample graph called 'testGraph'
const visitedVertices = [];
const startVertex = testGraph.getVertex("v0.0.0");
visitedVertices.push(startVertex);
depthFirstTraversal(startVertex, visitedVertices);
```

**Result:**
The algorithm will visit and print the vertices in the following order: v0.0.0, v1.0.0, v1.1.0, v1.1.1, v1.1.2, v1.2.0, v1.2.1, v2.0.0, v2.1.0, and v2.1.1, comprehensively exploring all paths in the graph.

**Conclusion:**
Depth-First Traversal (All Paths) is a valuable algorithm for exhaustively analyzing all possible routes within a graph, making it useful for various applications such as graph traversal, network analysis, and pathfinding.

**Depth-First Traversal (Callbacks) Documentation**

**Introduction:**
Depth-First Traversal (Callbacks) is an enhanced implementation of Depth-First Search (DFS) that allows users to customize the actions taken during traversal by providing a callback function. While the default behavior prints out the traversal order, this modification enables various other applications, such as determining path existence or performing custom actions.

**Implementation:**
The algorithm has been extended to accept a callback function as an argument, giving users the flexibility to define their own actions during traversal.

```javascript
// Pseudocode:
function depthFirstTraversal(startVertex, callback) {
  // Perform the custom callback on the start vertex
  callback(startVertex);
  
  // Recursively traverse through the edges
  startVertex.edges.forEach(function(edge) {
    const neighbor = edge.endVertex;
    // Ensure neighbor has not been visited before
    if (!neighbor.visited) {
      // Mark neighbor as visited
      neighbor.visited = true;
      // Recursive call with the callback
      depthFirstTraversal(neighbor, callback);
    }
  });
}
```

**Usage:**
Users can employ this algorithm by passing a starting vertex and a callback function. The callback function determines the action to be performed at each visited vertex during traversal.

**Example:**

```javascript
// Example usage with a sample graph called 'testGraph'
function printVertexData(vertex) {
  console.log(vertex.data);
}

const startVertex = testGraph.getVertex("v0.0.0");
startVertex.visited = true; // Mark the start vertex as visited
depthFirstTraversal(startVertex, printVertexData);
```

**Result:**
The algorithm will execute the custom `printVertexData` callback on each visited vertex, providing flexibility to perform actions other than printing. Users can adapt the callback to their specific needs, such as evaluating path existence or custom data processing.

**Conclusion:**
Depth-First Traversal (Callbacks) offers a versatile approach to DFS by allowing users to define their own actions during traversal. This customization makes it suitable for a wide range of applications, from pathfinding and decision-making to custom data processing.
