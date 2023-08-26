const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
function declineEverything(arr) {
  arr.forEach(politelyDecline);
}
const acceptEverything = strArr => {
  strArr.forEach(element => console.log(`Ok, I guess I will eat some ${element}.`))
}
acceptEverything(veggies);
declineEverything(veggies);