"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("./products"));
let productName = products_1.default[0].name;
let shippingAddress;
function order(prod, address = "") {
    const product = products_1.default.find((product) => product.name === prod);
    if (!product)
        return;
    let shipping, taxPercent = 0.05, taxTotal, total;
    if (JSON.parse(product.preOrder) === true) {
        console.log("We will send you a message when your product is on its way.");
    }
    if (Number(product.price) > 25)
        shipping = 0;
    else
        shipping = 5;
    if (address.toLocaleLowerCase().match('New York'))
        taxPercent = 0.1;
    taxTotal = taxPercent * JSON.parse(product.price);
    total = taxTotal + Number(product.price);
    console.table({
        "Product name": product?.name,
        "Shipping address": address,
        "Price of the product": product.price,
        "Tax total": taxTotal,
        Shipping: shipping === 0 ? "free" : 5,
        "Total amount": total
    });
}
order(productName, "New York");
