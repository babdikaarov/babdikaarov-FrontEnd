**Breadth-First Traversal (First Layer) Documentation**

**Introduction:**
Breadth-First Traversal (BFS) is a graph traversal algorithm that iterates through a graph layer by layer. In this exercise, we focus on traversing down the first layer of neighbors from a given starting vertex. BFS explores all immediate neighbors of the start vertex before moving to the next layer.

**Implementation:**
The algorithm is implemented using a queue data structure to maintain the order of traversal. It starts with the provided starting vertex and iterates through its direct neighbor vertices.

```javascript
// Pseudocode:
function breadthFirstTraversal(startVertex) {
  // Initialize the list of visited vertices with the start vertex
  const visitedVertices = [startVertex];
  
  // Iterate through the edges of the start vertex
  startVertex.edges.forEach(function(edge) {
    const neighbor = edge.endVertex;
    // Check if the neighbor has not been visited
    if (!visitedVertices.includes(neighbor)) {
      // Mark neighbor as visited by adding it to the list
      visitedVertices.push(neighbor);
    }
  });

  // Print the visited vertices to check the order
  console.log(visitedVertices);
}
```

**Usage:**
To use this algorithm, call `breadthFirstTraversal()` with the starting vertex as an argument. It will traverse down one layer of neighbors, exploring all immediate neighbors of the start vertex.

**Example:**

```javascript
// Example usage with a sample graph called 'testGraph'
const startVertex = testGraph.getVertex("v0.0.0");
breadthFirstTraversal(startVertex);
```

**Result:**
The algorithm will visit and print the vertices in the order v0.0.0, v1.0.0, and v2.0.0, which represents the first layer of neighbors from the start vertex.

**Conclusion:**
Breadth-First Traversal (First Layer) provides a straightforward way to explore the immediate neighbors of a starting vertex. It is useful for various graph-related tasks and is the foundation for more extensive BFS implementations, such as traversing the entire graph layer by layer.

**Breadth-First Traversal (All Layers) Code**

Here's the JavaScript code implementing the instructions for the Breadth-First Traversal (All Layers) exercise:

```javascript
// Pseudocode:
function breadthFirstTraversal(startVertex) {
  // Initialize the list of visited vertices with the start vertex
  const visitedVertices = [startVertex];

  // Create a queue and enqueue the start vertex
  const visitQueue = new Queue();
  visitQueue.enqueue(startVertex);

  // Iterate while there are vertices in the queue
  while (!visitQueue.isEmpty()) {
    // Dequeue the next vertex to visit
    const current = visitQueue.dequeue();
    console.log(current.data); // Print the current vertex's data

    // Iterate through the edges (neighbors) of the current vertex
    current.edges.forEach(function(edge) {
      const neighbor = edge.endVertex;
      // Check if the neighbor has not been visited
      if (!visitedVertices.includes(neighbor)) {
        // Mark neighbor as visited by adding it to the list
        visitedVertices.push(neighbor);
        // Enqueue the neighbor for future exploration
        visitQueue.enqueue(neighbor);
      }
    });
  }
}

// Example usage with a sample graph called 'testGraph'
const startVertex = testGraph.getVertex("v0.0.0");
breadthFirstTraversal(startVertex);
```

**Explanation:**

- The `breadthFirstTraversal` function takes a starting vertex as an argument.
- It initializes a list called `visitedVertices` with the start vertex as the first element.
- A queue called `visitQueue` is created to keep track of vertices to visit, and the start vertex is enqueued.
- The algorithm iterates in a `while` loop as long as there are vertices in the `visitQueue`.
- Within the loop, it dequeues the next vertex to visit, prints its data, and iterates through its edges (neighbors).
- For each edge, it checks if the neighbor has not been visited (not in `visitedVertices`). If so, it marks the neighbor as visited, adds it to `visitedVertices`, and enqueues it for future exploration.

When you run this code with your test graph, it will print the vertices in the order: `v0.0.0`, `v1.0.0`, `v2.0.0`, `v1.1.0`, `v1.2.0`, `v2.1.0`, `v1.1.1`, `v1.1.2`, `v1.2.1`, and `v2.1.1`, representing all layers of neighbors in the graph.
