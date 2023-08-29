import Graph from "./Graph.js";

// const trainNetwork = new Graph(true);
// const trainNetwork = new Graph(false, true);

// const atlantaStation = trainNetwork.addVertex("Atlanta");
// const newYorkStation = trainNetwork.addVertex("New York");
// trainNetwork.addEdge(atlantaStation, newYorkStation, 800);
// trainNetwork.print();

// trainNetwork.removeVertex(atlantaStation);
// trainNetwork.print();

// const trainNetwork = new Graph(true, true);
// const stationList = [
//   "Los Angeles",
//   "San Francisco",
//   "New York",
//   "Atlanta",
//   "Denver",
//   "Calgary",
// ];
// const stationVertex = [];
// stationList.forEach((el) => stationVertex.push(trainNetwork.addVertex(el)));
// trainNetwork.addEdge(trainNetwork.vertices[1], trainNetwork.vertices[0], 400);
// trainNetwork.addEdge(trainNetwork.vertices[0], trainNetwork.vertices[1], 400);
// trainNetwork.addEdge(trainNetwork.vertices[2], trainNetwork.vertices[4], 1800);
// trainNetwork.addEdge(trainNetwork.vertices[4], trainNetwork.vertices[2], 1800);
// trainNetwork.addEdge(trainNetwork.vertices[5], trainNetwork.vertices[4], 1000);
// trainNetwork.addEdge(trainNetwork.vertices[4], trainNetwork.vertices[5], 1000);
// trainNetwork.addEdge(trainNetwork.vertices[0], trainNetwork.vertices[3], 2100);
// trainNetwork.addEdge(trainNetwork.vertices[3], trainNetwork.vertices[0], 2100);
// trainNetwork.removeEdge(trainNetwork.vertices[2], trainNetwork.vertices[4]);
// trainNetwork.removeEdge(trainNetwork.vertices[4], trainNetwork.vertices[5]);
// trainNetwork.removeEdge(trainNetwork.vertices[5], trainNetwork.vertices[4]);
// trainNetwork.removeVertex(trainNetwork.vertices[5]);

// trainNetwork.print();
const graph = new Graph(true, true);

const v1 = graph.addVertex("v1");
const v2 = graph.addVertex("v2");
const v3 = graph.addVertex("v3");

graph.addEdge(v1, v2, 10);
graph.addEdge(v1, v3, 10);
graph.addEdge(v2, v3, 10);

graph.print();
