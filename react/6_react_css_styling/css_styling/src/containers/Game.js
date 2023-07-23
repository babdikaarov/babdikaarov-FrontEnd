import React, { useState } from "react";
import GameInterface from "../components/GameInterface";
import GameResult from "../components/GameResult";
import { CHOICES } from '../data/rockPaperScissor';
import styles from '../styles/Game.module.css';

function Game() {
  // states
  const [playerChoice, setPlayerChoice] = useState(null);
  const [codeyChoice, setCodeyChoice] = useState();
  const [result, setResult] = useState(null);



  function handlePlayerChoice(choice) {
    const codeyChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setPlayerChoice(choice);
    setCodeyChoice(codeyChoice);
    if (choice.name === codeyChoice.name) {
      setResult("Tie!");
    } else if (
      (choice.name === "rock" && codeyChoice.name === "scissors") ||
      (choice.name === "paper" && codeyChoice.name === "rock") ||
      (choice.name === "scissors" && codeyChoice.name === "paper")
      ) {
        setResult("You win!");
      } else {
        setResult("You lose!");
      }
    }
    
    //resetGame
    
  function resetGame() {
    setPlayerChoice(null);
    setCodeyChoice(null);
    setResult(null);
  }

  return (
    <div className={styles.container}>
      
      <GameInterface onSelectChoice={handlePlayerChoice} />

      <GameResult
          playerChoice={playerChoice}
          codeyChoice={codeyChoice}
          result={result}
          resetGame={resetGame} />
    </div>
  );
}

export default Game;

