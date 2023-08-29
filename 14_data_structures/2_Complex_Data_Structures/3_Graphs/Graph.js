class Edge {
  constructor(start, end, weight = null) {
    this.start = start;
    this.end = end;
    this.weight = weight;
  }
}

/* Vertex */

class Vertex {
  constructor(data) {
    this.data = data;
    this.edges = [];
  }
  addEdge(vertex, weight) {
    if (vertex instanceof Vertex) {
      this.edges.push(new Edge(this, vertex, weight));
    } else {
      throw new Error("Edge start and end must both be Vertex");
    }
  }
  removeEdge(vertex) {
    if (vertex instanceof Vertex) {
      const removedEdge = this.edges.filter((el) => el.end !== vertex);
      this.edges = removedEdge;
    }
  }

  print() {
    const edgeList =
      this.edges.map((edge) =>
        edge.weight !== null
          ? `${edge.end.data} (${edge.weight})`
          : edge.end.data
      ) || [];

    const output = `${this.data} --> ${edgeList.join(", ")}`;
    console.log(output);
  }
}

/* Graph */
export default class Graph {
  constructor(isWeighted = false, isDirected = false) {
    this.vertices = [];
    this.isWeighted = isWeighted;
    this.isDirected = isDirected;
  }
  addVertex(data) {
    const newVertex = new Vertex(data);
    this.vertices.push(newVertex);
    console.log(` adding vertex ${newVertex.data}`);
    return newVertex;
  }
  addEdge(vertexOne, vertexTwo, weight) {
    const edgeWeight = this.isWeighted ? weight : null;

    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      if (!this.isDirected) {
        vertexOne.addEdge(vertexTwo, edgeWeight);
        vertexTwo.addEdge(vertexOne, edgeWeight);
      } else {
        vertexOne.addEdge(vertexTwo, edgeWeight);
      }
    } else {
      throw new Error("Expected Vertex arguments.");
    }
  }

  removeEdge(vertexOne, vertexTwo) {
    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      if (this.isDirected) {
        vertexOne.removeEdge(vertexTwo);
      } else {
        vertexOne.removeEdge(vertexTwo);
        vertexTwo.removeEdge(vertexOne);
      }
    } else {
      throw new Error("Expected Vertex arguments.");
    }
  }
  removeVertex(vertex) {
    if (vertex instanceof Vertex) {
      const removedVertex = this.vertices.filter((el) => el !== vertex);
      console.log(`  removing vertex ${vertex.data}`);
      this.vertices = removedVertex;
    }
  }

  print() {
    const vertexList = this.vertices || [];
    vertexList.forEach((vertex) => vertex.print());
  }
}
