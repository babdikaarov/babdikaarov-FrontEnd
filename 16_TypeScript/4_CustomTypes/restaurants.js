"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurants = void 0;
const orders_js_1 = require("./orders.js");
exports.restaurants = [
    {
        name: "Silver Rice Sushi 🍣",
        priceBracket: orders_js_1.PriceBracket.Medium,
        deliveryTimeMinutes: 40,
        openHour: "12",
        closeHour: "23",
        distance: "5",
    },
    {
        name: "Nikko's Rotisserie Chicken 🍗",
        priceBracket: orders_js_1.PriceBracket.Low,
        deliveryTimeMinutes: 20,
        openHour: "12",
        closeHour: "21",
        distance: "8",
    },
    {
        name: "Aita Trattoria 🍝",
        priceBracket: orders_js_1.PriceBracket.High,
        deliveryTimeMinutes: 60,
        openHour: "18",
        closeHour: "22",
        distance: "1",
    },
    {
        name: "Lula Bagel 🥯",
        priceBracket: orders_js_1.PriceBracket.Low,
        deliveryTimeMinutes: 20,
        openHour: "0",
        closeHour: "12",
        distance: "2",
    },
    {
        name: "Golden Chopstick 🥢",
        priceBracket: orders_js_1.PriceBracket.Medium,
        deliveryTimeMinutes: 20,
        openHour: "15",
        closeHour: "23",
        distance: "12",
    },
];
