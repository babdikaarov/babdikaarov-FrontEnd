let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


//random function
const generateTarget = (random) => Math.floor(Math.random() * 9);

// range test 0-9

//comparasor
const getAbsoluteDistance = (a, b) => Math.abs(a-b);
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  
  return getAbsoluteDistance(humanGuess, targetNumber) <= getAbsoluteDistance(computerGuess, targetNumber);
  }

//Update score

const updateScore = str => str === 'human' ? humanScore++ : computerScore++;

//Round number 

const advanceRound = incr => currentRoundNumber++; 

// alert function





