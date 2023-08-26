import React from 'react';
import styles from '../styles/Game.module.css';


export default function GameResult({playerChoice, codeyChoice, result, resetGame}) {
// console.log(playerChoice, 'test')
function handleOnClick(){
    resetGame();
}
/* create an object variable named choiceStyles. The object should contain the following properties:

Display with the value of flex.
Align items with the value of center.
Margin bottom with a value of 40 pixels. */

const choiceStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: 40
}

/* define another object variable named emojiStyles with the following properties:

Font size with the value 64 pixels.
Margin right with the value of 20 pixels. */

const emojiStyles = {
  fontSize: 64,
  marginRigth: 20
}

/* define another object variable named nameStyles with the following properties:

Margin of 0 pixels.
Font size of 24 pixels.
Color with the value of #ffff. */

const nameStyles = {
  margin: 0,
  fontSize: 24,
  color: "#ffff"
}

/*  define another object variable named resultStyle with the following properties:

Margin top of 40 pixels.
Font size of 48 pixels.
Color with the value of #ffff. */
const resultStyles = {
  marginTop: 40,
  fontSize: 48,
  color: "#ffff"
}

    return playerChoice && codeyChoice && (
        <div className={styles.results}>
          <div style={choiceStyle} >
            <span style={emojiStyles} >{playerChoice.emoji}</span>
            <p style={nameStyles} >You chose {playerChoice.name}</p>
          </div>
          <div style={choiceStyle} >
            <span style={emojiStyles} >{codeyChoice.emoji}</span>
            <p style={nameStyles} >The computer chose {codeyChoice.name}</p>
          </div>
          <h2 style={resultStyles} >{result}</h2>
          <button className={styles.button} onClick={handleOnClick}>Play again</button>
        </div>
      )
}