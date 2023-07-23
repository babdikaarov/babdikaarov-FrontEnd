// kelvin set to 293
const kelvin = 350;
// celsius is less to kelvin by 273
export let celsius = kelvin - 273;
// fahrenheit formula
export let fahrenheit = Math.floor(celsius * (9/5) + 32);
// log of fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
export let newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} Newton scale.`)


