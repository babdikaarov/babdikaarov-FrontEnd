import { restaurants, Restaurant } from "./restaurants.js";
import { orders, Order, PriceBracket } from "./orders.js";

/// Add your getMaxPrice() function below:
function getMaxPrice(value: PriceBracket): number {
    switch (value) {
      case PriceBracket.Low:
        return 10;
      case PriceBracket.Medium:
        return 20;
      case PriceBracket.High:
        return 30;
    }
  }
/// Add your getOrders() function below:

function getOrders(price: PriceBracket, orders: Order[][]): Order[][] {
    let filteredOrders: Order[][] = [];

    orders.forEach((array) => {
        let temp = array.filter((element)=> element.price <= getMaxPrice(price))
        filteredOrders.push(temp)
    }
    )
    return filteredOrders;
}
/// Add your printOrders() function below:

function printOrders(arg1: Restaurant[], arg2: Order[][]){
    arg2.forEach((element, i) => {
        if(element.length){
            console.log(`Restaurant Name ${arg1[i].name}`);
            element.forEach((el)=>console.log(`- Order ${el.name}: ${el.price}`))
        }
    });

}
/// Main
const elligibleOrders = getOrders(PriceBracket.Low, orders);
printOrders(restaurants, elligibleOrders);
