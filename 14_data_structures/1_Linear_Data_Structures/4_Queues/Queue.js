import LinkedList from "./LinkedList.js";

export default class Queue {
  // bounded to infinity by default, assignable trhough passing an argument;
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }

  /* Bounded Queues */
  hasRoom() {
    return this.size < this.maxSize;
  }
  isEmpty() {
    return this.size === 0;
  }

  /* Enqueue */

  enqueue(data) {
    /* Avoiding Overflow */
    if (this.hasRoom()) {
      this.queue.addToTail(data);
      this.size++;
      console.log(`Added ${data} to queue! Queue size is now ${this.size}.`);
    } else {
      /* Overflow detected */
      throw new Error("Queue is full!");
    }
  }

  /* Dequeue */
  dequeue() {
    /* Avoiding Underflow */
    if (!this.isEmpty()) {
      const data = this.queue.removeHead();
      this.size--;
      console.log(
        `Removed ${data} from queue! Queue size is now ${this.size}.`
      );
      return data;
    } else {
      /* Underflow detected */
      throw new Error("Queue is empty!");
    }
  }
}

const restaurantOrders = new Queue(6);
restaurantOrders.enqueue("soup");
restaurantOrders.enqueue("soup2");
restaurantOrders.enqueue("soup23");
restaurantOrders.enqueue("soup234");

console.log(`restaurantOrders has ${restaurantOrders.size} nodes`);
