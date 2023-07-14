// array of choices
const arr = ['rock', 'paper', 'scissors'];
let randomComp = Math.floor(Math.random() * 3);
// computer's choice
const getComputerChoice = () => {
  return arr[randomComp]; 
}
//user's choice
const getUserChoice  = userInput =>{
  userInput = userInput.toLowerCase();
  for (const check of arr){
    if(check === userInput) {
      return userInput
    } else {
      return console.log('type: rock, paper, scissors')
    }
  }
}

// determine winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return "The game is TIE!"
  } else if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')) {
    return "User WON!"
  } else {
    return "Computer WON!"
  }
}

//run the game

/*const playGame = () => {
  const user = getUserChoice('rock');
  const comp = getComputerChoice();
  console.log('User - ' + user)
  console.log('Comp - ' + comp)
  console.log(determineWinner(user, comp))
}

playGame() */

//automate the game in console
const randomUser = Math.floor(Math.random() * 3);
const playGame = () => {
  const user = arr[randomUser];
  const comp = getComputerChoice();
  console.log('User - ' + user)
  console.log('Comp - ' + comp)
  console.log(determineWinner(user, comp))
}

playGame()


