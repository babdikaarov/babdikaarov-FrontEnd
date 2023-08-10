import {cookBeans, steamBroccoli, cookRice, bakeChicken} from './concurencyPromiseShowCase.js';

// Write your code below:
async function serveDinner(){
  let vegetablePromise = steamBroccoli();
  let starchPromise = cookRice();
  let proteinPromise = bakeChicken();
  let sidePromise = cookBeans();
  console.log(`ServeDinned async function: Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
};
async function waiting(){
  let vegetablePromise = await steamBroccoli();
  let starchPromise = await cookRice();
  let proteinPromise = await bakeChicken();
  let sidePromise = await cookBeans();
  console.log(`Waiting async function: Dinner is served. We're having ${ vegetablePromise}, ${ starchPromise}, ${ proteinPromise}, and ${ sidePromise}.`)
};
  let vegetablePromise;
  let starchPromise;
  let proteinPromise;
  let sidePromise;


async function serveDinner2(){
  steamBroccoli().then((steamBroccoliP) => {
    vegetablePromise = steamBroccoliP
  });
  cookRice().then((cookRiceP) => {
    starchPromise = cookRiceP
  });
  bakeChicken().then((bakeChickenP) => {
    proteinPromise = bakeChickenP
  });
  cookBeans().then((cookBeansP) => {
    console.log(`Then chained async function: Dinner is served. We're having ${ vegetablePromise}, ${ starchPromise}, ${ proteinPromise}, and ${ cookBeansP}. 2ndtest`)
  })
  
};

const serveDinnerAgain = async () => {
    const foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
    let vegetable = foodArray[0];
  let starch =  foodArray[1];
  let protein =  foodArray[2];
  let side =  foodArray[3];
   
  console.log(`Promise All: Dinner is served. We're having ${vegetable}, ${starch}, ${protein}, and ${side}.`);
  }
  
  
serveDinnerAgain()
serveDinner();
serveDinner2();
waiting();

