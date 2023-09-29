import { simpleGraph as testGraph } from "./testGraph.js";

const depthFirstTraversal = (start, visitedVertices = [start]) => {
  console.log(start.data);
  if (start.edges.length) {
    const neighbor = start.edges[0].end;
    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      depthFirstTraversal(neighbor, visitedVertices);
    }
  }
};

depthFirstTraversal(testGraph.vertices[0]);
