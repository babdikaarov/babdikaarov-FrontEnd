# Linked List Introduction

Linked lists are one of the basic data structures used in computer science. They have many direct applications and serve as the foundation for more complex data structures.

The list is comprised of a series of nodes as shown in the diagram. The head node is the node at the beginning of the list. Each node contains data and a link (or pointer) to the next node in the list. The list is terminated when a node’s link is null. This is called the tail node.

Consider a one-way air travel itinerary. The trip could involve traveling through several airports (nodes) connected by air travel segments (links). In this example, the initial departure city is the head node and the final arrival city is the tail node.

Since the nodes use links to denote the next node in the sequence, the nodes are not required to be sequentially located in memory. These links also allow for quick insertion and removal of nodes as you will see in future exercises.

Common operations on a linked list may include:

adding nodes
removing nodes
finding a node
traversing (or traveling through) the linked list
Linked lists typically contain unidirectional links (next node), but some implementations make use of bidirectional links (next and previous nodes).

![1](./mdAssets/LinkedListUpdated.svg)

## Linked List Example

As an example, we added values to the linked list diagram from the introduction.

This linked list contains three nodes (node_a, node_b, and node_c).

Each node in this particular list contains a string as its data. As the sequence is defined, the order is "cats", "dogs", and "birds".

The list ends at node_c, since the link within that node is set to null.
![1](./mdAssets/LinkedListExampleUpdated.svg)

## Linked Lists Adding and Removing Nodes

With linked lists, because nodes are linked to from only one other node, you can’t just go adding and removing nodes willy-nilly without doing a bit of maintenance.

Adding a new node
Adding a new node to the beginning of the list requires you to link your new node to the current head node. This way, you maintain your connection with the following nodes in the list.

Removing a node
If you accidentally remove the single link to a node, that node’s data and any following nodes could be lost to your application, leaving you with orphaned nodes.

To properly maintain the list when removing a node from the middle of a linked list, you need to be sure to adjust the link on the previous node so that it points to the following node.

Depending on the language, nodes which are not referenced are removed automatically. “Removing” a node is equivalent to removing all references to the node.
![1](./mdAssets/removing_nodes_gif_preview_v2.webp)

## Try to finilize Linked List that has below features in free time

A linked list is a data structure that consists of a sequence of elements, where each element points to the next element in the sequence. The main methods commonly associated with a linked list include:

`Insertion Methods:`

- prepend(value): Inserts a new element at the beginning of the linked list.
- append(value): Inserts a new element at the end of the linked list.
- insertAfter(node, value): Inserts a new element after a specific node in the linked list.
- insertBefore(node, value): Inserts a new element before a specific node in the linked list.

`Deletion Methods:`

- delete(value): Deletes the first occurrence of the specified value from the linked list.
- deleteHead(): Deletes the first element (head) of the linked list.
- deleteTail(): Deletes the last element (tail) of the linked list.
- deleteNode(node): Deletes a specific node from the linked list.

`Search Methods:`

- search(value): Searches for the first occurrence of the specified value in the linked list.
- getNodeAt(index): Retrieves the node at a specific index in the linked list.

`Traversal Methods:`

- toArray(): Converts the linked list to an array.
- toString(): Converts the linked list to a string representation.

## Swapping Elements in a Linked List
