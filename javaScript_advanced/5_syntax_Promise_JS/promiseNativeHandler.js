import {checkInventory, processPayment, shipOrder, checkAvailability} from './promiseConstruct.js';

const order = {
  items: [['sunglasses', 200], ['bags', 2]],
  giftcardBalance: 79.82
};

const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants  = checkAvailability('pants', 'Favorite Supply Co.');
const checkBags  = checkAvailability('bags', 'Favorite Supply Co.');

let myPromises = Promise.all([checkSunglasses, checkBags, checkPants]);

myPromises  
  .then(()=>console.log(`Every item was available from the distributor. Placing order now.`))
  .catch(reject=>console.log(reject));

checkInventory(order)
.then((resolvedValueArray) => {
    // Write the correct return statement here:
    return processPayment(resolvedValueArray)
})
.then((resolvedValueArray) => {
    // Write the correct return statement here:
    return shipOrder(resolvedValueArray)
})
.then((successMessage) => {
    console.log(successMessage);
})
.catch((errorMessage) => {
    console.log(errorMessage);
});


