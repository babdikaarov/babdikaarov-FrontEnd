import products from "./products";

let productName = products[0].name;
let shippingAddress: string;

function order(prod: string, address= "") {
  const product = products.find((product) => product.name === prod);
  if(!product) return
  let shipping: number, taxPercent: number = 0.05, taxTotal: number, total: number;

  if (JSON.parse(product.preOrder) === true) {
    console.log("We will send you a message when your product is on its way.");
  }
  if (Number(product.price) > 25) shipping = 0
  else shipping = 5;
  if (address.toLocaleLowerCase().match('New York')) taxPercent = 0.1;
  taxTotal = taxPercent * JSON.parse(product.price);
  total = taxTotal + Number(product.price);

  console.table({
    "Product name": product?.name,
    "Shipping address": address,
    "Price of the product": product.price, 
    "Tax total": taxTotal,
    Shipping: shipping === 0 ? "free" : 5,
    "Total amount": total
  })
  
}

order(productName, "New York");