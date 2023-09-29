import { testGraph } from "./testGraph.js";
import { dijkstras } from "./dijkstras.js";

const shortestPathBetween = (graph, startingVertex, targetVertex) => {
  const { distances, previous } = dijkstras(graph, startingVertex);
  const distance = distances[targetVertex.data];
  const path = [];
  let vertex = targetVertex;
  while (vertex) {
    path.unshift(vertex);
    vertex = previous[vertex.data];
  }
  return { distance, path };
};

// Retrieve shortest path between vertices A and G
const a = testGraph.getVertexByValue("A");
const g = testGraph.getVertexByValue("G");
const results = shortestPathBetween(testGraph, a, g);
console.log(results);
export { shortestPathBetween };
