"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restaurants_js_1 = require("./restaurants.js");
const orders_js_1 = require("./orders.js");
/// Add your getMaxPrice() function below:
function getMaxPrice(value) {
    switch (value) {
        case orders_js_1.PriceBracket.Low:
            return 10;
        case orders_js_1.PriceBracket.Medium:
            return 20;
        case orders_js_1.PriceBracket.High:
            return 30;
    }
}
/// Add your getOrders() function below:
function getOrders(price, orders) {
    let filteredOrders = [];
    orders.forEach((array) => {
        let temp = array.filter((element) => element.price <= getMaxPrice(price));
        filteredOrders.push(temp);
    });
    return filteredOrders;
}
/// Add your printOrders() function below:
function printOrders(arg1, arg2) {
    arg2.forEach((element, i) => {
        if (element.length) {
            console.log(`Restaurant Name ${arg1[i].name}`);
            element.forEach((el) => console.log(`- Order ${el.name}: ${el.price}`));
        }
    });
}
/// Main
const elligibleOrders = getOrders(orders_js_1.PriceBracket.Low, orders_js_1.orders);
printOrders(restaurants_js_1.restaurants, elligibleOrders);
